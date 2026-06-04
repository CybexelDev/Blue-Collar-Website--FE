import React from "react";
import { Bell, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
const [openLang, setOpenLang] = useState(false);
  return (
    <nav className="w-full bg-[#F8F9FACC] px-15 py-4 flex items-center justify-between shadow-sm inter">

      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        TradeCraft
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 text-[#52525B] font-medium text-[16px] inter leading-[24px]">

        <li>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
            {t("home")}
          </button>
        </li>

        <li className="hover:text-black cursor-pointer">
          {t("companies")}
        </li>

        <li className="hover:text-black cursor-pointer">
          {t("jobs")}
        </li>

        <li className="hover:text-black cursor-pointer">
          {t("saved")}
        </li>

        <li className="hover:text-black cursor-pointer">
          {t("applied")}
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.1435 2 8.363 2.7375 7.05024 4.05025C5.73749 5.36301 4.99999 7.14348 4.99999 9V12.528C5.00014 12.6831 4.96419 12.8362 4.89499 12.975L3.17799 16.408C3.09412 16.5757 3.05451 16.7621 3.06294 16.9494C3.07137 17.1368 3.12754 17.3188 3.22614 17.4783C3.32473 17.6379 3.46246 17.7695 3.62626 17.8608C3.79005 17.9521 3.97447 18 4.16199 18H19.838C20.0255 18 20.2099 17.9521 20.3737 17.8608C20.5375 17.7695 20.6753 17.6379 20.7738 17.4783C20.8724 17.3188 20.9286 17.1368 20.937 16.9494C20.9455 16.7621 20.9059 16.5757 20.822 16.408L19.106 12.975C19.0365 12.8362 19.0002 12.6832 19 12.528V9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2ZM12 21C11.3793 21.0003 10.7739 20.8081 10.267 20.4499C9.76016 20.0917 9.37688 19.5852 9.16999 19H14.83C14.6231 19.5852 14.2398 20.0917 13.733 20.4499C13.2261 20.8081 12.6206 21.0003 12 21Z" fill="black"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3C19.0609 3 20.0783 3.42143 20.8284 4.17157C21.5786 4.92172 22 5.93913 22 7V15C22 16.0609 21.5786 17.0783 20.8284 17.8284C20.0783 18.5786 19.0609 19 18 19H13.276L8.514 21.857C8.37059 21.9431 8.20788 21.9918 8.04077 21.9987C7.87366 22.0056 7.70749 21.9705 7.55746 21.8966C7.40743 21.8227 7.27833 21.7123 7.18199 21.5756C7.08565 21.4389 7.02514 21.2802 7.006 21.114L7 21V19H6C4.97376 19 3.98677 18.6056 3.24319 17.8983C2.4996 17.191 2.05631 16.225 2.005 15.2L2 15V7C2 5.93913 2.42143 4.92172 3.17157 4.17157C3.92172 3.42143 4.93913 3 6 3H18ZM14 12H8C7.73478 12 7.48043 12.1054 7.29289 12.2929C7.10536 12.4804 7 12.7348 7 13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12ZM16 8H8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10H16C16.2652 10 16.5196 9.89464 16.7071 9.70711C16.8946 9.51957 17 9.26522 17 9C17 8.73478 16.8946 8.48043 16.7071 8.29289C16.5196 8.10536 16.2652 8 16 8Z" fill="black"/>
</svg>

        {/* Language Switch */}
     <div className="relative">
  
  <button
    onClick={() => setOpenLang(!openLang)}
    className="
      flex items-center gap-2
      border border-gray-300
      px-4 py-2
      rounded-full
      bg-white
      text-sm font-medium
      shadow-sm
      hover:bg-gray-100
      transition-all
      cursor-pointer
    "
  >
    🌐 {i18n.language.toUpperCase()}

    <svg
      className={`w-4 h-4 transition-transform ${
        openLang ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {openLang && (
    <div
      className="
        absolute right-0 mt-2
        w-[150px]
        bg-white
        rounded-2xl
        shadow-[0_8px_25px_rgba(0,0,0,0.15)]
        p-2
        z-50
      "
    >
      
      <button
        onClick={() => {
          i18n.changeLanguage("en");
          setOpenLang(false);
        }}
        className="w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 transition-all"
      >
        🇺🇸 English
      </button>

      <button
        onClick={() => {
          i18n.changeLanguage("ml");
          setOpenLang(false);
        }}
        className="w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 transition-all"
      >
        🇮🇳 Malayalam
      </button>

      <button
        onClick={() => {
          i18n.changeLanguage("hi");
          setOpenLang(false);
        }}
        className="w-full text-left px-4 py-2 rounded-xl hover:bg-blue-50 transition-all"
      >
        🇮🇳 Hindi
      </button>

    </div>
  )}
</div>

        {/* Login Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition">
          {t("login")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;