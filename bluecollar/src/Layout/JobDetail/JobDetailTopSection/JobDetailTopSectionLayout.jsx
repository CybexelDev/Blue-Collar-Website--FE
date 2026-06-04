import React from "react";
import logo from "../../../assets/images/jobdetail/logo.png"
const Tag = ({ children, color = "gray" }) => {
  const colors = {
    gray: "bg-gray-100 text-gray-600 border border-gray-200",
    blue: "bg-blue-100 text-blue-700 border border-blue-200",
  };
  return (
<span
  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${colors[color]} inter transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer`}
>      {children}
    </span>
  );
};

const CheckCircle = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const MapPin = () => (
  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

export default function JobDetailTopSection() {
  return (
<div className="flex items-start justify-center px-4 md:px-[80px] py-5 pt-10">      <div className="w-full  bg-white rounded-2xl  overflow-hidden">
<div className="flex flex-col lg:flex-row ">
          {/* ── Left Column ── */}
<div
  className="
    flex-1
    animate-fadeUp
  "
>            {/* Header */}
<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5 text-center sm:text-left">       
         <div
  className="
    w-[80px]
    h-[80px]
    bg-white
    rounded-[24px]
    shadow-[0px_4px_20px_rgba(0,0,0,0.08)]
    flex items-center justify-center
    transition-all duration-300
    hover:scale-105
    hover:rotate-3
  "
>
  <img
    src={logo}
    alt="Company Logo"
    className="w-[57px] h-[57px] object-contain rounded-[10px]"
  />
</div>
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#191C1D] manrope transition-all duration-300 hover:text-[#005BBF]">Delivery Partner</h1>
                <p className="text-[#005BBF] font-[400] text-[20px] mt-1 inter">Food & Beverage</p>
              </div>
            </div>

            {/* Meta Tags */}
            <div className="flex flex-wrap gap-2 mb-6 lg:mb-14 justify-center lg:justify-start">
              <Tag>Full-Time</Tag>
              <Tag>1 - Number of Openings</Tag>
              <Tag>Fresher</Tag>
            </div>

            {/* Job Description */}
         <section className="lg:mb-9 mb-5"> 
            <h2 className="text-[24px] manrope font-bold text-[#191C1D] lg:mb-3 mb-1  text-center lg:text-left">Job Description</h2>
          <p className="text-[#414754] font-[400] text-[18px]  mb-3leading-[32px] inter whitespace-pre-line lg:pr-8 p-4"> We are looking for energetic and responsible Delivery Partners to join the Domino's team. You will be responsible for delivering orders safely and on time while providing a great customer experience.<br/>
             As part of the Domino's team, you will work in a fast-paced environment with flexible working hours and attractive earning opportunities. We value punctuality, customer-friendly attitude, and commitment to service. </p> 
             </section>

            {/* Skills */}
            <section className="">
              <h2 className="text-[24px] manrope font-bold text-[#191C1D] mb-4  text-center lg:text-left ">Skills Required</h2>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Blueprint Reading", "HVAC Repair", "Safety Compliance", "Team Leadership"].map((skill) => (
                  <Tag key={skill} color="blue">{skill}</Tag>
                ))}
              </div>
            </section>
          </div>

          {/* ── Right Column ── */}
<div className="w-full lg:w-[418px] lg:p-0 p-6 flex flex-col gap-7 ">
            {/* Salary Card */}
<div
  className="
    bg-gradient-to-r
    from-[#005BBF]
    to-[#1A73E8]
    rounded-[24px]
    p-4
    lg:p-6
    text-white
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_25px_60px_rgba(0,91,191,0.35)]
  "
>                  <p className="text-xs font-bold uppercase tracking-widest text-[#ffffffb0] mb-1 manrope">
                Estimated Salary
              </p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[48px] font-extrabold manrope">₹15,000</span>
                <span className="text-white text-[20px] font-medium inter">/ Month</span>
              </div>
              <div className="space-y-2">
                {["Benefits Included", "Overtime Eligible"].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-sm inter text-[#ffffffb0]">{item}</span>
                    <CheckCircle />
                  </div>
                ))}
              </div>
            </div>

            {/* Map Card */}
<div
  className="
    rounded-2xl
    overflow-hidden
    bg-white
    shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
    transition-all
    duration-300
    hover:-translate-y-1
    border 
    border-[#C1C6D626]
    hover:shadow-[0px_10px_25px_rgba(0,0,0,0.08)]
  "
>           {/* Swap the iframe for a real Maps embed or <img> snapshot */}
              <div className="h-36 bg-gray-200">
                <iframe
                  title="location-map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: "none" }}
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.3,17.3,78.6,17.5&layer=mapnik"
                />
              </div>
              <div className="p-4">
                <p className="text-[18px] font-bold  text-[#191C1D] mb-1 manrope">
                  Location
                </p>
                <p className="text-sm font-[400] text-[#414754] leading-snug">
                  West Loop Industrial District,
                </p>
                <p className="text-sm text-[#414754] mb-3">Chicago, IL 60607</p>
                <button className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:underline">
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 9.75H6V7.5H8.625V9.375L11.25 6.75L8.625 4.125V6H5.25C5.0375 6 4.85938 6.07187 4.71562 6.21562C4.57187 6.35938 4.5 6.5375 4.5 6.75V9.75ZM7.5 15C7.3125 15 7.12813 14.9625 6.94688 14.8875C6.76562 14.8125 6.6 14.7 6.45 14.55L0.45 8.55C0.3 8.4 0.1875 8.23438 0.1125 8.05313C0.0375 7.87188 0 7.6875 0 7.5C0 7.3125 0.0375 7.12813 0.1125 6.94688C0.1875 6.76562 0.3 6.6 0.45 6.45L6.45 0.45C6.6 0.3 6.76562 0.1875 6.94688 0.1125C7.12813 0.0375 7.3125 0 7.5 0C7.6875 0 7.87188 0.0375 8.05313 0.1125C8.23438 0.1875 8.4 0.3 8.55 0.45L14.55 6.45C14.7 6.6 14.8125 6.76562 14.8875 6.94688C14.9625 7.12813 15 7.3125 15 7.5C15 7.6875 14.9625 7.87188 14.8875 8.05313C14.8125 8.23438 14.7 8.4 14.55 8.55L8.55 14.55C8.4 14.7 8.23438 14.8125 8.05313 14.8875C7.87188 14.9625 7.6875 15 7.5 15ZM4.5 10.5L7.5 13.5L13.5 7.5L7.5 1.5L1.5 7.5L4.5 10.5Z" fill="#005BBF"/>
</svg>
                  Get Directions
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}