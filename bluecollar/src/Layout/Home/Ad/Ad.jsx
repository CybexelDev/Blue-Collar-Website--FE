import React, { useRef } from "react";
import ad from '../../../assets/img/ad/ad.png'
import { SiSwiggy } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Ad = () => {

  const imageRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            imageRef.current,
            {
                x: 300,
                opacity: 0,
                scale: 0.8,
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: 1.5,
                },
            }
        );
    }, []);




    return (
        <div>
            <div className="w-full bg-[#ffffff] p-8 mt-10">
                <div className="relative  bg-[#0D5BC7] rounded-[40px]  pl-16 pr-12 pt-7 flex items-center justify-between">

                    {/* Ads Badge */}
                    <div className="absolute top-4 left-4 bg-white text-gray-500 text-sm px-2 py-1 rounded-md">
                        Ads
                    </div>

                    {/* Left Content */}
                    <div>
                        <div className="flex items-start gap-5 z-10">
                            <div className="w-16 h-16 rounded-2xl bg-[#FF6B00] flex items-center justify-center">
                                <SiSwiggy className="text-white text-[30px]" />
                            </div>
                            <div className=" manrope">
                                <h2 className="text-white text-[25px] font-bold manrope">
                                    Delivery Partner
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-white inter">4.9</span>
                                    <span className="text-yellow-400">★</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-white/90 mt-6 max-w-[600px] text-[14px] leading-relaxed inter">
                                Join Swiggy as a Delivery Partner – enjoy flexible timings and
                                attractive earnings. All you need is a bike and a smartphone to
                                start earning with weekly payouts.
                            </p>
                    </div>


                    {/* Right Image */}
                    <div ref={imageRef} className=" z-10">
                        <img
                            src={ad}
                            alt="Delivery Partner"
                            className="h-[400px] object-contain mt-[-150px]"
                        />
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute right-20 top-20 w-20 h-20 bg-orange-400 rotate-12 rounded-lg opacity-70"></div>

                    <div className="absolute -right-20 top-0 w-[400px] h-[400px] bg-white/5 rounded-full"></div>
                    <div className="absolute -right-10 bottom-0 w-[300px] h-[300px] bg-white/5 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Ad