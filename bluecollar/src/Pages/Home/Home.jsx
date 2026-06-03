import React from 'react'
import JobSearchHero from '../../Layout/Home/Hero/HomeBanner'
import Featured from '../../Components/FeaturedJobs/Featured'
import Category from '../../Layout/Home/Category/Category'
import Navbar from '../../Components/Navbar/Navbar'
import Ad from '../../Layout/Home/Ad/Ad'

function Home() {
   return (
    <>
      <Navbar/>
      <JobSearchHero/>
      <Category />
      <Featured /> 
      <Ad />
    </>
  )
}

export default Home