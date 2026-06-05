import React from "react";
import JobCard from "../Jobcard/Jobcard";
import promoImg from "../../../src/assets/images/companydetail/promo.png"

import dominos from "../../assets/images/featured/img2.png"
import img5 from "../../assets/images/featured/img5.png"
import img6 from "../../assets/images/featured/img6.png"
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

function CompanyJobs() {
  
  return (
    <>
      <style>{`
          .promo-card {
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .promo-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,91,191,0.08),
      transparent,
      rgba(0,91,191,0.08)
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .promo-card:hover::before {
    opacity: 1;
  }

  .promo-card:hover {
    transform: translateY(-8px);
    box-shadow:
      0 20px 50px rgba(0,91,191,0.18),
      0 0 30px rgba(0,91,191,0.12);
  }

  .promo-image {
    transition: all 0.5s ease;
  }

  .promo-card:hover .promo-image {
    transform: scale(1.05) rotate(-2deg);
  }

  .promo-title {
    transition: all 0.3s ease;
  }

  .promo-card:hover .promo-title {
    color: #005BBF;
  }

  .floating-dot {
    position: absolute;
    border-radius: 999px;
    background: rgba(0,91,191,0.08);
    animation: float 5s ease-in-out infinite;
  }

  .floating-dot:nth-child(1) {
    width: 80px;
    height: 80px;
    top: -20px;
    right: -20px;
  }

  .floating-dot:nth-child(2) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    left: -10px;
    animation-delay: 2s;
  }

  @keyframes float {
    0%,100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

        .apply-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .apply-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .apply-btn:hover::before {
          left: 100%;
        }

        .apply-btn:hover {
          background: linear-gradient(135deg, #005BBF 0%, #003d7a 100%);
          box-shadow: 0 10px 25px rgba(0, 91, 191, 0.3);
          transform: translateY(-2px);
        }

        .apply-btn:active {
          transform: translateY(0);
        }
      `}</style>

    <section className="px-4 md:px-[80px] py-10">
<div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.5fr] gap-4 lg:gap-20">
        {/* Left Side */}
        <div>
          <h2 className="text-[36px] font-bold text-[#191C1D] mb-6 manrope">
            Showing 2270 companies
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-4 py-2 border border-[#E5E7EB] rounded-full text-sm flex items-center gap-2 inter text-[#414754]">
              DEPARTMENT <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1L7 7L1 1H13Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>

            </button>

            <button className="px-4 py-2 border border-[#E5E7EB] rounded-full text-sm flex items-center gap-2 inter text-[#414754]">
              LOCATION  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1L7 7L1 1H13Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>
            </button>

            <button className="px-4 py-2 border border-[#E5E7EB] rounded-full text-sm flex items-center gap-2 inter text-[#414754]">
              EXPERIENCE  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1L7 7L1 1H13Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>
            </button>
          </div>

          {/* Job Cards */}
         <div className="space-y-6">
  {jobs.map((job) => (
    <JobCard
      key={job.id}
  job={job}
    />
  ))}
</div>
        </div>

        {/* Right Side */}
        <div>
          <div className="sticky top-24 lg:mt-35">
  <div className="promo-card bg-white rounded-[24px] border border-[#E5E7EB] p-6 shadow-sm">

    <div className="floating-dot"></div>
    <div className="floating-dot"></div>

    <div className="max-w-[319px] relative z-10">
      <h3 className="promo-title text-[24px] font-bold text-[#0F172A] leading-tight inter">
        Discover jobs across popular roles
      </h3>

      <p className="text-[#6B7280] text-sm inter font-[500] mt-2">
        Select a role and we'll show you relevant jobs for it!
      </p>
    </div>

    <img
      src={promoImg}
      alt="Jobs"
      className="promo-image w-full object-contain my-2 relative z-10"
    />

    <button className="apply-btn w-full py-3 rounded-full bg-[#005BBF] text-white font-semibold relative z-10">
      Apply Now
    </button>

  </div>
</div>
        </div>

      </div>
    </section>
    </>
  );
}

export default CompanyJobs;