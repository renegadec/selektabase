import { useEffect, useRef, useState } from 'react'

type YouTubeBackgroundProps = {
  videoId: string
  title: string
  poster: string
  /** Start of the looped segment, in seconds. */
  start?: number
  /** End of the looped segment, in seconds. Omit to play the whole video. */
  end?: number
}

type YTPlayer = {
  destroy: () => void
  mute: () => void
  playVideo: () => void
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
  getCurrentTime: () => number
  getIframe: () => HTMLIFrameElement
}

type YTNamespace = {
  Player: new (
    host: HTMLElement,
    options: {
      videoId: string
      host?: string
      playerVars?: Record<string, string | number>
      events?: {
        onReady?: (event: { target: YTPlayer }) => void
        onStateChange?: (event: { data: number; target: YTPlayer }) => void
      }
    },
  ) => YTPlayer
}

declare global {
  interface Window {
    YT?: YTNamespace
    onYouTubeIframeAPIReady?: () => void
  }
}

const API_SRC = 'https://www.youtube.com/iframe_api'

/** How long to keep the player hidden after playback starts, so YouTube's own
 *  startup overlay (title bar + centre play/pause button) has cleared. */
const REVEAL_DELAY_MS = 7000
/** Reveal regardless if the playing event never arrives. */
const REVEAL_FALLBACK_MS = 20000

let apiPromise: Promise<YTNamespace> | null = null

/** Loads the YouTube IFrame API once and resolves with the `YT` namespace. */
function loadYouTubeApi(): Promise<YTNamespace> {
  if (apiPromise) return apiPromise

  apiPromise = new Promise<YTNamespace>((resolve, reject) => {
    if (window.YT?.Player) {
      resolve(window.YT)
      return
    }

    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      if (window.YT?.Player) resolve(window.YT)
      else reject(new Error('YouTube IFrame API loaded without a Player constructor'))
    }

    if (document.querySelector(`script[src="${API_SRC}"]`)) return

    const script = document.createElement('script')
    script.src = API_SRC
    script.async = true
    script.addEventListener('error', () => reject(new Error('YouTube IFrame API failed to load')))
    document.head.append(script)
  })

  return apiPromise
}

/**
 * Full-screen, chrome-free YouTube loop used as the hero background.
 *
 * The URL parameters alone cannot loop a *segment* — `start`/`end` are honoured
 * on the first pass only, after which the player runs on past `end`. So the
 * player is driven through the IFrame API: it seeks back to `start` whenever
 * playback passes `end`, which keeps the background on the chosen excerpt.
 *
 * The iframe is cover-scaled, hidden from assistive tech and removed from the
 * tab order, and `pointer-events: none` keeps YouTube's hover chrome away. If
 * the API cannot load, the poster frame remains as the background.
 */
export default function YouTubeBackground({
  videoId,
  title,
  poster,
  start = 0,
  end,
}: YouTubeBackgroundProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let disposed = false
    let player: YTPlayer | null = null
    let pollId: number | undefined
    let revealId: number | undefined

    const stopPolling = () => {
      if (pollId !== undefined) {
        window.clearInterval(pollId)
        pollId = undefined
      }
    }

    /**
     * YouTube paints its own startup UI over the video — a title bar and a large
     * centre play/pause button — and only clears it a few seconds *after*
     * playback begins. We can't touch anything inside the cross-origin iframe,
     * so instead the player stays fully transparent until that overlay has gone,
     * leaving the clean poster frame on screen. Measured clear time is 3-6s after
     * playback starts; we wait longer to be safe.
     */
    const scheduleReveal = (delay: number) => {
      if (revealId !== undefined) window.clearTimeout(revealId)
      revealId = window.setTimeout(() => {
        if (!disposed) setReady(true)
      }, delay)
    }

    // Safety net: never leave the background hidden if the playing event is missed.
    scheduleReveal(REVEAL_FALLBACK_MS)

    loadYouTubeApi()
      .then((YT) => {
        if (disposed || !hostRef.current) return

        player = new YT.Player(hostRef.current, {
          videoId,
          host: 'https://www.youtube-nocookie.com',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            iv_load_policy: 3,
            disablekb: 1,
            cc_load_policy: 0,
            fs: 0,
            start,
            ...(end === undefined ? {} : { end }),
          },
          events: {
            onReady: (event) => {
              if (disposed) {
                event.target.destroy()
                return
              }

              const frame = event.target.getIframe()
              frame.title = title
              frame.tabIndex = -1
              frame.setAttribute('aria-hidden', 'true')

              event.target.mute()
              event.target.seekTo(start, true)
              event.target.playVideo()

              if (end === undefined) return

              stopPolling()
              pollId = window.setInterval(() => {
                if (disposed) return
                const time = event.target.getCurrentTime()
                if (typeof time === 'number' && time >= end - 0.3) {
                  event.target.seekTo(start, true)
                }
              }, 400)
            },
            onStateChange: (event) => {
              if (disposed) return
              // 1 = playing. This is when YouTube starts its overlay countdown,
              // so the reveal is timed from here rather than from onReady.
              if (event.data === 1) scheduleReveal(REVEAL_DELAY_MS)
              // 0 = ended, 2 = paused — keep the background running regardless.
              if (event.data === 0) {
                event.target.seekTo(start, true)
                event.target.playVideo()
              } else if (event.data === 2) {
                event.target.playVideo()
              }
            },
          },
        })
      })
      .catch(() => {
        // Poster frame stays as the background.
      })

    return () => {
      disposed = true
      if (revealId !== undefined) window.clearTimeout(revealId)
      stopPolling()
      try {
        player?.destroy()
      } catch {
        /* the player may already be torn down */
      }
      player = null
    }
  }, [videoId, start, end, title])

  return (
    <div className="video-bg" aria-hidden="true">
      <img className="video-bg__poster" src={poster} alt="" decoding="async" />
      {/*
        The IFrame API REPLACES the element it is handed with its own <iframe>.
        So the mount point lives inside a stable wrapper that React owns, and
        every size/fade rule is applied to the wrapper's iframe descendant.
      */}
      <div className={ready ? 'video-bg__player is-ready' : 'video-bg__player'}>
        <div ref={hostRef} />
      </div>
    </div>
  )
}
