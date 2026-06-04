import React from 'react'
import Bottomsection from '../../Layout/Jobdetail/Bottomsection/Bottomsection'
import Navbar from '../../Components/Navbar/Navbar'
import JobDetailTopSection from '../../Layout/JobDetail/JobDetailTopSection/JobDetailTopSectionLayout'
import Featured from '../../Components/FeaturedJobs/Featured'

function Jobdetail() {
  return (
    <div>
    <JobDetailTopSection/>
        <Bottomsection />
    <Featured heading='Suggested Jobs'/>

    </div>
  )
}

export default Jobdetail