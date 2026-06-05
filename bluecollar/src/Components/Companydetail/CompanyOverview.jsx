import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Shield,
  Briefcase,
  Clock3,
  GraduationCap,
} from "lucide-react";

export default function CompanyOverview() {
  const benefits = [
    {
      icon: Shield,
      title: "Safety First Protocol",
      desc: "Zero-incident goal with top-tier PPE provided for all staff.",
    },
    {
      icon: Briefcase,
      title: "Health Insurance",
      desc: "Comprehensive medical, dental, and vision coverage from day one.",
    },
    {
      icon: Clock3,
      title: "Overtime Opportunities",
      desc: "Consistent availability of high-rate overtime hours for those who want it.",
    },
    {
      icon: GraduationCap,
      title: "Paid Training",
      desc: "We invest in your skills with certified apprenticeship programs.",
    },
  ];

  return (
    <div className="px-4 md:px-[80px] py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="lg:col-span-2">

          {/* About */}
          <div>
            <h2 className="text-[24px] font-extrabold text-[#191C1D] manrope mb-5">
              About Company
            </h2>

            <p className="text-[#414754] text-[20px] font-[400] inter max-w-[726px]">
              Domino's Pizza is one of the world's leading pizza delivery
              brands, known for its fast service, delicious taste, and wide
              variety of pizzas. Founded in 1960, Domino's has grown into a
              global brand with thousands of stores across multiple countries.

              The brand focuses on quick delivery, fresh ingredients, and
              innovative menu options, including pizzas, sides, desserts, and
              beverages. With its strong online ordering system and
              customer-friendly service, Domino's aims to deliver hot and tasty
              food right to your doorstep.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-14">
            <h2 className="text-[24px] font-bold text-[#191C1D] manrope mb-8">
              Employee Benefits & Perks
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl  hover:border border-gray-100 transition-all duration-500
hover:-translate-y-2
hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
hover:border-[#005BBF]/20"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#EAF0FF] flex items-center justify-center shrink-0 transition-all duration-500
hover:-translate-y-2
hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
hover:border-[#005BBF]/20">
                      <Icon size={20} className="text-[#005BBF]" />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#191C1D] manrope text-[18px]">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#414754] inter mt-1 text-[14px]" >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6 h-full">

          {/* Map Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm transition-all duration-500
hover:-translate-y-2
hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
hover:border-[#005BBF]/20">
            <div className="h-[180px] bg-gray-200">
              <iframe
                title="location-map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.3,17.3,78.6,17.5&layer=mapnik"
              />
            </div>

            <div className="p-5 px-6">
              <h3 className="font-bold text-[18px] text-[#191C1D] mb-2 manrope">Location</h3>

              <p className="text-sm text-[#414754]">
                West Loop Industrial District,
              </p>

              <p className="text-sm text-[#414754] mb-3 inter text-[14px]">
                Chicago, IL 60607
              </p>

              <button className="text-[#005BBF] text-sm font-semibold flex items-center gap-1">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 9.75H6V7.5H8.625V9.375L11.25 6.75L8.625 4.125V6H5.25C5.0375 6 4.85938 6.07187 4.71562 6.21562C4.57187 6.35938 4.5 6.5375 4.5 6.75V9.75ZM7.5 15C7.3125 15 7.12813 14.9625 6.94688 14.8875C6.76562 14.8125 6.6 14.7 6.45 14.55L0.45 8.55C0.3 8.4 0.1875 8.23438 0.1125 8.05313C0.0375 7.87188 0 7.6875 0 7.5C0 7.3125 0.0375 7.12813 0.1125 6.94688C0.1875 6.76562 0.3 6.6 0.45 6.45L6.45 0.45C6.6 0.3 6.76562 0.1875 6.94688 0.1125C7.12813 0.0375 7.3125 0 7.5 0C7.6875 0 7.87188 0.0375 8.05313 0.1125C8.23438 0.1875 8.4 0.3 8.55 0.45L14.55 6.45C14.7 6.6 14.8125 6.76562 14.8875 6.94688C14.9625 7.12813 15 7.3125 15 7.5C15 7.6875 14.9625 7.87188 14.8875 8.05313C14.8125 8.23438 14.7 8.4 14.55 8.55L8.55 14.55C8.4 14.7 8.23438 14.8125 8.05313 14.8875C7.87188 14.9625 7.6875 15 7.5 15ZM4.5 10.5L7.5 13.5L13.5 7.5L7.5 1.5L1.5 7.5L4.5 10.5Z" fill="#005BBF"/>
</svg>

                Get Directions
              </button>
            </div>
          </div>

          {/* Company Contact Card */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-5 flex-1 transition-all duration-500
hover:-translate-y-2
hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
hover:border-[#005BBF]/20     px-6
">
            <h3 className="text-[24px] font-bold text-[#191C1D] mb-5 manrope">
              Dominos
            </h3>

            <div className="space-y-5">

              <div className=" group
  flex gap-3
  rounded-xl
  transition-all duration-300
  hover:bg-[#F8FBFF]
  hover:translate-x-2">
<svg 
  className="
  shrink-0
  transition-all duration-300
  group-hover:scale-110
  group-hover:drop-shadow-[0_0_10px_rgba(0,91,191,0.4)]
"
 width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.734 20.316C13.3485 18.015 18 13.314 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0C6.61305 0 4.32387 0.948211 2.63604 2.63604C0.948211 4.32387 3.55683e-08 6.61305 0 9C0 13.314 4.65 18.015 7.266 20.316C7.74317 20.7419 8.3604 20.9773 9 20.9773C9.6396 20.9773 10.2568 20.7419 10.734 20.316ZM6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9Z" fill="#005BBF"/>
</svg>
                <span className="text-sm text-[#4E4E4E] inter">
                  Villupuram Main Road, Opp. Collectorate
                </span>
              </div>

              <div className="group
  flex gap-3
  rounded-xl
  transition-all duration-300
  hover:bg-[#F8FBFF]
  hover:translate-x-2">
<svg className="
  shrink-0
  transition-all duration-300
  group-hover:scale-110
  group-hover:drop-shadow-[0_0_10px_rgba(0,91,191,0.4)]
"
width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.95 18C14.8667 18 12.8083 17.546 10.775 16.638C8.74167 15.73 6.89167 14.4423 5.225 12.775C3.55833 11.1077 2.271 9.25767 1.363 7.225C0.455 5.19233 0.000666667 3.134 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0793332 5.725 0.238C5.90833 0.396667 6.01667 0.584 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.704 9.11233 5.162 9.687C5.62 10.2617 6.12433 10.816 6.675 11.35C7.19167 11.8667 7.73333 12.346 8.3 12.788C8.86667 13.23 9.46667 13.634 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1377 17.775 12.313C17.925 12.4883 18 12.684 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#005BBF"/>
</svg>
                <span className="text-sm text-[#414754]">
                  +91 9876543210 / +91 9876543210
                </span>
              </div>

              <div className="group
  flex gap-3
  rounded-xl
  transition-all duration-300
  hover:bg-[#F8FBFF]
  hover:translate-x-2">
<svg className="
  shrink-0
  transition-all duration-300
  group-hover:scale-110
  group-hover:drop-shadow-[0_0_10px_rgba(0,91,191,0.4)]
"
width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 3.53516V13.0002C20 13.7654 19.7077 14.5017 19.1827 15.0584C18.6578 15.6152 17.9399 15.9503 17.176 15.9952L17 16.0002H3C2.23479 16.0002 1.49849 15.7078 0.941739 15.1829C0.384993 14.6579 0.0498925 13.9401 0.00500011 13.1762L0 13.0002V3.53516L9.445 9.83216L9.561 9.89816C9.69771 9.96495 9.84785 9.99967 10 9.99967C10.1522 9.99967 10.3023 9.96495 10.439 9.89816L10.555 9.83216L20 3.53516Z" fill="#005BBF"/>
<path d="M17.0003 0C18.0803 0 19.0273 0.57 19.5553 1.427L10.0003 7.797L0.445312 1.427C0.696105 1.01982 1.0406 0.6785 1.45008 0.431489C1.85957 0.184479 2.32217 0.0389373 2.79931 0.00699997L3.00031 0H17.0003Z" fill="#005BBF"/>
</svg>
                <span className="text-sm text-[#414754]">
                  information@gmail.com
                </span>
              </div>

              <div className="group
  flex gap-3
  rounded-xl
  transition-all duration-300
  hover:bg-[#F8FBFF]
  hover:translate-x-2">
<svg className="
  shrink-0
  transition-all duration-300
  group-hover:scale-110
  group-hover:drop-shadow-[0_0_10px_rgba(0,91,191,0.4)]
"
 width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2806 5.46938L11.0306 0.219375C10.9609 0.149749 10.8782 0.094539 10.7871 0.0568979C10.6961 0.0192569 10.5985 -7.72394e-05 10.5 2.31899e-07H1.5C1.10218 2.31899e-07 0.720644 0.158035 0.43934 0.43934C0.158035 0.720645 0 1.10218 0 1.5V18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H15C15.3978 19.5 15.7794 19.342 16.0607 19.0607C16.342 18.7794 16.5 18.3978 16.5 18V6C16.5001 5.90148 16.4807 5.80391 16.4431 5.71286C16.4055 5.62182 16.3503 5.53908 16.2806 5.46938ZM11.25 14.25H5.25C5.05109 14.25 4.86032 14.171 4.71967 14.0303C4.57902 13.8897 4.5 13.6989 4.5 13.5C4.5 13.3011 4.57902 13.1103 4.71967 12.9697C4.86032 12.829 5.05109 12.75 5.25 12.75H11.25C11.4489 12.75 11.6397 12.829 11.7803 12.9697C11.921 13.1103 12 13.3011 12 13.5C12 13.6989 11.921 13.8897 11.7803 14.0303C11.6397 14.171 11.4489 14.25 11.25 14.25ZM11.25 11.25H5.25C5.05109 11.25 4.86032 11.171 4.71967 11.0303C4.57902 10.8897 4.5 10.6989 4.5 10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H11.25C11.4489 9.75 11.6397 9.82902 11.7803 9.96967C11.921 10.1103 12 10.3011 12 10.5C12 10.6989 11.921 10.8897 11.7803 11.0303C11.6397 11.171 11.4489 11.25 11.25 11.25ZM10.5 6V1.875L14.625 6H10.5Z" fill="#005BBF"/>
</svg>
                <span className="text-sm text-[#414754]">
                  GSTIN : 3546FEFRG3F56785W
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
      <section className="mt-14 grid grid-cols-1 lg:grid-cols-2">
        <div className="">
  <h2 className="text-[24px] font-extrabold text-[#191C1D] manrope mb-5">
    More Information
  </h2>

  <div className="  border border-[#D9D9D9]
  rounded-2xl
  p-6
  bg-white
  max-w-[700px]
  transition-all duration-500
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
  hover:border-[#005BBF]/20">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">

      <div className="flex items-center gap-1">
        <span className="font-bold text-[#414754] text-[18px] inter">
          Type :
        </span>
        <span className="text-[#414754] text-[18px] inter font-[400]">
          Public
        </span>
      </div>

      <div className="flex items-center gap-1">
        <span className="font-bold text-[#414754] text-[18px] inter">
          Company Size :
        </span>
        <span className="text-[#414754] text-[18px] inter font-[400]">
          1001-5000
        </span>
      </div>

      <div className="flex items-center gap-1">
        <span className="font-bold text-[#414754] text-[20px] inter">
          Founded :
        </span>
        <span className="text-[#414754] text-[18px] inter font-[400]">
          2001
        </span>
      </div>

      <div className="flex items-center gap-1">
        <span className="font-bold text-[#414754] text-[18px] inter">
          Website :
        </span>

        <a
          href="https://www.ksk.co.in"
          target="_blank"
          rel="noreferrer"
          className="text-[#414754] text-[18px] inter font-[400] underline hover:text-[#005BBF] transition-colors"
        >
          www.ksk.co.in
        </a>
      </div>

    </div>
  </div>
  </div>
</section>
    </div>
  );
}