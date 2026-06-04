
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import img1 from '../../../assets/img/comapnies/1.png'
import img2 from '../../../assets/img/comapnies/2.png'
import CompanyCard from "../../../Components/CompanyCard/CompanyCard";

gsap.registerPlugin(ScrollTrigger);

const NearByCompanies = () => {

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

    return (
        <div className='w-full h-[350px] bg-[#f5f7ff]'>
            <div className='px-[80px] py-[50px] flex justify-between'>
                <div>
                    <h3 className="text-[30px]  font-[1000] manrope">Near By Companies</h3>
                    {/* <p className="text-[16px] text-[#414754] inter">Find the right path for your skills</p> */}
                </div>
                <div><p className="text-[16px] text-[#414754] inter cursor-pointer">View All</p></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[80px]">
                {companies.map((company, index) => (
                  <CompanyCard  company={company} index={index} cardsRef={cardsRef} />
                ))}
            </div>

        </div>
    )
}

export default NearByCompanies