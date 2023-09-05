import Script from 'next/script'
import NavBar from './components/NavBar/NavBar'
import CardPage from './pages/cards/page'
import HomePage from './pages/home/page'
import SectionPage from './pages/section/page'
import Section1Page from './pages/sectionOne/page'
import Section2Page from './pages/sectionTwo/page'
import Section3Page from './pages/sectionThree/page'
import FooterPage from './pages/Footer/page'

export default function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      <NavBar />
      <HomePage />
      <CardPage />
      <SectionPage />
      <Section1Page />
      <Section2Page />
      <Section3Page />
      <FooterPage />

    </>
  )
}
