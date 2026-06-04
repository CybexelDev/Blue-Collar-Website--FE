import React, { useRef, useState,useEffect } from "react";
import Searchbox from "../../../Components/Searchbox/Searchbox";

function JobSearchFilter() {
  const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({});
  const dropdownRef = useRef(null);


  const filterData = {
    JOB: [
      "Electrician",
      "Plumber",
      "Welder",
      "Driver",
    ],
    "JOB TYPE": [
      "Full Time",
      "Part Time",
      "Contract",
      "Freelance",
    ],
    "SALARY RANGE": [
      "₹10,000 – ₹15,000",
      "₹15,000 – ₹20,000",
      "₹20,000 – ₹25,000",
      "₹25,000 – ₹35,000",
    ],
    DISTANCE: [
      "Within 2 KM",
      "Within 5 KM",
      "Within 10 KM",
      "Within 20 KM",
    ],
  };


  useEffect(() => {
  const closeDropdown = (e) => {
    if (!dropdownRef.current?.contains(e.target)) {
      setOpenDropdown(null);
    }
  };

  document.addEventListener("mousedown", closeDropdown);

  return () => {
    document.removeEventListener("mousedown", closeDropdown);
  };
}, []);

    const handleSelect = (key, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    setOpenDropdown(null);
  };

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <Searchbox />

      <div ref={dropdownRef}
      className="mt-8 flex flex-wrap justify-center gap-4 inter">
        {Object.keys(filterData).map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === item ? null : item)
              }
              className="
                cursor-pointer
                px-8
                py-3
                min-w-40
                rounded-full
                border
                border-[#D9D9D9]
                bg-white
                text-[#444]
                text-sm
                font-medium
                flex
                items-center
                justify-between
                gap-3
                hover:shadow-md
                transition-all
              "
            >
              {selectedFilters[item] || item}

              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L7 7L1 1H13Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {openDropdown === item && (
  <div className="
    absolute
    mt-2
    min-w-40
    bg-white
    border
    border-gray-200
    rounded-xl
    shadow-lg
    z-50
    max-h-60
    overflow-y-auto
  ">
    {filterData[item].map((option) => (
      <div
        key={option}
        onClick={() => handleSelect(item, option)}
        className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
      >
        {option}
      </div>
    ))}
  </div>
)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobSearchFilter;