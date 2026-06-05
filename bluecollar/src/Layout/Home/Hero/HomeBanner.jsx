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

        <Searchbox />


      </div>
    </section>
  );
}

export default JobSearchHero;