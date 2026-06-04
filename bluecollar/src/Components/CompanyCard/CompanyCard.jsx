import React from 'react'
import { FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const CompanyCard = ({ company, index, cardsRef, custom='' }) => {
  return (
    <>
                    <div
                        key={company.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={`
                           group
                           relative
                           overflow-hidden
                           bg-white
                           rounded-[24px]
                           p-6
                           flex
                           items-center
                           justify-between
                           cursor-pointer
                           transition-all
                           duration-500
                           ease-out
                           hover:-translate-y-2
                           hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]
                           ${custom}
                        `}
                    >
                        {/* Shine Effect */}
                        <div
                            className="
                               not-last:absolute
                               not-last:top-0
                               not-last:-left-[120%]
                               not-last:w-[60%]
                               not-last:h-full
                               not-last:bg-gradient-to-r
                               not-last:from-transparent
                               not-last: via-white/70
                               not-last:to-transparent
                               not-last:skew-x-12
                               not-last:group-hover:left-[150%]
                               not-last:transition-all
                               not-last:duration-1000
                               not-last:pointer-events-none
                               not-last:"
                        />

                        <div className="flex items-center gap-4">
                            <img
                                src={company.image}
                                alt={company.name}
                                className="
                                    w-[70px]
                                    h-[70px]
                                    rounded-[12px]
                                    object-cover
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]
                                  "
                            />

                            <div>
                                <h3
                                    className="
                                       text-[18px]
                                       font-[700]
                                       inter
                                       mb-1
                                       transition-all
                                       duration-300
                                       group-hover:text-[#2138c7]
                                     "
                                >
                                    {company.name}
                                </h3>

                                <div className="flex items-center gap-1 text-[#313131] mb-2 manrope text-[12px]">
                                    <span>{company.rating}</span>

                                    <FaStar
                                        className="
                                          text-yellow-400
                                          transition-all
                                          duration-300
                                          group-hover:scale-125
                                        "
                                    />

                                    <span>| {company.reviews} reviews</span>
                                </div>

                                <div className="flex gap-2">
                                    {company.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="
                                              text-[10px]
                                              font-[700]
                                              px-2
                                              py-1
                                              inter
                                              rounded-xl
                                              bg-[#EDEEEF]
                                              text-[#191C1D]
                                              transition-all
                                              duration-300
                                              group-hover:bg-[#FFF1EB]
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <FiChevronRight
                            className="
                              text-gray-400
                              text-2xl
                              transition-all
                              duration-300
                              group-hover:text-[#223ab2]
                              group-hover:translate-x-2
                            "
                        />
                    </div>
    </>
  )
}

export default CompanyCard