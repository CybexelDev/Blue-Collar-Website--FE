import React from 'react'
import Bottomsection from '../../Layout/Jobdetail/Bottomsection/Bottomsection'
import Navbar from '../../Components/Navbar/Navbar'
import JobDetailTopSection from '../../Layout/JobDetail/JobDetailTopSection/JobDetailTopSectionLayout'
import Featured from '../../Components/FeaturedJobs/Featured'
import Footer from '../../Components/Footer/Footer'

function Jobdetail() {
  return (
    <div>
        <Navbar/>
    <JobDetailTopSection/>
        <Bottomsection />
    <Featured heading='Suggested Jobs'/>
    <Footer/>

    </div>
  )
}

export default Jobdetail