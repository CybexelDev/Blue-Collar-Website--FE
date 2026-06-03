import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import JobSearchHero from '../../Layout/Home/Hero/HomeBanner'
import Featured from '../../Components/FeaturedJobs/Featured'

function Home() {
   return (
    <>
      <Navbar/>
      <JobSearchHero/>
      <Featured /> 
    </>
  )
}

export default Home