import React from "react";

import dominos from "../../assets/Images/featured/img2.png";
import img5 from "../../assets/Images/featured/img5.png";
import img6 from "../../assets/Images/featured/img6.jpg";
import JobCard from "../Jobcard/Jobcard";

const jobs = [
  {
    id: 1,
    title: "Sales Marketing",
    company: "Ss Hydrabad Biriyani",
    logo: img6,
  },
  {
    id: 2,
    title: "Accountant",
    company: "Sun Mobiles",
    logo: img5,
  },
  {
    id: 3,
    title: "Field Marketing",
    company: "Dominos",
    logo: dominos,
  },
];


export default function Featured({heading="Featured Jobs"}) {
  return (
    <section className="py-10 px-[80px]">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="leading-[36px] text-[30px] font-[800] text-[#191C1D] manrope">
            {heading}
          </h2>

          <button className="text-[#005BBF] font-[700] inter text-[16px] leading-[26px]">
            View all opportunities
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

