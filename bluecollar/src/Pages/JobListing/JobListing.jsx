import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Joblist from '../../Layout/JobListing/JobList/Joblist'
import JobSearchFilter from '../../Layout/CompaniesListing/SearchFilteringBanner/SearchFilteringBanner'

const JobListing = () => {
  return (
    <>
    <Navbar/>
    <JobSearchFilter/>
     <Joblist/>
    <Footer/>
    </>
  )
}

export default JobListing