import React from 'react'
import Searchbox from '../../../Components/Searchbox/Searchbox'
import { FaCaretDown } from "react-icons/fa";

function Searchsection() {
      const filters = [
    "JOB",
    "JOB TYPE",
    "SALARY RANGE",
    "DISTANCE",
  ];
  return (
    <div className='py-[50px]'>
        <Searchbox />
    <div>
            <div className="flex flex-wrap items-center gap-4 justify-center p-8 ">
      {filters.map((filter) => (
        <button
          key={filter}
          className="flex items-center justify-between justify-center min-w-[166px] px-5 py-2.5 bg-white border border-[#DDDDDD] rounded-[100px]  hover:shadow-sm transition-all duration-200"
        >
          <span className="text-[16px] leading-[24px] font-[500] inter text-[#414754]">
            {filter}
          </span>

          <FaCaretDown
            size={22}
            className="text-black ml-3"
          />
        </button>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Searchsection