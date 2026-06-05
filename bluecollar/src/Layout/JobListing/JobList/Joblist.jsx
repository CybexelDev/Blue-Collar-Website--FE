import React, { useEffect, useRef, useState } from "react";
import JobCard from '../../../Components/Jobcard/Jobcard';
import dominos from "../../../assets/Images/featured/img2.png";
import img5 from "../../../assets/Images/featured/img5.png";
import img6 from "../../../assets/Images/featured/img6.jpg";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

const Joblist = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    console.log(selectedJob, "selecteddd");


    const jobs = [
        {
            id: 1,
            title: "Sales Marketing",
            company: "Ss Hydrabad Biriyani",
            logo: img6,
            role: "Join a leading electrical infrastructure firm. You will oversee large-scale commercial installations, manage a small crew, and ensure compliance with strict safety codes. Looking for someone with 7+ years of experience and a current Master license.",
            requirements: [
                "Valid Master Electrician License",
                "Commercial project experience",
                "Clean driving record"
            ]
        },
        {
            id: 2,
            title: "Accountant",
            company: "Sun Mobiles",
            logo: img5,
            role: "Join a leading electrical infrastructure firm. You will oversee large-scale commercial installations, manage a small crew, and ensure compliance with strict safety codes. Looking for someone with 7+ years of experience and a current Master license.",
            requirements: [
                "Valid Master Electrician License",
                "Commercial project experience",
                "Clean driving record"
            ]
        },
        {
            id: 3,
            title: "Field Marketing",
            company: "Dominos",
            logo: dominos,
            role: "Join a leading electrical infrastructure firm. You will oversee large-scale commercial installations, manage a small crew, and ensure compliance with strict safety codes. Looking for someone with 7+ years of experience and a current Master license.",
            requirements: [
                "Valid Master Electrician License",
                "Commercial project experience",
                "Clean driving record"
            ]
        },
    ];

    useEffect(() => {

    setSelectedJob(jobs[0]);

    }, [])

    return (
        <div>
            <div className="grid grid-cols-12 gap-9 px-16 py-8 mt-8">
                <div className="md:col-span-6 col-span-12">

                    <div className="w-full flex flex-col gap-4  mb-6">
                        {jobs.map((job) => (
                            <JobCard key={job.id} job={job} click={() => setSelectedJob(job)} />
                        ))}
                    </div>

                </div>
                <div className="md:col-span-6 col-span-12">


                    <div className="bg-white rounded-[32px] overflow-hidden shadow-xl w-full">
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={selectedJob?.logo}
                                alt="Job"
                                className="w-full h-[250px] object-cover"
                            />

                            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                <FaRegBookmark className="text-[#313131]" />
                            </button>

                            <div className="absolute bottom-5 left-5 text-white">
                                <p className="text-[12px] font-[700] tracking-wider uppercase inter">
                                    Top Opportunity
                                </p>

                                <h2 className="text-[24px] font-[900] leading-none manrope">
                                    {selectedJob?.company}
                                </h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-[24px] font-[800] text-[#191C1D] manrope">
                                {selectedJob?.title}
                            </h3>

                            <div className="flex items-center gap-5 mt-2 text-[#4E4E4E]">
                                <div className="flex items-center gap-1">
                                    <MdOutlineAttachMoney className="text-[#005BBF]" />
                                    <span className='inter text-[14px] font-[700]'>$85k - $110k</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <BsCalendar4Week className="text-[#005BBF]" />
                                    <span className='inter text-[14px] font-[700]'>Posted 2d ago</span>
                                </div>
                            </div>

                            <hr className="my-6 border-[#E5E5E5]" />

                            <div>
                                <h4 className="font-[800] text-[14px] uppercase text-[#222] mb-3 manrope">
                                    The Role
                                </h4>

                                <p className="text-[#414754] text-[14px] leading-8 inter font-[400]">
                                    {selectedJob?.role}
                                </p>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-[800] text-[14px] uppercase text-[#222] mb-4 manrope">
                                    Requirements
                                </h4>

                                <div className="space-y-3">
                                    {selectedJob?.requirements?.map((req, index) => (
                                        <div className="flex items-center gap-3" key={index}>
                                            <FiCheckCircle className="text-[#005BBF]" />
                                            <span className="inter text-[14px] font-[500]">{req}</span>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className="mt-10 space-y-4">
                                <button className="w-full h-[56px] rounded-full bg-[#005BBF] text-white font-[700] text-[14px] transition-all duration-300 inter hover:bg-[#00489A]">
                                    Apply Now
                                </button>

                                <button className="w-full h-[56px] rounded-full border border-[#A7A7A7] text-[#005BBF] font-[700] text-[14px] transition-all duration-300 inter hover:bg-[#F7F9FF]">
                                    View full details
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Joblist