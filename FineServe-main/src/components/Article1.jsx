import React from "react";

export default function Article1() {
  return (
    <div className="bg-gradient-to-b from-[#3776BE] to-white py-20 pt-35 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col mb-16">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
              Founded on Trust & Measurable Results
            </span>
          </div>

          {/* Title with Dashed Border */}
          <div className="w-[80%] flex inline-block">
            <h2 className="text-6xl text-center font-bold text-white mb-3">
              Insights & Resources
            </h2>
            <p className="text-white/90 text-center text-[18px]">
              short blurb about what readers will get (industry insight, tips,
              case studies)
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-10 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-4">
                  Latest Insight
                </p>
                <a href="article/55Sq3GE5VRjX1xwaIHPS">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Uncovering Hidden Costs in Your Business
                  </h3>
                </a>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Profitability in any organization is defined as much by what a company keeps as by what it brings in through sales. While major line items like rent, payroll, and raw materials are easily tracked on a....
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>By Colin</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Merchant Processing</span>
                </div>
                <a href="article/55Sq3GE5VRjX1xwaIHPS">
                <button className="text-gray-900 hover:text-blue-600 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </button>
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-4">18 Aug 2025</p>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[400px]">
              <img
                src="/person.png"
                alt="Business meeting in conference room"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
