import React from "react";
import {
  faChartLine,
  faCogs,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data for the 'Mission & Values' section, matching the image exactly.
const values = [
  {
    title: "Integrity Above All",
    text: "We lead with honesty and transparency — every recommendation, every dollar recovered, every relationship built.",
    align: "left",
  },
  {
    title: "Client-First Success",
    text: "Our clients' success defines ours. Every partnership starts with one goal — delivering measurable wins that strengthen their business.",
    align: "right",
  },
  {
    title: "Relationship First",
    text: "Relationships are everything. They're what enable FinServe360 — and our clients — to thrive.",
    align: "left",
  },
  {
  title: "Family Matters",
  text: "Family comes first — always. We believe the people you build with, at home and at work, are the foundation of every \n success.",
  align: "right",
},
];

const DifferenceAndValues = () => {
  return (
    <div className="bg-[#F7FCFC] w-full flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 space-y-12 md:space-y-16">
      {/* 'What Sets Us Apart' Section (Unchanged) */}
      <section
        className="w-full max-w-6xl text-white rounded-[30px] sm:rounded-[40px] shadow-xl p-6 sm:p-10 md:p-16 text-center flex flex-col items-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0D47A1 0%, #1E3A8A 35%, #2563EB 100%)",
        }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-block bg-white/10 border border-white/20 text-white text-xs md:text-sm font-medium px-5 py-1 rounded-full mb-5 sm:mb-6">
            What Sets Us Apart
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light italic mb-3 sm:mb-4">
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}>
              What Makes
            </span>{" "}
            <span className="not-italic font-bold">FinServe360 Different</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            We don't just consult — we collaborate. Every partnership starts
            with understanding your unique challenges and ends with measurable
            results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl mb-6 md:mb-8">
            {[
              {
                icon: faChartLine,
                title: "Data-Driven Insight.",
                desc: "We leverage advanced financial analytics to identify inefficiencies others overlook.",
              },
              {
                icon: faCogs,
                title: "Proven Process.",
                desc: "Our 4-step audit model uncovers 3x–5x ROI — or your deposit is 100% refunded.",
              },
              {
                icon: faHandshake,
                title: "Trusted Network.",
                desc: "Partnered with A+ rated carriers and industry-leading providers for complete confidence.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3 px-3 sm:px-0">
                <div className="border border-white/30 rounded-2xl p-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-white text-xl sm:text-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm max-w-[260px] leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
            <button
              className="mt-2 cursor-pointer px-6 sm:px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base"
              style={{
                background: "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%)",
                boxShadow: "inset 0 -6px 10px rgba(255,255,255,0.3)",
              }}>
              Launch Your Profit Recovery Audit
            </button>
          </a>

          <p className="text-white/70 text-xs mt-3">
            Takes less than 2 minutes to start.
          </p>
        </div>
      </section>

      {/* 'Our Mission & Values' Section */}
      <section
        className="w-full text-center relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{
          // Base grid background applied here
          backgroundImage:
            "linear-gradient(to right, rgba(147,197,253,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,197,253,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}>
        {/* Overlay for the gradient mask (20% fade top and bottom) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(147,197,253,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,197,253,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            // The background color of the main div is #F7FCFC, used here for the fade effect.
            background:
              "linear-gradient(to bottom, #F7FCFC 0%, transparent 20%, transparent 80%, #F7FCFC 100%)",
          }}></div>

        {/* Content wrapper with higher z-index so it's not affected by the mask */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <div
            className="inline-block text-blue-600 text-xs sm:text-sm font-medium px-4 sm:px-5 py-1 rounded-full mb-5 sm:mb-6 relative"
            style={{
              background:
                "linear-gradient(#EBF3FF, #EBF3FF) padding-box, linear-gradient(90deg, #4CA8FF, #41D1B7) border-box",
              border: "2px solid transparent",
            }}>
            What Drives Us
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 text-gray-900">
            Our Mission <span className="font-bold">&amp; Values</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed">
            To help businesses uncover hidden profits, strengthen margins, and
            scale with confidence — through smarter cost optimization and
            trusted partnerships that create lasting impact.
          </p>
        </div>

        {/* Card container with higher z-index, retaining exact card positioning */}
        <div className="relative z-10 flex flex-col items-center space-y-6 w-full max-w-4xl mx-auto pt-4">
          {values.map((item, i) => (
            <div
              key={i}
              className={`w-full flex ${item.align === "right"
                  ? "justify-end"
                  : "justify-start"
                }`}>
              <div
                className={`flex flex-col ${item.align === "right" ? "items-end" : "items-start"
                  } relative`}
                style={{ maxWidth: "500px", width: "100%" }}>
                {/* Bullet + Heading */}
                <div
                  className={`flex items-center gap-2 mb-3 ${item.align === "right" ? "flex-row-reverse" : ""
                    }`}>
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <div className="w-4 h-4 border-[2px] border-[#60A5FA] rounded-full flex items-center justify-center bg-white">
                      <div className="w-2 h-2 bg-[#60A5FA] rounded-full"></div>
                    </div>
                  </div>

                  <h3
                    className="font-semibold"
                    style={{
                      color: "#60A5FA",
                      fontSize: "15px",
                      letterSpacing: "0.01em",
                    }}>
                    {item.title}
                  </h3>
                </div>

                {/* Card - MODIFIED: Added hover effect and shadow */}
                <div
                  className={`transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-400/50 ${ // Hover effect and stronger shadow on hover
                    item.align === "right" ? "text-right" : "text-left"
                    } border`}
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5",
                    width: "100%",
                    padding: "20px 24px",
                    background: "#4794EB29",
                    border: "1px solid #4794EB80",
                    // Corner radius styles (kept exact)
                    borderTopRightRadius: item.align === "right" ? "0px" : "16px",
                    borderTopLeftRadius: item.align === "right" ? "16px" : "0px",
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px",

                    color: "#1E293B",
                    // Initial subtle shadow (added a blue glow)
                    boxShadow: "0 1px 3px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), 0 0 10px rgba(96, 165, 250, 0.4)", // Added subtle blue shadow
                  }}>
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DifferenceAndValues;