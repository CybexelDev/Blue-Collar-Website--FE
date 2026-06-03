import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import JobSearchHero from './Layout/Home/Hero/HomeBanner'
import AdsSection from './Components/Home/AdsSection/AdsSection'
import Footer from './Components/Footer/Footer'
import JobSearchFilter from './Layout/CompaniesListing/SearchFilteringBanner/SearchFilteringBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      {/* <JobSearchHero/>
      <AdsSection/>
      <Footer/> */}
    <JobSearchFilter/>
    </>
  )
}

export default App
