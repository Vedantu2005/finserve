// src/components/Aricle3.jsx

import React from 'react';

const Article3 = () => {
  return (
    <section className="bg-white font-sans py-20 px-6 md:px-12 w-full">
      <div className="container mx-auto max-w-4xl text-center">

        {/* Top Chip/Badge */}
        <div className="inline-block mb-8">
          <div className="py-1.5 px-8 rounded-full border border-[#B0D3FE] text-md font-medium text-[#4D94E8] bg-[#E9F3FE]">
            Ready to Unlock Hidden Profits?
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-[800] text-[#1D2D3E] leading-tight mb-6">
          Launch Your Profit Recovery Audit <span className="font-serif italic font-normal text-[#1D2D3E]">Today</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-[#5A6775] leading-relaxed mb-10">
          In just 14 days, we'll uncover <span className="font-bold">3x–5x</span> your audit fee in savings – or give you a <span className="font-bold">100% refund</span>.
          <br />
          No risk, only upside.
        </p>

        {/* Main Button */}
        <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
          <button
            className="py-4 px-12 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            style={{
              // Custom Gradient Button
              background: 'linear-gradient(90deg, #4794EB 0%, #4794EB 100%)',
              boxShadow: '0 8px 25px rgba(255, 255, 255, 1)',
            }}
          >
            Schedule a Call
          </button>
        </a>

        {/* Bottom Link */}
        <div className="mt-6 text-sm text-[#5A6775]">
          Have questions? <a href="https://calendly.com/colin-finserve360/profit-recovery-audit" className="font-bold text-[#1D2D3E] underline decoration-2 decoration-transparent hover:decoration-[#1D2D3E] transition-all duration-150">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Article3;