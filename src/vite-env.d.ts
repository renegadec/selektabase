/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** YouTube video id used for the full-screen hero background loop. */
  readonly VITE_YOUTUBE_VIDEO_ID?: string
  /** Start of the looped segment, in seconds (default 3 = 0:03). */
  readonly VITE_YOUTUBE_START?: string
  /** End of the looped segment, in seconds (default 72 = 1:12). */
  readonly VITE_YOUTUBE_END?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
