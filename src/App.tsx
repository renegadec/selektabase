import './App.css'
import BrandMark from './components/BrandMark'
import ContactBar from './components/ContactBar'
import GearRings from './components/GearRings'
import SocialLinks from './components/SocialLinks'
import Sparks from './components/Sparks'
import Ticker from './components/Ticker'
import YouTubeBackground from './components/YouTubeBackground'
import { BUILD_PROGRESS, EVENT, MEDIA } from './data/event'

const FACTS = [
  { value: '10', label: 'Anniversary editions' },
  { value: '7,000+', label: 'Attendees per edition' },
  { value: 'All day', label: 'Motorsport · Music · Carnival · Expo' },
]

export default function App() {
  return (
    <div className="shell" id="top">
      <YouTubeBackground
        videoId={MEDIA.videoId}
        title={MEDIA.videoTitle}
        poster={MEDIA.poster}
        start={MEDIA.segmentStart}
        end={MEDIA.segmentEnd}
      />
      <div className="scrim" aria-hidden="true" />

      <div className="stage">
        <header className="topbar">
          <BrandMark />
          <div className="topbar__meta">
            <span className="chip chip--red">{EVENT.edition}</span>
            <span className="chip chip--city">{EVENT.city}</span>
          </div>
        </header>

        <main className="hero">
          <GearRings />
          <Sparks />

          <p className="status">
            <span className="status__lights" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            Site under construction
          </p>

          <h1 className="wordmark">
            <span className="wordmark__kicker">{EVENT.brand}</span>{' '}
            <span className="wordmark__main" data-text="Blowout Festival">
              Blowout Festival
            </span>
          </h1>

          <p className="tagline">{EVENT.tagline}</p>

          <p className="lede">
            We are building a new home for {EVENT.strapline} — tickets, the full experience
            line-up, sponsorship packages and exhibitor bookings all land here soon. The heavy
            machinery is out. Site hoarding is up. Watch this space.
          </p>

          <div
            className="progress"
            role="progressbar"
            aria-label="Website build progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={BUILD_PROGRESS}
          >
            <div className="progress__head">
              <span>Build progress</span>
              <span className="progress__value">{BUILD_PROGRESS}%</span>
            </div>
            <div className="progress__track">
              <span className="progress__fill" style={{ width: `${BUILD_PROGRESS}%` }} />
            </div>
          </div>

          <ul className="facts">
            {FACTS.map((fact) => (
              <li className="facts__item" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>

          <SocialLinks />
        </main>
      </div>

      <Ticker />

      <footer className="bottombar">
        <ContactBar />
      </footer>
    </div>
  )
}
