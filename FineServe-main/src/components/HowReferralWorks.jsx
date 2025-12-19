import React, { useState, useEffect } from "react";

export default function HowReferralWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-white py-20 px-6 relative overflow-hidden">
      {/* Subtle grid background with gradient mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 200, 200, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)",
        }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-medium border border-blue-200">
              Simple & Rewarding Partnership
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900">
            {" "}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: "100%",
              }}>
              How
            </span>{" "}
            Our Referral Program{" "}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: "100%",
              }}>
              Works
            </span>
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Blue Line with Gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 transform -translate-x-1/2 rounded-full overflow-hidden">
            {/* Base gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#619EE6] to-[#619EE600]"></div>

            {/* Animated progress overlay */}
            <div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-400 to-[#4794EB] transition-all duration-1000 ease-in-out"
              style={{
                height: `${((activeStep + 1) / 3) * 100}%`,
              }}></div>
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {/* Step 1 - Left side */}
            <div className="relative flex items-center justify-between">
              <div
                className={`w-5/12 text-right pr-8 transition-all duration-700 ${
                  activeStep === 0
                    ? "opacity-100 scale-100"
                    : "opacity-60 scale-95"
                }`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Make an Introduction
                </h3>
                <p className="text-gray-600">
                  Refer a business that could benefit from FinServe360’s
                  solutions.
                </p>
              </div>

              <div className="w-2/12 flex justify-center relative z-10">
                <div className="w-1 h-20 bg-transparent"></div>
              </div>

              <div
                className={`w-5/12 pl-8 transition-all duration-700 ${
                  activeStep === 0 ? "opacity-100" : "opacity-60"
                }`}>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium text-lg">
                    Step
                  </span>
                  <div
                    className={`transition-all duration-500 ${
                      activeStep === 0
                        ? "w-14 h-14 bg-[#4794EB] shadow-lg shadow-blue-300/50"
                        : "w-12 h-12 bg-blue-300"
                    } rounded-full flex items-center justify-center relative`}>
                    <span className="text-white font-bold text-xl">1</span>
                    {activeStep === 0 && (
                      <span className="absolute inset-0 rounded-full bg-blue-300 animate-ping opacity-40"></span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Right side */}
            <div className="relative flex items-center justify-between">
              <div
                className={`w-5/12 text-right pr-8 transition-all duration-700 ${
                  activeStep === 1 ? "opacity-100" : "opacity-60"
                }`}>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-gray-500 font-medium text-lg">
                    Step
                  </span>
                  <div
                    className={`transition-all duration-500 ${
                      activeStep === 1
                        ? "w-14 h-14 bg-[#4794EB] shadow-lg shadow-blue-400/50"
                        : activeStep > 1
                        ? "w-12 h-12 bg-blue-400"
                        : "w-12 h-12 bg-blue-300"
                    } rounded-full flex items-center justify-center relative`}>
                    <span className="text-white font-bold text-xl">2</span>
                    {activeStep === 1 && (
                      <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40"></span>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-2/12 flex justify-center relative z-10">
                <div className="w-1 h-20 bg-transparent"></div>
              </div>

              <div
                className={`w-5/12 pl-8 transition-all duration-700 ${
                  activeStep === 1
                    ? "opacity-100 scale-100"
                    : "opacity-60 scale-95"
                }`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  We Audit Their Spend{" "}
                </h3>
                <p className="text-gray-600">
                  Our team conducts a full Profit Recovery Audit to uncover
                  invisible costs and optimize operations.
                </p>
              </div>
            </div>

            {/* Step 3 - Left side */}
            <div className="relative flex items-center justify-between">
              <div
                className={`w-5/12 text-right pr-8 transition-all duration-700 ${
                  activeStep === 2
                    ? "opacity-100 scale-100"
                    : "opacity-60 scale-95"
                }`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  You Earn Rewards{" "}
                </h3>
                <p className="text-gray-600">
                  Once the business engages with our program, you earn your
                  referral commission — directly and transparently.
                </p>
              </div>

              <div className="w-2/12 flex justify-center relative z-10">
                <div className="w-1 h-20 bg-transparent"></div>
              </div>

              <div
                className={`w-5/12 pl-8 transition-all duration-700 ${
                  activeStep === 2 ? "opacity-100" : "opacity-60"
                }`}>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium text-lg">
                    Step
                  </span>
                  <div
                    className={`transition-all duration-500 ${
                      activeStep === 2
                        ? "w-14 h-14 bg-[#4794EB] shadow-lg shadow-blue-500/50"
                        : "w-12 h-12 bg-blue-300"
                    } rounded-full flex items-center justify-center relative`}>
                    <span className="text-white font-bold text-xl">3</span>
                    {activeStep === 2 && (
                      <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-40"></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
