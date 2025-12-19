import React from 'react';

export default function ReferralHero() {
  return (
    <div className="bg-gradient-to-b from-[#3776BE] to-[#F7FAFC] flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mt-18 w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 lg:h-full lg:flex lg:flex-col lg:justify-center p-6">

            {/* Tag */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                Partner With FinServe360
              </span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: "52px",
                lineHeight: "58px",
                letterSpacing: "0%",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontFamily: "Instrument Serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                Earn by{" "}
              </span>
              <span
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 700,
                  fontStyle: "bold",
                }}
              >
                Helping
                <br />
                Businesses Save
              </span>
            </h1>


            {/* Description */}
            <p
              style={{
                fontFamily: "TT Hoves Pro Trial",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "#FFFFFF",
                maxWidth: "36rem", // same as max-w-xl
              }}
            >
              Join our referral network and introduce companies that could
              <br />
              benefit from FinServe360's profit recovery solutions. You'll earn
              <br />
              generous rewards for every successful audit – it's that simple.
            </p>


            {/* CTA Button and Link */}
            <div className="pt-4 space-y-4">
              <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
                <button
                  className="bg-[#1979E6] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                >
                  Make an Introduction
                </button>
              </a>

              {/* Secondary link, style adjusted to look like the faint text below the button */}

              <p className="text-black text-sm cursor-pointer mt-2">
                Learn How It Works?
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-lg lg:max-w-none">
              <div
                className="relative  overflow-hidden"
              >
                {/* Image itself */}
                <img
                  src="/assets/twoMan.jpg"
                  alt="Two businessmen discussing profit recovery on a laptop"
                  className="w-full object-cover rounded-3xl"
                  style={{ aspectRatio: '16/10' }} // Adjust aspect ratio as needed to match the screenshot
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}