import React from "react";
import { Zap, Wrench, Package, Hammer, ChevronRight } from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Electrician",
    count: "500 Companies",
    icon: Zap,
  },
  {
    id: 2,
    name: "Construction",
    count: "400 Companies",
    icon: Wrench,
  },
  {
    id: 3,
    name: "Delivery",
    count: "708 Companies",
    icon: Package,
  },
  {
    id: 4,
    name: "Plumber",
    count: "1k+ Companies",
    icon: Hammer,
  },
];

function DepartmentSection() {
  return (
<section className="mt-8 px-4 sm:px-6 lg:px-20">
  <div className="bg-[#FFDACB] rounded-[24px] lg:rounded-[40px] px-4 sm:px-6 lg:px-17 py-6 lg:py-8">
    
    <h2 className="text-[18px] lg:text-[20px] font-bold text-[#191C1D] mb-6 lg:mb-8 manrope">
      Departments hiring at Dominos
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-13">
      {departments.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="
              group
              flex items-center justify-between
              bg-white
              rounded-[24px] lg:rounded-[29px]
              px-4 lg:px-5
              py-3 lg:py-4
              cursor-pointer
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_15px_40px_rgba(255,74,0,0.20)]
            "
          >
            <div className="flex items-center gap-4 lg:gap-7">
              
              <div
                style={{
                  boxShadow:
                    "1.05px 1.05px 2.49px -1.31px rgba(0,0,0,0.247), 1.39px 0.39px 0.55px -0.65px rgba(0,0,0,0.26)",
                }}
                className="
                  w-12 h-12 lg:w-15 lg:h-15
                  rounded-full
                  bg-[#FF5A00]
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:rotate-12
                  group-hover:scale-110
                "
              >
                <Icon size={16} className="text-white lg:w-[18px] lg:h-[18px]" />
              </div>

              <div>
                <h3
                  className="
                    text-[16px] lg:text-[18px]
                    font-bold
                    text-[#191C1D]
                    inter
                    transition-all
                    duration-300
                    group-hover:text-[#FF5A00]
                  "
                >
                  {item.name}
                </h3>

                <div className="flex items-center gap-3 lg:gap-5">
                  <p className="text-[12px] lg:text-[14px] text-[#6B7280] inter">
                    {item.count}
                  </p>

                  <ChevronRight
                    size={16}
                    className="text-black group-hover:text-[#FF5A00] transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}

export default DepartmentSection;