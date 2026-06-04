import React from 'react'
import JobSearchHero from '../../Layout/Home/Hero/HomeBanner'
import Featured from '../../Components/FeaturedJobs/Featured'
import Category from '../../Layout/Home/Category/Category'
import Navbar from '../../Components/Navbar/Navbar'
import Ad from '../../Layout/Home/Ad/Ad'
import Footer from '../../Components/Footer/Footer'

function Home() {
   return (
    <>
    <div className='overflow-x-hidden'>

      <Navbar/>
      <JobSearchHero/>
      <Category />
      <Featured /> 
      <Ad />
      <Footer/>
          </div>

    </>
  )
}

export default Home