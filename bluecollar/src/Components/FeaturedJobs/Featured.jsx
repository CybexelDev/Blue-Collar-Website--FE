import React from "react";
import {
  Bookmark,
} from "lucide-react";
import dominos from "../../assets/Images/featured/img2.png";
import img5 from "../../assets/Images/featured/img5.png";
import img6 from "../../assets/Images/featured/img6.png";

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
    logo: dominos
  }
];

export default function Featured() {
  return (
    <section className="py-10 px-[80px]">
      <style>{`
        @keyframes cardLift {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-8px);
          }
        }

        @keyframes bookmarkPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .job-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 91, 191, 0.05) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .job-card:hover::before {
          opacity: 1;
        }

        .job-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 91, 191, 0.15), 0 0 1px rgba(0, 91, 191, 0.1);
          border-color: #005BBF;
        }

        .bookmark-icon {
          transition: all 0.3s ease;
        }

        .job-card:hover .bookmark-icon {
          color: #005BBF;
          transform: scale(1.15);
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
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
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

        .logo-img {
          transition: transform 0.3s ease;
        }

        .job-card:hover .logo-img {
          transform: scale(1.05);
        }


        .job-card:hover .location-badge {
          color: #005BBF;
        }

        .price-highlight {
          transition: all 0.3s ease;
        }

        .job-card:hover .price-highlight {
          color: #0041a6;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="leading-[36px] text-[30px] font-[800] text-[#191C1D] manrope">
            Featured Jobs
          </h2>

          <button className="text-[#005BBF] font-[700] inter text-[16px] leading-[26px] cursor-pointer hover:text-[#003d7a] transition-colors duration-300">
            View all opportunities
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="job-card bg-white rounded-[20px] border border-[#BABABA80] p-[27px] lg:p-6 xl:p-[27px]"
            >
              {/* Top */}
              <div className="flex justify-between items-start">
                <div className="flex gap-[14px]">
                  <img
                    src={job.logo}
                    alt={job.title}
                    className="logo-img w-[57px] h-[57px] rounded-xl object-cover"
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
                  className="bookmark-icon cursor-pointer"
                  strokeWidth={1.5}
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-6 text-gray-500">
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 0C4.04184 0.00172024 2.64389 0.581735 1.61282 1.61281C0.581739 2.64389 0.00172369 4.04184 3.45209e-06 5.5C-0.00133722 6.69155 0.387857 7.8507 1.108 8.8C1.108 8.8 1.258 8.9975 1.2825 9.026L5.5 14L9.7195 9.0235C9.7415 8.997 9.892 8.8 9.892 8.8L9.8925 8.7985C10.6122 7.84954 11.0012 6.69098 11 5.5C10.9983 4.04184 10.4183 2.64389 9.38719 1.61281C8.35611 0.581735 6.95817 0.00172024 5.5 0ZM5.5 7.5C5.10444 7.5 4.71776 7.3827 4.38886 7.16294C4.05996 6.94318 3.80362 6.63082 3.65224 6.26537C3.50087 5.89991 3.46126 5.49778 3.53843 5.10982C3.6156 4.72186 3.80608 4.36549 4.08579 4.08579C4.36549 3.80608 4.72186 3.6156 5.10982 3.53843C5.49778 3.46126 5.89992 3.50087 6.26537 3.65224C6.63082 3.80362 6.94318 4.05996 7.16294 4.38886C7.38271 4.71776 7.5 5.10444 7.5 5.5C7.49934 6.03023 7.28842 6.53855 6.91349 6.91348C6.53856 7.28841 6.03023 7.49934 5.5 7.5Z" fill="#D97878" />
                </svg>
                <span className=" text-[14px] font-[400] inter leading-[20px] text-[#64748B]">
                  Villupuram Main Road, Opp. Collectorate
                </span>
              </div>

              {/* Details */}
              <div className="flex items-center gap-4 mt-5 text-[12px] manrope leading-[150%]">
                <span className="text-[#1A1A1A] font-[400]">
                  322 Applicants
                </span>
                <div>
                  <span className="price-highlight text-[#024EC5] font-[700]">
                    ₹15k - ₹20k
                  </span>

                  <span className="text-[#1A1A1A] font-[400]">
                    / Month
                  </span>
                </div>
              </div>

              {/* Button */}
              <button className="apply-btn w-full mt-6 bg-[#005BBF] text-white cursor-pointer py-[8px] rounded-[100px] inter text-[16px] leading-[24px] font-[600]">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}