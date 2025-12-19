import { useState, useEffect } from "react";
import {
  FaLinkedinIn,
} from "react-icons/fa";
import {
  Truck,
  HandCoins,
  CreditCard,
  Wallet,
  Landmark, // 👉 icon for Funding
} from "lucide-react";

const ChevronDown = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_HEIGHT_CSS = "72px";

  // Scroll background logic
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight || 400;
      setScrolled(window.scrollY > heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#3776BE]" : ""
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(180deg, #3776BE 100%, #1E3A8A 100%)"
          : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo + Hamburger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
          <img
            src="assets/logo.png"
            alt="logo"
            className="h-10 sm:h-11 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 text-white font-medium flex-1">
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/profit" className="hover:text-gray-200">
            Profit Recovery Audit
          </a>

          {/* Services Dropdown (Desktop) */}
          <div className="relative group">
            <button
              onClick={() => (window.location.href = "/service")}
              className="flex items-center space-x-1 hover:text-white"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 mt-2 w-64 bg-[#071829] rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 shadow-xl z-50 p-1">
              <div className="divide-y divide-gray-700/50 text-gray-200">
                <a href="/shipingLogistics" className="flex items-center gap-3 px-3 py-3 hover:bg-gray-800/50 rounded-md">
                  <Truck className="w-5 h-5 text-blue-400" />
                  Shipping & Logistics
                </a>
                <a href="/payroll" className="flex items-center gap-3 px-3 py-3 hover:bg-gray-800/50 rounded-md">
                  <HandCoins className="w-5 h-5 text-blue-400" />
                  Payroll Tax Savings
                </a>
                <a href="/merchentProcessing" className="flex items-center gap-3 px-3 py-3 hover:bg-gray-800/50 rounded-md">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                  Merchant Processing
                </a>
                <a href="/consumerFinance" className="flex items-center gap-3 px-3 py-3 hover:bg-gray-800/50 rounded-md">
                  <Wallet className="w-5 h-5 text-blue-400" />
                  Consumer Financing
                </a>

                {/* ✅ NEW FUNDING OPTION */}
                <a href="/funding" className="flex items-center gap-3 px-3 py-3 hover:bg-gray-800/50 rounded-md">
                  <Landmark className="w-5 h-5 text-blue-400" />
                  Business Funding
                </a>
              </div>
            </div>
          </div>

          <a href="/refral" className="hover:text-gray-200">Referral</a>
          <a href="/article" className="hover:text-gray-200">Articles</a>
        </div>

        {/* CTA */}
        <button
          onClick={() =>
            (window.location.href =
              "https://calendly.com/colin-finserve360/virtual-coffee-15min")
          }
          className="bg-[#6BA9EF] text-white px-4 lg:px-5 py-2 rounded-md shadow hover:bg-[#5A8FD3] transition"
        >
          Book a Call
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{ top: NAV_HEIGHT_CSS }}
          className="fixed left-0 right-0 bottom-0 bg-[#071829]/95 backdrop-blur-lg text-white px-6 py-6 md:hidden z-40 overflow-y-auto h-[calc(100vh-72px)]"
        >
          <div className="space-y-6 text-lg font-medium">
            <a href="/about" className="block border-b border-[#2F3F4F] pb-2">
              About
            </a>
            <a href="/profit" className="block border-b border-[#2F3F4F] pb-2">
              Profit Recovery Audit
            </a>

            {/* Services (Mobile) */}
            <div>
              <div className="flex items-center justify-between border-b border-[#2F3F4F] pb-2">
                <a href="/service" className="flex-1">Services</a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setServicesOpen(!servicesOpen);
                  }}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {servicesOpen && (
                <div className="mt-3 ml-2 bg-[#0B1F33] rounded-md p-2 space-y-2">
                  <a href="/shipingLogistics" className="block px-3 py-2 rounded hover:bg-[#102C48]">
                    Shipping & Logistics
                  </a>
                  <a href="/payroll" className="block px-3 py-2 rounded hover:bg-[#102C48]">
                    Payroll Tax Savings
                  </a>
                  <a href="/merchentProcessing" className="block px-3 py-2 rounded hover:bg-[#102C48]">
                    Merchant Processing
                  </a>
                  <a href="/consumerFinance" className="block px-3 py-2 rounded hover:bg-[#102C48]">
                    Consumer Financing
                  </a>

                  {/* ✅ NEW FUNDING OPTION */}
                  <a href="/funding" className="block px-3 py-2 rounded hover:bg-[#102C48]">
                    Business Funding
                  </a>
                </div>
              )}
            </div>

            <a href="/refral" className="block border-b border-[#2F3F4F] pb-2">
              Referral
            </a>
            <a href="/article" className="block border-b border-[#2F3F4F] pb-2">
              Articles
            </a>
          </div>

          {/* Social */}
          <div className="flex justify-center mt-6 pt-4 border-t border-[#2F3F4F]">
            <a
              href="https://www.linkedin.com/company/finserve360/"
              className="border p-3 rounded-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
