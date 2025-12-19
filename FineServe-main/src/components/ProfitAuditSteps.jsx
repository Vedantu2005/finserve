import React, { useState, useEffect } from "react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "Clients secure their audit with a 100% fully refundable deposit.",
  },
  {
    id: 2,
    title: "Analysis",
    description:
      "We audit your existing spend to uncover inefficiencies in desired areas discussed like shipping, merchant fees, payroll taxes, etc.",
  },
  {
    id: 3,
    title: "Results",
    description:
      "3x–5x ROI of savings Guaranteed – or 100% of deposit refunded.",
  },
  {
    id: 4,
    title: "Implement",
    description:
      "Clients onboard within 3–4 weeks to begin realizing savings immediately.",
  },
];

const ProfitAuditSteps = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const totalSteps = steps.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev % totalSteps) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSteps]);

  const primaryBlue = "#000000ff";
  const lightBgColor = "#F7FCFC";
  const darkTextColor = "#1C2C40";
  const activeGradient =
    "linear-gradient(86.27deg, #003182 2.68%, #00E9CD 94.3%)";
  const activeTextColor = "white";

  const stepHeight = 150;
  const gapHeight = 24;
  const boxHeight = stepHeight + gapHeight;
  const sliderTrackTotalHeight =
    totalSteps * stepHeight + (totalSteps - 1) * gapHeight;
  const activeSliderTopOffset = (activeIndex - 1) * boxHeight;
  const stepCardInnerStyle = { height: `${stepHeight}px` };

  return (
    <section
      className="py-10 px-4 sm:px-8 lg:px-16 flex justify-center -mt-20 lg:mt-0"
      style={{ backgroundColor: lightBgColor, fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl w-full">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE — ILLUSTRATION */}
          <div className="flex justify-center items-center p-4 order-1">
            <img
              src="/assets/Search.png"
              alt="Illustration of a magnifying glass over a financial document with dollar signs, representing an audit"
              className="w-full max-w-lg h-auto"
              style={{
                filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))",
              }}
            />
          </div>

          {/* RIGHT SIDE — HEADINGS + STEPS */}
          <div className="order-2 space-y-10">
            {/* Heading Section */}
            <div className="text-left">
              <p
                className="inline-block px-4 py-1 mb-3 rounded-full text-sm font-semibold border"
                style={{ color: primaryBlue, borderColor: primaryBlue }}
              >
                How It Works
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
                <span
                  style={{
                    fontFamily: "Instrument Serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "42px",
                    lineHeight: "48px",
                    color: darkTextColor,
                  }}
                >
                  Your
                </span>{" "}
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 700,
                    fontStyle: "bold",
                    fontSize: "42px",
                    lineHeight: "48px",
                    color: darkTextColor,
                  }}
                >
                  Profit Recovery Audit
                </span>
                <span className="block mt-1">
                  <span
                    style={{
                      fontFamily: "Instrument Serif",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "42px",
                      lineHeight: "48px",
                      color: darkTextColor,
                    }}
                  >
                    in
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "SF Pro",
                      fontWeight: 700,
                      fontStyle: "bold",
                      fontSize: "42px",
                      lineHeight: "48px",
                      color: darkTextColor,
                    }}
                  >
                    4 Simple Steps
                  </span>
                </span>
              </h1>

            </div>

            {/* Steps with Slider */}
            <div className="flex space-x-6">
              {/* Vertical Slider Track */}
              <div
                className="flex flex-col justify-start items-center relative"
                style={{ height: `${sliderTrackTotalHeight}px` }}
              >
                {/* Base Slider */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-2 rounded-full"
                  style={{
                    height: "100%",
                    backgroundColor: "#619EE640",
                    zIndex: 1,
                  }}
                />
                {/* Active Slider */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    height: `${stepHeight}px`,
                    backgroundColor: "#4794EB",
                    top: `${activeSliderTopOffset}px`,
                    zIndex: 2,
                    boxShadow: "0 0 10px rgba(71, 148, 235, 0.8)",
                  }}
                />
              </div>

              {/* Steps List */}
              <div className="space-y-6 flex-1">
                {steps.map((step) => {
                  const isActive = step.id === activeIndex;
                  return (
                    <div
                      key={step.id}
                      className="rounded-xl p-6 sm:p-8 transition-all duration-300 shadow-md"
                      style={{
                        ...stepCardInnerStyle,
                        background: isActive ? activeGradient : "white",
                        color: isActive ? activeTextColor : darkTextColor,
                        boxShadow: isActive
                          ? "0 8px 15px rgba(0, 49, 130, 0.4)"
                          : "0 4px 10px rgba(0, 0, 0, 0.05)",
                        border: isActive ? "none" : "1px solid #E9F3FA",
                      }}
                    >
                      <h2
                        className="text-xl sm:text-2xl font-bold mb-2"
                        style={{
                          color: isActive ? activeTextColor : primaryBlue,
                        }}
                      >
                        {step.title}
                      </h2>
                      <p
                        className="text-base font-medium leading-relaxed"
                        style={{
                          color: isActive ? "white" : "gray",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitAuditSteps;
