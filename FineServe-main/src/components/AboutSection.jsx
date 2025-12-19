import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full text-gray-800 bg-[#F7FCFC] overflow-hidden">
      <section id="about-section" className="bg-gradient-to-b from-[#3776BE] to-[#F7FCFC] flex flex-col items-center px-4 sm:px-6 md:px-20 py-12 md:py-16 text-center md:text-left">
        <br />
        <br />
        <br />
        <br />
        <div className="w-full max-w-6xl">
          {/* Tag */}
          <div className="inline-block bg-white/25 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full mb-5">
            Founded on Trust & Measurable Results
          </div>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light italic mb-4 leading-tight">
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: "100%",
              }}
            >
              About
            </span>{" "}
            <span className="not-italic font-bold">Finserve360</span>
          </h1>

          <p className="text-white text-base sm:text-lg leading-relaxed max-w-2xl mb-8 mx-auto md:mx-0">
            We help businesses uncover invisible costs, improve operational
            efficiency, and unlock new profit potential through data-driven
            financial strategies.
          </p>

          <div className="w-full flex justify-center md:justify-start">
            <img
              src="/about.jpg"
              alt="Team"
              className="rounded-xl shadow-lg w-full md:w-[1180px] h-48 sm:h-64 md:h-[384px] object-cover"
              style={{
                borderRadius: "16px",
                opacity: "1",
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7FCFC] text-center py-10 px-4">
        <p
          className="max-w-xl sm:max-w-2xl mx-auto text-lg sm:text-[22px] text-gray-700 italic leading-snug"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          “Behind every recovered dollar is a story of strategy, trust, and
          transformation.”
        </p>
      </section>

      <section className="bg-[#F7FCFC] max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="text-center md:text-left">
          {/* Tag */}
          <div
            className="inline-block mb-3 rounded-[24px] border px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-[#4CA8FFF0] border-2"
            style={{
              background:
                "linear-gradient(83.71deg, #EBF3FF 16.3%, rgba(235, 243, 255, 0.1) 83.7%)",
              boxShadow: "0px 0px 12px 0px #4CA8FF14",
              backdropFilter: "blur(50px)",
              borderWidth: "1px",
              borderColor: "#4CA8FF",
              borderRadius: "24px",
              borderStyle: "solid",
            }}
          >
            Our Story
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Built to Help
            </span>
            <br />
            <span className="text-black font-bold">Businesses Thrive Smarter</span>
          </h2>

          <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
            <button
              className="text-white cursor-pointer font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-[16px] shadow-lg text-sm sm:text-base"
              style={{
                background:
                  "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%), linear-gradient(0deg, #2CB59C, #2CB59C), linear-gradient(0deg, #4794EB, #4794EB)",
                boxShadow:
                  "0px -8px 16px 0px #FFFFFF7A inset, 0px 6px 20px 0px #0000001A",
              }}
            >
              Start Your Profit Recovery Audit
            </button>
          </a>
        </div>

        <div className="space-y-5 text-sm sm:text-base text-gray-600 leading-relaxed text-center md:text-left">
          <p>
            FinServe360 was founded on a simple truth — most businesses lose
            money they don’t even know they’re losing. Hidden inefficiencies in
            payroll, shipping, and merchant fees quietly eat into profits every
            single day.
          </p>
          <p>
            With over 60 years of combined experience across finance, logistics,
            and operational strategy, our founders set out to change that. By
            combining deep industry knowledge with cutting-edge financial
            solutions, we’ve built a proven model that finds, fixes, and frees
            your hidden profits.
          </p>
          <p>
            Today, we partner with clients nationwide — from small business
            owners to enterprise-level operations — recovering millions through
            transparent, data-driven strategies that strengthen the bottom line.
          </p>
        </div>
      </section>

      <section className="bg-[#F7FCFC] max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-1 md:order-none">
          <img
            src="assets/founder.png"
            alt="Founder"
            className="rounded-2xl shadow-lg object-cover w-full max-h-[400px] sm:max-h-[500px]"
          />
        </div>

        <div className="text-center md:text-left">
          <div
            className="inline-block mb-3 rounded-[24px] border px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-[#4CA8FFF0] border-2"
            style={{
              background:
                "linear-gradient(83.71deg, #EBF3FF 16.3%, rgba(235, 243, 255, 0.1) 83.7%)",
              boxShadow: "0px 0px 12px 0px #4CA8FF14",
              backdropFilter: "blur(50px)",
              borderWidth: "1px",
              borderColor: "#4CA8FF",
              borderRadius: "24px",
              borderStyle: "solid",
            }}
          >
            Meet Our Founder
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Meet Our <br />
            <span className="text-black font-bold">Founder</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
            Colin Smith founded FinServe360 with a mission to expose what many
            businesses can’t see — the hidden costs that silently erode their
            profits. With over two decades of experience in finance, merchant
            services, and logistics, Colin realized traditional audits often
            missed the invisible inefficiencies.
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
            Driven by transparency, integrity, and results, he built FinServe360
            not to just consult, but deliver — ensuring every client recovers
            every dollar they deserve.
          </p>

          <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
            <button
              className="text-white cursor-pointer font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-[16px] shadow-lg text-sm sm:text-base"
              style={{
                background:
                  "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%), linear-gradient(0deg, #2CB59C, #2CB59C), linear-gradient(0deg, #4794EB, #4794EB)",
                boxShadow:
                  "0px -8px 16px 0px #FFFFFF7A inset, 0px 6px 20px 0px #0000001A",
              }}
            >
              Start Your Profit Recovery Audit
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
