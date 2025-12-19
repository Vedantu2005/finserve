// src/components/ConsumerFinance4.jsx

import React from "react";

const ConsumerFinance4 = () => {
  return (
    <section className="bg-white font-sans w-full px-4 sm:px-6 md:px-8 py-10">
      <div className="container mx-auto max-w-7xl text-center flex flex-col items-center">

        {/* Top Chip/Badge */}
        <div className="inline-block mb-6 sm:mb-8">
          <div className="py-1.5 px-6 sm:px-8 rounded-full border border-[#B0D3FE] text-sm sm:text-md font-medium text-[#4D94E8] bg-[#E9F3FE]">
            Ready to Unlock Hidden Profits?
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[800] text-[#1D2D3E] leading-tight mb-6 text-balance">
          <span className="font-serif italic font-normal text-[#1D2D3E]">Provide </span>{" "}
          Customer-centric payment options
        </h2>

        {/* Main Button */}
        <a
          href="https://calendly.com/colin-finserve360/profit-recovery-audit"
          className="w-full sm:w-auto"
        >
          <button
            className="w-full sm:w-auto py-3.5 sm:py-4 px-10 sm:px-12 cursor-pointer rounded-2xl text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            style={{
              background:
                "radial-gradient(circle at center, #4794eba5 10%, #4794EB 100%)",
              boxShadow: "0 8px 25px rgba(71, 148, 235, 0.3)",
            }}
          >
            start your profit recovery audit
          </button>
        </a>

        {/* Bottom Link */}
        <div className="mt-5 sm:mt-6 mb-16 text-xs sm:text-sm text-[#5A6775]">
          Guaranteed ROI within{" "}
          <a
            href="https://calendly.com/colin-finserve360/virtual-coffee-15min"
            className="font-bold text-[#1D2D3E] underline decoration-2 decoration-transparent hover:decoration-[#1D2D3E] transition-all duration-150"
          >
            14 days — or your money back.
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsumerFinance4;
