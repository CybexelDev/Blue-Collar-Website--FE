import React from 'react'
import JobSearchHero from '../../Layout/Home/Hero/HomeBanner'
import Featured from '../../Components/FeaturedJobs/Featured'
import Category from '../../Layout/Home/Category/Category'
import Ad from '../../Layout/Home/Ad/Ad'
import Footer from '../../Components/Footer/Footer'
import AdsSection from '../../Components/Home/AdsSection/AdsSection'
import NearByCompanies from '../../Layout/Home/NearByCompanies/NearByCompanies'
import Navbar from '../../Components/Navbar/Navbar'

function Home() {
   return (
    <>
    <div className='overflow-x-hidden'>

      <Navbar/>
      <JobSearchHero/>
      <Category />
      <Featured /> 
      <Ad />
      <NearByCompanies/>
      <AdsSection/>
      <Footer />

    </div>
    </>
  )
}

export default Home