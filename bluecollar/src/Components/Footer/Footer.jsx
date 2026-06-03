import React from "react";
import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className=" mx-auto px-20 py-12">
<div className="grid grid-cols-2 md:grid-cols-[3fr_1fr_1fr_1fr] gap-y-10">          {/* Left */}
<div className="col-span-2 md:col-span-1 text-center md:text-left">            <h2 className="text-[28px] font-bold manrope">
              Blue Collar Job
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-white/60 inter">
              Lorem ipsum dolor sit amet
              <br />
              consectetur adipiscing elit aliquam
            </p>

            <div className="flex items-center gap-4 mt-6">
              {/* <Facebook size={15} className="text-white cursor-pointer" />
              <Twitter size={15} className="text-white cursor-pointer" />
              <Instagram size={15} className="text-white cursor-pointer" />
              <Linkedin size={15} className="text-white cursor-pointer" />
              <Youtube size={15} className="text-white cursor-pointer" /> */}
            </div>
          </div>

          {/* Quick Link */}
<div className="text-center md:text-left">            <h3 className="font-semibold text-[18px] mb-5">
              Quick Link
            </h3>

            <ul className="space-y-3 text-[14px] text-white/60">
              <li>Home</li>
              <li>Jobs</li>
              <li>Saved</li>
              <li>Applied</li>
            </ul>
          </div>

          {/* Support */}
<div className="text-center md:text-left">            <h3 className="font-semibold text-[18px] mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-[14px] text-white/60">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Shipping & Returns</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Contact */}
<div className="col-span-2 md:col-span-1 text-center md:text-left mx-auto md:mx-0">            <h3 className="font-semibold text-[18px] mb-5">
              Contacts us
            </h3>

            <div className="space-y-4 text-[14px] text-white/60">
              <div className="flex items-start gap-3">
                <Mail size={15} className="mt-1 shrink-0" />
                <span>contact@company.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={15} className="mt-1 shrink-0" />
                <span>(414) 687 - 5892</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-1 shrink-0" />
                <span>
                  794 Mcallister St
                  <br />
                  San Francisco, 94102
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/20" />

        {/* Bottom */}
<div className="pt-6 flex flex-col gap-3 md:flex-row justify-between items-center text-[13px] text-white/55 text-center md:text-left">          <p>Copyright © 2022 Blue Collar Jobs</p>

          <div className="mt-3 md:mt-0 flex items-center gap-1">
            <span>All Rights Reserved |</span>
            <a href="#" className="underline">
              Terms and Conditions
            </a>
            <span>|</span>
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;