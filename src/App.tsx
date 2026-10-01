import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/site.css'
import SiteLayout from './layouts/SiteLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExhibitorsPage from './pages/ExhibitorsPage'
import ExperiencePage from './pages/ExperiencePage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SponsorshipPage from './pages/SponsorshipPage'
import TicketsPage from './pages/TicketsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="sponsorship" element={<SponsorshipPage />} />
          <Route path="exhibitors" element={<ExhibitorsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
