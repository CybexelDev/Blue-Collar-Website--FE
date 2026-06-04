import React from "react";
import Searchbox from "../../../Components/Searchbox/Searchbox";
import { Search, MapPin, Briefcase } from "lucide-react";
import bannerImg from "../../../assets/images/bannerimg.jpg"

function JobSearchHero() {
  return (
  <section
  className="relative min-h-[576px] flex items-center justify-center bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage: `url(${bannerImg})`,
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center animate-fadeUp group"><div className="transition-all duration-300 group-focus-within:blur-sm group-focus-within:opacity-50">
  <span className="inline-block px-4 py-1 text-xs font-bold tracking-wide uppercase bg-[#F4F4F4] border border-[#CFCFCF] text-[#001A41] rounded-full shadow inter animate-float">
    New Opportunities Daily
  </span>

  <h1 className="mt-6 text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-gray-900 leading-tight manrope">
    Find Jobs <span className="text-blue-600">Near You</span> Easily
  </h1>

  <p className="mt-4 max-w-[708px] mx-auto text-[#414754] text-[16px] sm:text-[18px] md:text-[20px] manrope font-[400] px-2">
    Connect with the best employers in your local area today. TradeCraft bridges the gap between skilled labor and premium projects.
  </p>
</div>

        {/* Search Box */}
{/* 
        <Searchbox /> */}

<div
  className="
    mt-12
    bg-white
    rounded-[32px] md:rounded-full
    p-3
    flex flex-col md:flex-row
    items-stretch md:items-center
    gap-3
    max-w-6xl
    mx-auto
    inter
    transition-all
    duration-300
    hover:shadow-2xl
    shadow-[0_1.21px_1.71px_-1.5px_rgba(0,0,0,0.247),0_0.44px_0.63px_-1px_rgba(0,0,0,0.26),inset_-1px_-1px_1px_rgba(0,0,0,0.15),inset_1px_1px_1px_rgba(255,255,255,1)]
  "
>{/* Job Input */}
          <div className="
  flex items-center
  gap-5
  w-full
  bg-[#E7E8E9]
  rounded-full
  pl-7
  pr-7
  md:pr-40
  py-4
  transition-all
  duration-300
  hover:bg-[#DDE0E3]
  focus-within:ring-2
  focus-within:ring-blue-500
">
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H6V2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2ZM2 17H18V6H2V17ZM8 4H12V2H8V4ZM2 17V6V17Z" fill="#727785"/>
</svg>
            <input
              type="text"
              placeholder="Job title or role"
              className="w-full  outline-none text-[#010102]"
            />
          </div>

          {/* Location Input */}
          <div className="
  flex items-center
  gap-5
  w-full
  bg-[#E7E8E9]
  rounded-full
  pl-7
  pr-7
  md:pr-40
  py-4
  transition-all
  duration-300
  hover:bg-[#DDE0E3]
  focus-within:ring-2
  focus-within:ring-blue-500
">
<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#727785"/>
</svg>
            <input
              type="text"
              placeholder="Location"
              className="w-full  outline-none   text-[#010102]"
            />
          </div>

          {/* Search Button */}
<button
  className="
    bg-blue-600
    hover:bg-blue-700
    hover:scale-105
    active:scale-95
    text-white
    px-8
    py-4
    rounded-full
    flex
    items-center
    justify-center
    gap-2
    font-medium
    transition-all
    duration-300
    w-full
    md:w-auto
    shadow-lg
    hover:shadow-xl
  "
>
  Search
</button>           
        </div>
      </div>
    </section>
  );
}

export default JobSearchHero;