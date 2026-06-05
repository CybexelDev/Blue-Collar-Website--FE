import React from 'react'
import CompanyListing from '../../Layout/CompaniesListing/CompanyListing/CompanyListing'
import Navbar from '../../Components/Navbar/Navbar'
import JobSearchFilter from '../../Layout/CompaniesListing/SearchFilteringBanner/SearchFilteringBanner'
    
function Companies() {
  return (
    <>
    <Navbar />
     <JobSearchFilter />
    <CompanyListing />
    </>
  )
}

export default Companies