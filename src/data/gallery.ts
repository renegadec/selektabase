/**
 * Media gallery.
 *
 * The aftermovies are real and embeddable. The photo grid is a structured
 * placeholder: the client has imagery from previous Borrowdale editions but the
 * files have not been supplied yet. Add entries with a `src` and they render as
 * real tiles; entries with `src: null` render as clearly-marked placeholders.
 */

export type GalleryVideo = {
  id: string
  title: string
  caption: string
  youtubeId: string
}

export type GalleryPhoto = {
  id: string
  title: string
  /** null → renders an "asset pending" placeholder tile. */
  src: string | null
  /** Rendered `wide` tiles span two columns on large screens. */
  wide?: boolean
}

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: 'retrospect-ep3',
    title: '2025 In Retrospect — Episode 3',
    caption: 'The 10th anniversary edition at Borrowdale Racecourse.',
    youtubeId: '0sI0__vvU6I',
  },
]

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'p1', title: 'Burnout smoke, main arena', src: null, wide: true },
  { id: 'p2', title: 'Driftkhana battle', src: null },
  { id: 'p3', title: 'Static display line-up', src: null },
  { id: 'p4', title: 'Biker showcase', src: null, wide: true },
  { id: 'p5', title: 'Main stage, after dark', src: null },
  { id: 'p6', title: 'Crowd, 7,000+ strong', src: null },
  { id: 'p7', title: 'Family midway', src: null },
  { id: 'p8', title: 'Fireworks finale', src: null, wide: true },
]

/** True while the photo grid still needs real assets. */
export const GALLERY_PENDING_ASSETS = GALLERY_PHOTOS.some((photo) => photo.src === null)
