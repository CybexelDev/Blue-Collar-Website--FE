import React, { useState } from "react";

export default function SavedJobs() {
  const [activeTab, setActiveTab] = useState("saved");

  const tabs = [
    { id: "saved", label: "Saved" },
    { id: "applied", label: "Applied" },
    { id: "followed", label: "Followed Companies" },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="py-10 px-[80px]">
        <div>
          <h1 className="text-[32px] font-bold text-[#18191C]">
            Saved Jobs
          </h1>

          <p className="text-sm text-[#767F8C] mt-1">
            Manage your saved Jobs here
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-8 px-5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#0A65CC] text-white"
                  : "bg-white border border-[#E4E5E8] text-[#767F8C] hover:border-[#0A65CC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

       
      </div>
    </div>
  );
}