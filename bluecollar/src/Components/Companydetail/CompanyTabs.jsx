import React from "react";

function CompanyTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-8 mt-8 mb-8">
      <button
        onClick={() => setActiveTab("overview")}
        className={`
          relative
          text-[18px]
          font-bold
          inter
          transition-all
          duration-300
          ${
            activeTab === "overview"
            ? "text-[#FF5A00]"
              : "text-[#8A8A8A] hover:text-[#FF5A00]"
          }
        `}
      >
        Overview

      </button>

      <button
        onClick={() => setActiveTab("jobs")}
        className={`
          relative
          text-[18px]
          font-bold
          inter
          transition-all
          duration-300
          ${
            activeTab === "jobs"
              ? "text-[#FF5A00]"
              : "text-[#8A8A8A] hover:text-[#FF5A00]"
          }
        `}
      >
        Jobs

   
      </button>
    </div>
  );
}

export default CompanyTabs;