import React from "react";
import { Bookmark } from "lucide-react";



function JobCard({ job }) {
  return (
     <>
      <style>{`
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
   <div
  className="
    group
    relative
    overflow-hidden
    bg-white
    rounded-[20px]
    border border-[#BABABA80]
    p-[27px] lg:p-6 xl:p-[27px]
    transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:border-[#005BBF]
    hover:shadow-[0_20px_40px_rgba(0,91,191,0.15)]
  "
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#005BBF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

  {/* Content */}
  <div className="relative z-10">
    {/* Top */}
    <div className="flex justify-between items-start">
      <div className="flex gap-[14px]">
        <img
          src={job.logo}
          alt={job.title}
          className="
            w-[57px]
            h-[57px]
            rounded-xl
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        <div>
          <h3 className="font-[700] text-[20px] lg:text-[14px] xl:text-[20px] text-[#0F172A] leading-[25px] inter">
            {job.title}
          </h3>

          <p className="text-[#1A1A1A] text-[12px] leading-[150%] font-[400] manrope">
            {job.company}
          </p>
        </div>
      </div>

      <Bookmark
        size={20}
        strokeWidth={1.5}
        className="
          cursor-pointer
          transition-all
          duration-300
          group-hover:text-[#005BBF]
          group-hover:scale-110
        "
      />
    </div>

    {/* Location */}
    <div className="flex items-center gap-2 mt-6">
      <svg
        width="11"
        height="14"
        viewBox="0 0 11 14"
        fill="none"
      >
        {/* path */}
      </svg>

      <span className="text-[14px] font-[400] inter leading-[20px] text-[#64748B] group-hover:text-[#005BBF] transition-colors duration-300">
        Villupuram Main Road, Opp. Collectorate
      </span>
    </div>

    {/* Details */}
    <div className="flex items-center gap-4 mt-5 text-[12px] manrope leading-[150%]">
      <span className="text-[#1A1A1A] font-[400]">
        322 Applicants
      </span>

      <div>
        <span
          className="
            text-[#024EC5]
            font-[700]
            transition-all
            duration-300
            group-hover:text-[#0041a6]
            group-hover:font-[800]
          "
        >
          ₹15k - ₹20k
        </span>

        <span className="text-[#1A1A1A] font-[400]">
          / Month
        </span>
      </div>
    </div>

    {/* Button */}
<button className="apply-btn w-full
 mt-6 bg-[#005BBF] text-white
 cursor-pointer py-[8px] rounded-[100px]
  inter text-[16px] leading-[24px]
   font-[600]"> Apply Now </button>
  </div>
</div>
</>
  );
}

export default JobCard;