import React from "react";

// Removed Lucide icons (Globe, Clock, Handshake)
const styleSheet = `
/* SF Pro font and headline responsiveness */
.font-sf-pro-headline {
  font-family: 'SF Pro', sans-serif;
  font-weight: 700;
  font-size: 58px;
  line-height: 62px;
}
@media (max-width: 1024px) {
  .font-sf-pro-headline {
    font-size: 48px;
    line-height: 54px;
  }
}
@media (max-width: 640px) {
  .font-sf-pro-headline {
    font-size: 40px;
    line-height: 44px;
  }
}

/* Mobile Background */
#hero-section {
  background-image: url('/mob.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
@media (min-width: 768px) {
  #hero-section {
    background-image: url('/assets/banner.png');
    background-position: top center;
  }
}
`;

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full text-white overflow-hidden flex flex-col items-center justify-center py-20 sm:py-24 lg:px-24 -mt-12">
      <style>{styleSheet}</style>

      <div className="relative z-10 mt-25 flex flex-1 items-center justify-center w-full">
        <div className="container mx-auto px-5 sm:px-8 pt-10 pb-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-12 items-center pt-62 lg:pt-0">
          {/* Left Column */}
          <div className="flex flex-col space-y-5 sm:space-y-6 items-start text-left md:text-left">
            <span className="text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full w-fit border border-cyan-400/20">
              #1 Business Advisory Firm 
            </span>

            <h1 className="tracking-tight max-w-sm sm:max-w-xl font-sf-pro-headline">
              Recover – Hidden Profits Buried
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
                className="font-light leading-none">
                {" "}
                in Your Business.
              </span>
            </h1>

            <p className="text-[18px] leading-[140%] tracking-[0] text-[#FFFFFF80] max-w-sm sm:max-w-lg font-sf-pro">
              Cut invisible costs in shipping, merchant fees and payroll taxes — with{" "}
              <span className="font-bold text-white">3x–5x ROI guaranteed.</span>
            </p>

            <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
              <button
                className="text-white font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-[16px] shadow-lg text-sm sm:text-base cursor-pointer"
                style={{
                  background:
                    "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%), linear-gradient(0deg, #2CB59C, #2CB59C), linear-gradient(0deg, #4794EB, #4794EB)",
                  boxShadow:
                    "0px -8px 16px 0px #FFFFFF7A inset, 0px 6px 20px 0px #0000001A",
                }}>
                Launch Your Profit Recovery Audit
              </button>
            </a>
          </div>

          {/* Right Column (empty placeholder for now) */}
          <div className="relative flex justify-center items-center w-full"></div>
        </div>
      </div>


      {/* Feature Bar */}
      <div className="relative z-20  md:mt-40 w-full bg-transparent py-6 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-start justify-between space-y-0 md:space-y-0">
          {/* Feature 1 */}
          <div className="flex flex-row items-center justify-start space-x-4 text-left">
            <div className="mt-7">
              <img
                src="/hero1.png"
                alt="Hero Icon"
                className="w-20 h-20 object-contain"
              />
            </div>

            <div className="text-left">
              <p className="font-bold text-base sm:text-lg">All 50+ States</p>
              <p className="text-sm text-gray-400">Expanding Globally.</p>
            </div>
          </div>

          <div className="w-full md:w-px h-px md:h-10 bg-white/20 my-4 md:my-0" />

          {/* Feature 2 */}
          <div className="flex flex-row items-center justify-start space-x-4 text-left">
            <div className="mt-7">
              <img
                src="/hero2.png"
                alt="Hero Icon"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-base sm:text-lg">60+ Years</p>
              <p className="text-sm text-gray-400">of Combined Expertise.</p>
            </div>
          </div>

          <div className="w-full md:w-px h-px md:h-10 bg-white/20 my-4 md:my-0" />

          {/* Feature 3 */}
          <div className="flex flex-row items-center justify-start space-x-4 text-left">
            <div className="mt-7">
              <img
                src="/hero3.png"
                alt="Hero Icon"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-base sm:text-lg">500+ Businesses</p>
              <p className="text-sm text-gray-400">Trusted Partnerships.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
