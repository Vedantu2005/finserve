import React, { useState, useEffect } from "react";

// --- Testimonial Data ---
const testimonialsData = [
  {
    id: 1,
    quote: "Employee retention has increased 46% over the last 7 months.",
    name: "Nancy Von",
    title: "HR Director",
    image: "/assets/Young-woman.webp",
  },
  {
    id: 2,
    quote:
      "FinServe360 provides a game-changing solution that allows us to offer essential healthcare benefits to our frontline associates at zero net cost to them. This not only enhances retention and sets us apart but also ensures our team has access to vital telehealth services, hospital indemnity, and more—benefits they might not otherwise afford.",
    name: "Joe Hempel",
    title: "President",
    image: "/assets/JoeHempel.png",
  },
  {
    id: 3,
    quote:
      "Thanks to FinServe360, our employees get an additional $1500 annually and gained access to robust healthcare benefits for $0 out of pocket",
    name: "Annie Monson",
    title: "Owner",
    image: "/assets/Young-woman2.webp",
  },
];

// Main App component
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Index starts at 0
  const activeTestimonial = testimonialsData[activeIndex];
  const totalTestimonials = testimonialsData.length;

  // --- Auto-Scrolling Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000); // Change testimonial every 5 seconds (5000ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalTestimonials]);

  // --- Manual Navigation Handlers ---
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  return (
    <div className="min-h-screen bg-white py-12 sm:py-24 font-inter">
      {/* Testimonial Section Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content Column (UNCHANGED) */}
          <div className="mb-10 lg:mb-0">
            {/* Tag */}
            <span className="text-xs sm:text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 px-4 py-1.5 rounded-full inline-block tracking-wider uppercase">
              What Our Clients Say
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-5 leading-snug">
              Trusted{" "}
              <span               style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: "100%",
              }}>by</span>{" "}
              Executives & Business Owners Nationwide
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-lg">
              Real results from real people,{" "}
              <strong className="font-semibold text-gray-800">
                entrepreneurs
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-gray-800">leaders</strong>{" "}
              who've uncovered hidden profits with FinServe360.
            </p>
          </div>

          {/* Right Testimonial Card (MODIFIED to be dynamic) */}
          <div className="relative p-6 sm:p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[350px]">
            {/* Transition Wrapper for fade effect */}
            <div className="transition-opacity duration-700 ease-in-out opacity-100"> 
              {/* Quotation Mark Icon */}
              <svg
                width="37"
                height="25"
                viewBox="0 0 37 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-200 mb-6">
                <path
                  d="M28.3772 14.2411L29.4136 14.217C40.7664 14.0242 36.9821 -2.65607 24.8339 1.75502C15.8674 5.00911 17.5306 19.9779 27.1238 22.4365C31.366 23.5212 36.0903 22.7499 32.5712 21.5447C29.5582 20.5323 27.1238 17.6158 27.2925 15.2294C27.3407 14.6992 27.7987 14.2411 28.3772 14.2411Z"
                  fill="#4794EB"
                  fillOpacity="0.25"
                  style={{ fill: "#4794EB", fillOpacity: "0.25" }}
                />
                <path
                  d="M6.22451 1.15319C-4.6944 5.34734 -0.259362 23.6667 11.8647 24.4621C15.0223 24.6791 15.8418 23.9318 13.4556 23.04C11.1416 22.1722 8.2251 18.0745 7.91175 15.3025C7.83944 14.7481 8.27326 14.2901 8.82764 14.2901C12.0093 14.2901 13.335 14.2901 15.191 11.7351C19.7466 5.41975 13.6966 -1.71523 6.22451 1.15319Z"
                  fill="#4794EB"
                  fillOpacity="0.25"
                  style={{ fill: "#4794EB", fillOpacity: "0.25" }}
                />
              </svg>

              {/* Dynamic Testimonial Text */}
              <p className="text-lg sm:text-xl italic font-medium text-gray-800 leading-relaxed">
                "{activeTestimonial.quote}"
              </p>

              {/* Separator Line */}
              <div className="w-1/4 h-1 bg-blue-400 my-8 rounded-full"></div>

              {/* Dynamic Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* Dynamic Avatar Image */}
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-14 h-14 object-cover rounded-full ring-4 ring-blue-100 mr-4 shadow-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/56x56/A0BFFF/FFFFFF?text=" +
                        activeTestimonial.name.split(" ").map(n => n[0]).join(''); // Placeholder with initials
                    }}
                  />
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {activeTestimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activeTestimonial.title}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows (MODIFIED to use handlers) */}
                <div className="flex space-x-3">
                  {/* Previous Button */}
                  <button
                    aria-label="Previous Testimonial"
                    onClick={handlePrev}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-500 transition duration-150 shadow-sm">
                    {/* Lucide icon: ChevronLeft */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    aria-label="Next Testimonial"
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-600 transition duration-150">
                    {/* Lucide icon: ChevronRight */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;