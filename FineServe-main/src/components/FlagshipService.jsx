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

const FlagshipService = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full text-white overflow-hidden flex flex-col items-center justify-center py-20 sm:py-24 lg:px-24 -mt-1">
      <style>{styleSheet}</style>

      <div className="relative z-10 mt-35 lg:mt-55 flex flex-1 items-center justify-center w-full">
        <div className="container mx-auto px-5 sm:px-8 pt-10 pb-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-12 items-center pt-62 lg:pt-0">
          {/* Left Column */}
          <div className="flex flex-col space-y-5 sm:space-y-6 items-start text-left md:text-left">
            <span className="text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full w-fit border border-cyan-400/20">
              Flagship Service
            </span>

            <h1 className="tracking-tight max-w-sm sm:max-w-xl font-sf-pro-headline">
              Profit Recovery<br /> Audit
            </h1>

            <p className="text-[18px] leading-[140%] tracking-[0] text-[#FFFFFF80] max-w-sm sm:max-w-lg font-sf-pro">
              <span className="font-extrabold text-white">
                3×-5× ROI Guaranteed — or Your Money Back
              </span><br />
              Uncover & recover hidden profits lost in shipping, merchant fees, and payroll — in as little as 14 days.
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

            <p className="text-sm sm:text-base text-gray-300 max-w-sm sm:max-w-md font-sf-pro-body -mt-2 lg:-mt-5">
              <span className="font-normal text-white">
                Zero risk. 100% transparency. Guaranteed ROI.
              </span><br />
            </p>
          </div>

          {/* Right Column (empty placeholder for now) */}
          <div className="relative flex justify-center items-center w-full"></div>
        </div>
      </div>

      


    </section>
  );
};

export default FlagshipService;
