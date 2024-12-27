import React from "react";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import ViewCount from "./Views";

const HomeSection = () => {
  return (
    <div
      className="page-wrapper bg-blue-400 text-white p-6 rounded-lg shadow-lg w-72 h-auto"
   
    >
      <div className="upper flex flex-col items-center">
        <div className="views-label flex items-start text-gray-200 text-sm">
         <ViewCount/>
        </div>
        <img
          src="https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693471276790.png"
          alt="Profile"
          className="profile-pic-img w-20 h-20 rounded-full mt-4"
          crossOrigin="anonymous"
        />
        <div className="firmname text-lg font-semibold mt-2">
          PV Nutrition &amp; Fitness
        </div>
        <div className="firmname-underline w-10 h-1 bg-white mt-1"></div>
        <div className="name text-center mt-4 text-sm">
          Mr. <b>Palani Manickam</b>
          <span className="block mt-1 text-xs italic text-gray-300">
            (Wellness Coach)
          </span>
        </div>
        <div className="name text-center mt-2 text-sm">
          Ms. <b>Vijaya Shanthi</b>
          <span className="block mt-1 text-xs italic text-gray-300">
            (Wellness Coach)
          </span>
        </div>
      </div>
    

<div className="round-contact-buttons flex justify-center gap-4 mt-6 text-xs">
  <a
    target="_blank"
    href="tel:+919047793275"
    rel="noreferrer"
    className="flex flex-col items-center text-blue-200 hover:text-white"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full mb-1">
      <FaPhone className="text-white text-lg" />
    </div>
    Call Me
  </a>
  <a
    target="_blank"
    href="https://wa.me/919047793275?text=Got reference from your Digital vCard. Want to know more details."
    rel="noreferrer"
    className="flex flex-col items-center text-green-200 hover:text-white"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full mb-1">
      <FaWhatsapp className="text-white text-lg" />
    </div>
    WhatsApp
  </a>
  <a
    target="_blank"
    className="flex flex-col items-center text-red-200 hover:text-white"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-full mb-1">
      <FaMapMarkerAlt className="text-white text-lg" />
    </div>
    Direction
  </a>
  <a
    target="_blank"
    href="mailto:"
    rel="noreferrer"
    className="flex flex-col items-center text-yellow-200 hover:text-white"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full mb-1">
      <FaEnvelope className="text-white text-lg" />
    </div>
    Mail
  </a>
</div>


    </div>
  );
};

export default HomeSection;
