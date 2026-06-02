import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import JobSearchHero from './Layout/Home/Hero/HomeBanner'
import Featured from './Components/FeaturedJobs/Featured'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <JobSearchHero/>
      <Featured /> 
    </>
  )
}

export default App
