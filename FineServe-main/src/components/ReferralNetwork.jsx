// ReferralNetwork.jsx

import React from 'react';

import businessConsultantIcon from '/icon1.png';
import coachesAdvisorsIcon from '/icon2.png';
import accountantsBookkeepersIcon from '/icon3.png';
import mnaBusinessBrokersIcon from '/icon4.png';
import marketingAgenciesIcon from '/icon5.png';
import hrPayrollProfessionalIcon from '/icon.png';


const CustomFonts = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap');
      
      /* SF Pro simulation using a modern system font stack */
      .font-sf-pro {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
      
      .font-instrument-serif {
        font-family: 'Instrument Serif', serif;
      }

      /* Custom scrollbar styling for aesthetics */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #4CA8FF;
        border-radius: 10px;
      }
    `}
  </style>
);

// Helper component for the grid items to manage the complex lines
const GridItem = ({ icon, text, index }) => {
  let lineClasses = "relative";
  switch (index) {
    case 0:
    case 3:
      lineClasses += " md:after:content-[''] md:after:absolute md:after:border-l  md:after:border-[#4CA8FFA3] md:after:h-1/2 md:after:top-1/4 md:after:right-[-24px] lg:after:right-[-40px]";
      break;
    case 1:
      lineClasses += " md:after:content-[''] md:after:absolute md:after:border-l  md:after:border-[#4CA8FFA3] md:after:h-1/2 md:after:top-1/4 md:after:right-[-24px] lg:after:right-[-40px]";
      lineClasses += " md:before:content-[''] md:before:absolute md:before:border-t  md:before:border-[#4CA8FFA3] md:before:w-1/2 md:before:left-1/4 md:before:bottom-[-32px]";
      break;
    case 4:
      lineClasses += " md:after:content-[''] md:after:absolute md:after:border-l  md:after:border-[#4CA8FFA3] md:after:h-1/2 md:after:top-1/4 md:after:right-[-24px] lg:after:right-[-40px]";
      break;
    case 2: // Accountants
    case 5: // HR & Payroll
    default:
      // No lines
      break;
  }

  return (
    <div className={lineClasses}>
      <div className="mx-auto mb-4 flex h-[70px] md:w-[70px] items-center justify-center  md:h-[70px] md:w-[70px] ">
        <img src={icon} alt={text} className="h-20 w-20 object-contain md:h-20 md:w-20" />
      </div>
      <p className="text-base text-center font-bold text-[#2c3e50] md:text-lg">
        {text}
      </p>
    </div>
  );
};

// Main component
const ReferralNetwork = () => {
  const items = [
    { icon: businessConsultantIcon, text: "Business Consultants" },
    { icon: coachesAdvisorsIcon, text: "Coaches & Advisors" },
    { icon: accountantsBookkeepersIcon, text: "Accountants & Bookkeepers" },
    { icon: mnaBusinessBrokersIcon, text: "M&A & Business Brokers" },
    { icon: marketingAgenciesIcon, text: "Fractional Executives" },
    { icon: hrPayrollProfessionalIcon, text: "HR & Payroll Professionals" },
  ];

  return (
    // Main container with white background
    <div className="font-sf-pro antialiased p-4 sm:p-8 lg:p-12">
      <CustomFonts />

      <div className='max-w-6xl mx-auto py-8'>
        <div className="flex justify-center mb-6">
          <span className="text-blue-600 bg-blue-100/50 border border-blue-200 text-xs font-medium px-4 py-1.5 rounded-full tracking-wide uppercase">
            Built for Industry Professionals
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 leading-tight">
          Who Can
          <span className="font-instrument-serif font-normal text-gray-800 px-3">
            Join
          </span>
          Our Referral Network
        </h1>

        {/* Subtitle */}
        <p className="text-center max-w-2xl mx-auto mt-4 mb-7 text-lg text-gray-500 font-medium">
          Our referral partners come from diverse backgrounds - all united by a relationship first mindset
        </p>


        <div className="relative mx-auto mb-12 grid max-w-sm grid-cols-2 gap-y-12
                      md:max-w-5xl md:grid-cols-3 md:gap-x-12 lg:gap-x-20 md:gap-y-16">

          {items.map((item, index) => (
            <GridItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              index={index}
            />
          ))}

        </div>

        {/* 5. Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a href="https://calendly.com/colin-finserve360/virtual-coffee-15min">
            <button
              className="font-sf-pro cursor-pointer px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl 
                       shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition duration-300 
                       text-lg tracking-wider"
            >
              Make an Introduction
            </button>
          </a>
        </div>
      </div>


    </div>
  );
};

export default ReferralNetwork;