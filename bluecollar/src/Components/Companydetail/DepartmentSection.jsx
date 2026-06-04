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
    <section className="mt-8 px-20">
      <div className="bg-[#FFDACB] rounded-[40px] px-17 py-8">
        <h2 className="text-[20px] font-bold text-[#191C1D] mb-8 font-medium manrope">
          Departments hiring at Dominos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-13">
          {departments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  flex items-center justify-between
                  bg-white
                  rounded-[29px]
                  px-5 py-4
                  cursor-pointer
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_15px_40px_rgba(255,74,0,0.20)]
                "
              >
                <div className="flex items-center gap-7">
                  {/* Icon */}
                  <div
                    style={{
                      boxShadow:
                        "1.05px 1.05px 2.49px -1.31px rgba(0,0,0,0.247), 1.39px 0.39px 0.55px -0.65px rgba(0,0,0,0.26)",
                    }}
                    className="
                      w-15 h-15
                      rounded-full
                      bg-[#FF5A00]
                      flex items-center justify-center
                      transition-all duration-500
                      group-hover:rotate-12
                      group-hover:scale-110
                    "
                  >
                    <Icon size={18} className="text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="
                        text-[18px]
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
                 <div className="flex items-center gap-5">
                    <p className="text-[14px] text-[#6B7280] inter">
                      {item.count}
                    </p>
                     <ChevronRight
                  size={18}
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