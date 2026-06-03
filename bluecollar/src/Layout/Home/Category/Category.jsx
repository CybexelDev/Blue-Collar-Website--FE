import React from 'react'
import { FaBolt, FaTools, FaBox, FaWrench, FaCar, } from "react-icons/fa";

const Category = () => {

    const categories = [
        { id: 1, name: "Electrician", icon: FaBolt },
        { id: 2, name: "Construction", icon: FaTools },
        { id: 3, name: "Delivery", icon: FaBox },
        { id: 4, name: "Plumber", icon: FaWrench },
        { id: 5, name: "Driver", icon: FaCar },
        // { id: 6, name: "Cleaning", icon: FaBox },
    ];

    return (

        <div className='w-full h-[350px] bg-[#f5f7ff]'>
            <div className=' px-[80px] py-[50px] flex justify-between'>
                <div>
                    <h3 className="text-[30px]  font-[1000] manrope">Popular Categories</h3>
                    <p className="text-[16px] text-[#414754] inter">Find the right path for your skills</p>
                </div>
                <div><p className="text-[16px] text-[#414754] inter cursor-pointer">View All</p></div>
            </div>

            <div className="flex flex-wrap gap-6 px-[80px]">
                {categories.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                             className="
                               group
                               flex items-center gap-6
                             bg-white
                               rounded-[35px]
                               border border-gray-200
                               px-4 py-4
                               min-w-[205px]
                               cursor-pointer
                               transition-all duration-500 ease-out
                               hover:-translate-y-2
                               hover:scale-[1.03]
                               hover:border-[#FF4A00]
                               hover:shadow-[0_15px_40px_rgba(255,74,0,0.25)]
                             "
                        >
                            <div
                                style={{
                                    boxShadow:
                                        "1.05px 1.05px 2.49px -1.31px rgba(0,0,0,0.247), 1.39px 0.39px 0.55px -0.65px rgba(0,0,0,0.26)",
                                }}
                                className="
                                  w-14 h-14
                                  rounded-full
                                  bg-[#FF4A00]
                                  flex items-center justify-center
                                  transition-all duration-500
                                  group-hover:rotate-12
                                  group-hover:scale-110
                                  group-hover:shadow-[0_0_25px_rgba(255,74,0,0.7)]
                                "
                            >
                                <Icon className="text-white text-[25px]" />
                            </div>
                            <h3
                                className="
                                 font-bold
                                 text-[18px]
                                 inter
                                 transition-all duration-500
                                 group-hover:text-[#FF4A00]
                               "
                            >
                                {item.name}
                            </h3>
                        </div>
                    );
                })}
            </div>


        </div>

    )
}

export default Category