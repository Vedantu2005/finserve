import React from "react";

export default function Funding1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3776BE] to-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mt-12 w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Section */}
          <div className="text-white space-y-6">
            
            {/* Tag */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                Business Funding Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="italic font-light">Access Fast</span> Business <br />
              Funding —
              <span className="italic font-light"> on</span>
              <br />
              <span> Your Terms</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              Get approved for flexible business funding in as little as 24–48 hours. 
              Whether you need working capital, expansion funds, or cash flow support, 
              we connect you with trusted lenders—without impacting your credit score.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="https://calendly.com/colin-finserve360/virtual-coffee-15min">
                <button className="bg-[#1979E6] cursor-pointer hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base">
                  Check Funding Eligibility
                </button>
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-transparent rounded-3xl transform rotate-3"></div>

              {/* Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/business funding.webp"
                  alt="Business owners reviewing funding options"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
