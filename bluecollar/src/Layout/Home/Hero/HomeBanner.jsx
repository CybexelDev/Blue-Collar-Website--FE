import React from "react";
import { Search, MapPin, Briefcase } from "lucide-react";

function JobSearchHero() {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1920')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wide uppercase bg-white rounded-full shadow">
          New Opportunities Daily
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Find Jobs{" "}
          <span className="text-blue-600">Near You</span> Easily
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Connect with the best employers in your local area today.
          TradeCraft bridges the gap between skilled labor and premium
          projects.
        </p>

        {/* Search Box */}
        <div className="mt-12 bg-white rounded-full shadow-xl p-2 flex flex-col md:flex-row items-center gap-3 max-w-4xl mx-auto border">
          {/* Job Input */}
          <div className="flex items-center gap-3 w-full bg-gray-100 rounded-full px-5 py-4">
            <Briefcase size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Job title or role"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center gap-3 w-full bg-gray-100 rounded-full px-5 py-4">
            <MapPin size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-2 font-medium transition">
            <Search size={18} />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default JobSearchHero;