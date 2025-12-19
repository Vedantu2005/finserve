import React from "react";

export default function FundingPage() {
  const gradientTextStyle = {
    background: "linear-gradient(90deg, #062765 0%, #61E6CD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const cardBgStyle = {
    background: "radial-gradient(circle at center, white 40%, #2cb59c29 120%)",
    border: "5px solid white",
    boxShadow:
      "0 0 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.2)",
  };

  return (
    <div className="w-full bg-white">

      {/* ===================== STATS SECTION ===================== */}
      <section className="py-24 px-6 bg-[#F6FAFF]">
        <h2 className="text-center text-4xl font-semibold mb-16 text-[#0B2A4A]">
          Funding by the Numbers
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {[
            {
              value: "$700M+",
              label: "Total Capital Deployed",
              date: "In the last 9 months",
            },
            {
              value: "1100+",
              label: "Businesses Funded",
              date: "As of 01/01/2025",
            },
            {
              value: "50+",
              label: "Industries Served",
              date: "As of 10/01/2024",
            },
            {
              value: "24–48 Hrs",
              label: "Average Funding Time",
              date: "Fast Approvals",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={cardBgStyle}
              className="rounded-3xl p-10 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <h3
                className="text-4xl font-bold mb-4"
                style={gradientTextStyle}
              >
                {item.value}
              </h3>
              <p className="text-sm tracking-wide uppercase text-[#0B2A4A] font-medium">
                {item.label}
              </p>
              <p className="text-xs mt-2 text-[#1F3B63] opacity-80">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CONTENT SECTION ===================== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">

          {[
            {
              title:
                "Flexible funding solutions for mid-sized businesses beyond traditional banking",
              desc:
                "We deliver non-bank capital solutions including revenue-based financing and alternative funding structures that remove the friction of traditional lending and enable scalable growth.",
            },
            {
              title:
                "Custom financing across industries with speed, transparency, and control",
              desc:
                "Our industry-agnostic funding solutions serve manufacturing, healthcare, technology, and professional services—designed to meet operational needs without restrictive covenants.",
            },
            {
              title:
                "Hands-on funding partnerships aligned with long-term business strategy",
              desc:
                "We take a white-glove, consultative approach—working directly with leadership teams to structure capital that supports growth, preserves cash flow, and aligns with long-term objectives.",
            },
            {
              title:
                "Expert-led capital deployment that strengthens businesses and communities",
              desc:
                "Our team combines financial expertise with a commitment to positive economic impact, delivering capital that empowers businesses to create jobs and generate value beyond the balance sheet.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-[#F6FAFF] rounded-2xl p-10 shadow-sm"
            >
              <div className="relative pl-6">
                <span className="absolute left-0 top-1 h-full w-1 bg-gradient-to-b from-[#062765] to-[#61E6CD] rounded-full"></span>
                <h3 className="text-3xl font-serif text-[#0B2A4A]">
                  {item.title}
                </h3>
              </div>

              <p className="text-lg text-[#1F3B63] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#062765] to-[#0E8BC9]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h3 className="text-4xl font-semibold mb-6">
            Ready to Explore Funding Options?
          </h3>
          <p className="text-lg opacity-90 mb-8">
            Access flexible capital solutions without the constraints of
            traditional financing.
          </p>
          <a href="https://calendly.com/colin-finserve360/virtual-coffee-15min">
            <button className="bg-white text-[#062765] font-semibold px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition">
              Schedule a Funding Consultation
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}
