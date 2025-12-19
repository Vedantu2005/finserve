import React from 'react';

const Referrals = () => {
  return (
    <div className="w-full bg-gray-50 font-inter py-12 sm:py-20">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div
          className="bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl shadow-blue-500/10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full"
          style={{
            border: "1px solid #E0E7FF",
          }}
        >
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 h-56 sm:h-72 lg:h-auto">
            <img
              src="/assets/twoMan.jpg"
              alt="Two businessmen discussing finances"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/twoMan.jpg";
              }}
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 text-left">
            {/* Tag */}
            <span className="text-[11px] sm:text-sm font-semibold text-blue-700 border border-blue-200 bg-white px-3 sm:px-4 py-1.5 rounded-full inline-block tracking-wider uppercase shadow-sm mb-3 sm:mb-4">
              Know a Business That Could Benefit?
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight mb-3 sm:mb-5">
              Earn by Referring{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Businesses to
              </span>{" "}
              FinServe360
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-none">
              Become part of our referral network — introduce companies, help them save, and earn rewards for every successful audit.
            </p>

            {/* Button */}
            <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
              <button
                className="w-full cursor-pointer sm:w-auto px-6 sm:px-8 py-3 rounded-xl text-white text-sm sm:text-lg font-medium shadow-md sm:shadow-lg transition duration-300 transform hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #6BACEF 0%, #4CA8FF 100%)",
                }}
              >
                Learn About Our Referral Program
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
