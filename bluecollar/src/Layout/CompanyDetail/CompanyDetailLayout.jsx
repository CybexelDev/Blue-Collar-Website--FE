import React from "react";
import { Star } from "lucide-react";
import logo from "../../assets/images/jobdetail/logo.png";

export default function CompanyHeader() {
  return (
    <section className="relative">
      {/* Background Banner */}
      <div className="h-[144px] bg-[#F3F4F5]" />

      {/* Content */}
      <div className=" mx-auto px-4 sm:px-8 md:px-20 -mt-[105px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">

          {/* Left */}
          <div className="flex flex-col sm:flex-row gap-5">

            {/* Logo */}
<div className="w-[182px] h-[182px] rounded-2xl bg-white p-2 shadow-md   shrink-0">
  <img
    src={logo}
    alt="Company Logo"
    className="w-full h-full object-cover rounded-[10px]"
  />
</div>

            {/* Company Info */}
            <div className="mt-1">
              <h1 className="text-[56px] leading-none font-extrabold text-[#191C1D] manrope">
                Dominos
              </h1>

              <div className="flex items-center gap-1.5 mt-2  text-[#414754] inter font-[400]">
                <span className=" text-[12px] text-[#414754] ">4.9</span>

                <Star
                  className="w-4 h-4 fill-[#FBBF24] stroke-[#FBBF24]"
                />

                <span>|</span>

                <span className="text-sm font-[400] text-[#414754] ">287 reviews</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                <span className=" px-2 py-1
    bg-[#ECECEC]
    rounded-full
    font-bold
    text-[10px]
    leading-[15px]
    tracking-[0.5px]
    uppercase
    text-[#191C1D]
    inter">
                  Entry Level
                </span>

                <span className=" px-2 py-1
    bg-[#ECECEC]
    rounded-full
    font-bold
    text-[10px]
    leading-[15px]
    tracking-[0.5px]
    uppercase
    text-[#191C1D]
    inter">
                  Immediate Start
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-center ">
            <span className="text-[14px] inter text-[#6B7280] font-[400] mb-2">
              11.1k Followers
            </span>

            <button
              className="
                bg-[#005BBF]
                hover:bg-[#004DA1]
                text-white
                px-6
                py-2.5
                rounded-[100px]
                font-bold
                text-[16px]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              + Follow
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}