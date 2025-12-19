// LetsConnect.jsx
import React from "react";

const LetsConnect = () => {
  return (
    <div className="flex flex-col items-center px-2 py-10 mb-10 text-center">
      <div
        className="inline-block text-[#2563EB] text-xs sm:text-sm font-medium px-4 sm:px-5 py-1 rounded-full mb-4 sm:mb-5"
        style={{
          background:
            "linear-gradient(#E7F0FF, #E7F0FF) padding-box, linear-gradient(90deg, #4CA8FF, #41D1B7) border-box",
          border: "1.5px solid transparent",
        }}>
        Ready to Unlock Hidden Profits?
      </div>

      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#0F172A] mb-2 sm:mb-3 leading-snug">
        Have a Business in Mind? Let’s Connect.
      </h2>

      <p className="text-[#475569] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed font-bold">
        Every referral helps a business recover profits and grow stronger —
        while rewarding you for making the connection.
      </p>

      <a href="https://calendly.com/colin-finserve360/virtual-coffee-15min">
        <button
          className="px-6 sm:px-8 py-3 rounded-xl font-semibold text-white text-sm sm:text-base shadow-lg transition-transform hover:scale-105"
          style={{
            background: "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%)",
            boxShadow: "0 10px 20px rgba(65,209,183,0.3)",
          }}>
          Make an Introduction Now{" "}
        </button>
      </a>

    </div>
  );
};

export default LetsConnect;
