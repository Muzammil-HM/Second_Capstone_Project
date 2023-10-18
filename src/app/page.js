import Script from 'next/script'
import { HomePages } from './pages/Home/page.jsx'
export default function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      <HomePages />

    </>
  )
}
