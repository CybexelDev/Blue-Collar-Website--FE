import React from "react";
import Searchbox from "../../../Components/Searchbox/Searchbox";

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
        <Searchbox />
      </div>
    </section>
  );
}

export default JobSearchHero;