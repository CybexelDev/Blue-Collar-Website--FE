import React, { useEffect, useRef, useState } from "react";
import CompanyCard from '../../../Components/CompanyCard/CompanyCard';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../../assets/img/comapnies/1.png'
import img2 from '../../../assets/img/comapnies/2.png'
import img3 from '../../../assets/img/listing/1.png'

gsap.registerPlugin(ScrollTrigger);

const CompanyListing = () => {

    const companies = [
        {
            id: 1,
            name: "Arvind Limited",
            rating: 4.9,
            reviews: 287,
            image: img1,
            tags: ["ENTRY LEVEL", "IMMEDIATE START"],
        },
        {
            id: 2,
            name: "Vardhman Textiles",
            rating: 4.9,
            reviews: 287,
            image: img2,
            tags: ["ENTRY LEVEL", "IMMEDIATE START"],
        },
        {
            id: 3,
            name: "Raymond Ltd",
            rating: 4.8,
            reviews: 198,
            image: img1,
            tags: ["FRESHERS", "FULL TIME"],
        },
        {
            id: 4,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 5,
            name: "Raymond Ltd",
            rating: 4.8,
            reviews: 198,
            image: img1,
            tags: ["FRESHERS", "FULL TIME"],
        },
        {
            id: 6,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 7,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 8,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 9,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 10,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
          {
            id: 11,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 12,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 13,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
        {
            id: 14,
            name: "Reliance Industries",
            rating: 4.7,
            reviews: 512,
            image: img2,
            tags: ["EXPERIENCED", "URGENT HIRING"],
        },
    ];





    const cardsRef = useRef([]);


    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                    y: 50,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);



    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 10;

    const totalPages = Math.ceil(companies.length / cardsPerPage);

    const startIndex = (currentPage - 1) * cardsPerPage;

    const currentCompanies = companies.slice(
        startIndex,
        startIndex + cardsPerPage
    );

    const firstCompanies = currentCompanies.slice(0, 6);
    const remainingCompanies = currentCompanies.slice(6);


    return (
        <div className='py-[50px] px-[65px] '>
            <h1 className="text-[30px] font-[800] manrope">Showing 2270 companies</h1>

            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8">
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* First 6 Cards */}
                        {firstCompanies.map((company, index) => (
                            <CompanyCard
                                key={company.id}
                                company={company}
                                index={index}
                                cardsRef={cardsRef}
                                custom="border border-gray-300"
                            />
                        ))}

                        {/* Recruiter Banner */}
                        {remainingCompanies.length > 0 && (
                            <div className="col-span-2">
                                <div className="bg-[#0067E6] rounded-[20px] overflow-hidden flex items-center justify-between px-8 py-6">
                                    <div>
                                        {/* <h3 className="text-white text-[14px] inter">
                                            Create your recruiter profile and get started in minutes.
                                        </h3> */}

                                        <p className="text-white text-[14px] mt-2 font-[400] inter">
                                            Create your recruiter profile and get started in minutes.<br />
                                            Post the jobs you need and connect with the right candidates
                                            easily.
                                        </p>

                                        <button className="mt-5 bg-white text-[#FF4A00] px-8 py-3 inter rounded-full font-[400]">
                                            Register as a Recruiter
                                        </button>
                                    </div>

                                    <img
                                        src={img3}
                                        alt=""
                                        className="w-[180px] object-contain"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Remaining Cards */}
                        {remainingCompanies.map((company, index) => (
                            <CompanyCard
                                key={company.id}
                                company={company}
                                index={index + 6}
                                cardsRef={cardsRef}
                                custom="border border-gray-300"
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-3 mt-10">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            className="px-4 py-2 border rounded-lg disabled:opacity-40"
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-10 h-10 rounded-full transition-all ${currentPage === i + 1
                                        ? "bg-[#005BBF] text-white"
                                        : "bg-gray-100"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className="px-4 py-2 border rounded-lg disabled:opacity-40"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div className="col-span-4 p-6">
                    <div className="w-full  bg-[#f5f7ff] rounded-[20px] px-3 py-5">
                        <h2 className="text-[24px] font-[700]  px-4 inter">
                            Discover jobs across <br />popular roles
                        </h2>
                        <p className="text-[14px] text-[#4E4E4E] inter px-4">Select a role and we'll show you relevant <br />jobs for it!</p>

                        <img src={img3} alt="Popular Roles" className="w-full object-cover mt-4 rounded-lg" />
                        <button className="w-full bg-[#005BBF] text-white py-2 text-[16px] rounded-full mt-4 inter font-[700]">Apply Now</button>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default CompanyListing