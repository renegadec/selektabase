import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { GALLERY_PENDING_ASSETS, GALLERY_PHOTOS, GALLERY_VIDEOS } from '../data/gallery'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Previous editions"
        intro="Aftermovies and photography from the Blowout Festival at Borrowdale Racecourse."
      />

      <Section eyebrow="Aftermovie" title="Watch it back">
        <div className="video-grid">
          {GALLERY_VIDEOS.map((video) => (
            <figure className="video-embed" key={video.id}>
              <div className="video-embed__frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="video-embed__caption">
                <strong>{video.title}</strong>
                <span>{video.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Photography"
        title="From the arena"
        intro={
          GALLERY_PENDING_ASSETS
            ? 'Photography from previous editions is being added — these tiles are placeholders for the real images.'
            : 'Highlights from previous Borrowdale Racecourse editions.'
        }
        tinted
      >
        <ul className="photo-grid">
          {GALLERY_PHOTOS.map((photo) => (
            <li
              className={photo.wide ? 'photo-tile photo-tile--wide' : 'photo-tile'}
              key={photo.id}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.title} loading="lazy" decoding="async" />
              ) : (
                <span className="photo-tile__placeholder">
                  <span className="photo-tile__label">{photo.title}</span>
                  <span className="photo-tile__hint">Image coming soon</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
