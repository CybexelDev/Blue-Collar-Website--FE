import React from 'react'
import CompanyDetailTop from '../../Layout/CompanyDetail/CompanyDetailLayout'
import Navbar from '../../Components/Navbar/Navbar'
import CompanyTabs from '../../Components/Companydetail/CompanyTabs'
import DepartmentSection from '../../Components/Companydetail/DepartmentSection'
import { useState } from 'react'
function CompanyDetail() {
      const [activeTab, setActiveTab] = useState("overview");

  return (
     <div>
      <Navbar />

      <CompanyDetailTop />

      <div className="px-[80px]">
        <CompanyTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <DepartmentSection/>

      {/* {activeTab === "overview" ? (
        <CompanyOverview />
      ) : (
        <CompanyJobs />
      )} */}
    </div>
  )
}

export default CompanyDetail