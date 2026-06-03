import React from 'react'
import { Search, MapPin, Briefcase } from "lucide-react";


function Searchbox() {
  return (
    <div>
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
  )
}

export default Searchbox