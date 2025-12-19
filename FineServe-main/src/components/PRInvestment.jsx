import React from "react";

// --- Icon components ---

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      opacity="0.2"
      d="M27 7V14C27 26 16 29 16 29C16 29 5 26 5 14V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H26C26.2652 6 26.5196 6.10536 26.7071 6.29289C26.8946 6.48043 27 6.73478 27 7Z"
      fill="#4794EB"
    />

    <path
      d="M26 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V14C4 20.59 7.19 24.5838 9.86625 26.7738C12.7487 29.1313 15.6163 29.9313 15.7413 29.965C15.9131 30.0118 16.0944 30.0118 16.2663 29.965C16.3913 29.9313 19.255 29.1313 22.1413 26.7738C24.81 24.5838 28 20.59 28 14V7C28 6.46957 27.7893 5.96086 27.4142 5.58579C27.0391 5.21071 26.5304 5 26 5ZM26 14C26 18.6338 24.2925 22.395 20.925 25.1775C19.4591 26.3846 17.7919 27.324 16 27.9525C14.2315 27.335 12.5849 26.4123 11.135 25.2263C7.7275 22.4388 6 18.6625 6 14V7H26V14ZM10.2925 17.7075C10.1049 17.5199 9.99944 17.2654 9.99944 17C9.99944 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075Z"
      fill="#4794EB"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M24 14C24 15.9778 23.4135 17.9112 22.3147 19.5557C21.2159 21.2002 19.6541 22.4819 17.8268 23.2388C15.9996 23.9957 13.9889 24.1937 12.0491 23.8079C10.1093 23.422 8.32746 22.4696 6.92894 21.0711C5.53041 19.6725 4.578 17.8907 4.19215 15.9509C3.8063 14.0111 4.00433 12.0004 4.76121 10.1732C5.51809 8.3459 6.79981 6.78412 8.4443 5.6853C10.0888 4.58649 12.0222 4 14 4C15.3132 4 16.6136 4.25866 17.8268 4.7612C19.0401 5.26375 20.1425 6.00035 21.0711 6.92893C21.9997 7.85752 22.7363 8.95991 23.2388 10.1732C23.7413 11.3864 24 12.6868 24 14Z"
      fill="#4794EB"
      style={{ fill: "#4794EB", fillOpacity: 1 }}
    />

    <path
      d="M28.7075 27.2925L22.45 21.035C24.2672 18.8556 25.1742 16.0594 24.9823 13.2282C24.7904 10.397 23.5144 7.74882 21.4197 5.83451C19.3249 3.92021 16.5728 2.88719 13.7359 2.95037C10.8989 3.01354 8.19547 4.16805 6.18804 6.1737C4.18061 8.17936 3.02372 10.8817 2.95804 13.7187C2.89235 16.5556 3.92294 19.3086 5.83539 21.405C7.74785 23.5014 10.3949 24.7798 13.2259 24.9742C16.0569 25.1686 18.8539 24.2641 21.035 22.4488L27.2925 28.7075C27.3854 28.8004 27.4957 28.8741 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8741 28.6146 28.8004 28.7075 28.7075ZM5 14C5 12.22 5.52784 10.4799 6.51677 8.99991C7.5057 7.51986 8.91131 6.36631 10.5558 5.68512C12.2004 5.00393 14.01 4.8257 15.7558 5.17297C17.5016 5.52024 19.1053 6.3774 20.364 7.63608C21.6226 8.89475 22.4798 10.4984 22.8271 12.2442C23.1743 13.9901 22.9961 15.7997 22.3149 17.4442C21.6337 19.0887 20.4802 20.4943 19.0001 21.4833C17.5201 22.4722 15.78 23 14 23C11.6139 22.9974 9.32621 22.0483 7.63896 20.3611C5.95171 18.6738 5.00264 16.3862 5 14Z"
      fill="#4794EB"
      style={{ fill: "#4794EB", fillOpacity: 1 }}
    />
  </svg>
);

const WrenchIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M23.0003 15V22.7062C23.0002 22.9711 22.895 23.2251 22.7078 23.4125L18.4141 27.7062C18.2827 27.8373 18.1174 27.9293 17.9367 27.9718C17.7561 28.0143 17.5671 28.0057 17.3911 27.9469C17.215 27.8881 17.0588 27.7815 16.9399 27.639C16.821 27.4965 16.7441 27.3237 16.7178 27.14L16.0003 22L23.0003 15ZM17.0003 9H9.29407C9.02921 9.00012 8.77521 9.10532 8.58782 9.2925L4.29407 13.5863C4.16298 13.7176 4.07103 13.8829 4.02853 14.0636C3.98602 14.2442 3.99464 14.4332 4.05341 14.6092C4.11218 14.7853 4.21878 14.9415 4.36129 15.0604C4.5038 15.1793 4.67659 15.2562 4.86032 15.2825L10.0003 16L17.0003 9ZM5.00032 27C9.70657 27 11.3366 24.5388 11.8203 23.4775L8.52282 20.18C7.46157 20.6638 5.00032 22.2937 5.00032 27Z"
      fill="#4794EB"
      style={{ fill: "#4794EB", fillOpacity: 1 }}
    />

    <path
      d="M27.981 5.89001C27.9514 5.40242 27.7443 4.94253 27.3989 4.59712C27.0535 4.2517 26.5936 4.04464 26.106 4.01501C24.5335 3.92126 20.5147 4.06501 17.1797 7.39876L16.586 8.00001H9.29475C9.03109 7.99853 8.76978 8.04948 8.526 8.14991C8.28222 8.25034 8.06084 8.39824 7.87474 8.58501L3.58724 12.875C3.3243 13.1378 3.1398 13.4686 3.05443 13.8304C2.96906 14.1922 2.98621 14.5706 3.10396 14.9232C3.2217 15.2758 3.43538 15.5886 3.72102 15.8265C4.00665 16.0644 4.35293 16.218 4.72099 16.27L9.52975 16.9413L15.056 22.4675L15.7272 27.2788C15.7789 27.6469 15.9324 27.9932 16.1705 28.2786C16.4087 28.5639 16.7219 28.777 17.0747 28.8938C17.2803 28.9624 17.4955 28.9975 17.7122 28.9975C17.9746 28.998 18.2345 28.9466 18.477 28.8462C18.7194 28.7458 18.9395 28.5984 19.1247 28.4125L23.4147 24.125C23.6015 23.9389 23.7494 23.7175 23.8498 23.4738C23.9503 23.23 24.0012 22.9687 23.9997 22.705V15.4138L24.596 14.8175C27.931 11.4825 28.0747 7.46376 27.981 5.89001ZM9.29475 10H14.586L9.64475 14.94L4.99974 14.2925L9.29475 10ZM18.596 8.81876C19.5569 7.85194 20.7131 7.10127 21.9872 6.61691C23.2614 6.13255 24.6242 5.92565 25.9847 6.01001C26.0724 7.37124 25.8676 8.73545 25.3842 10.011C24.9008 11.2865 24.15 12.4438 23.1822 13.405L15.9997 20.585L11.4147 16L18.596 8.81876ZM21.9997 22.705L17.7085 27L17.0597 22.3538L21.9997 17.4138V22.705ZM12.7297 23.8925C12.1672 25.125 10.286 28 4.99974 28C4.73453 28 4.48017 27.8947 4.29264 27.7071C4.1051 27.5196 3.99974 27.2652 3.99974 27C3.99974 21.7138 6.87474 19.8325 8.10724 19.2688C8.22675 19.2143 8.35582 19.1838 8.48708 19.1792C8.61834 19.1746 8.74923 19.1959 8.87226 19.2418C8.9953 19.2878 9.10808 19.3576 9.20416 19.4471C9.30024 19.5367 9.37775 19.6443 9.43225 19.7638C9.48674 19.8833 9.51717 20.0123 9.52179 20.1436C9.52641 20.2749 9.50513 20.4057 9.45916 20.5288C9.4132 20.6518 9.34345 20.7646 9.2539 20.8607C9.16435 20.9568 9.05675 21.0343 8.93724 21.0888C8.13349 21.455 6.35974 22.6338 6.04724 25.9525C9.36599 25.64 10.5472 23.8663 10.911 23.0625C10.9655 22.943 11.043 22.8354 11.1391 22.7459C11.2352 22.6563 11.3479 22.5866 11.471 22.5406C11.594 22.4946 11.7249 22.4734 11.8562 22.478C11.9874 22.4826 12.1165 22.513 12.236 22.5675C12.3555 22.622 12.4631 22.6995 12.5526 22.7956C12.6422 22.8917 12.7119 23.0045 12.7579 23.1275C12.8039 23.2505 12.8252 23.3814 12.8205 23.5127C12.8159 23.6439 12.7855 23.773 12.731 23.8925H12.7297Z"
      fill="#4794EB"
      style={{ fill: "#4794EB", fillOpacity: 1 }}
    />
  </svg>
);

// --- End Icon components ---

const PRInvestment = () => {
  const boxClasses = "p-8 md:p-12";
  const depositSectionClasses = "md:w-1/2 md:pr-10";
  const benefitsSectionClasses =
    "md:w-1/2 md:pl-10 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200 space-y-5"; // Explicitly setting width and left padding for right section
  const iconContainerClasses = "w-8 h-8 flex-shrink-0";
  const lineSeparatorClasses =
    "py-4 flex items-start space-x-4 border-b border-gray-100 last:border-b-0"; // Specific separator styles
  const refundDepositText = "text-gray-700 text-sm mt-4 leading-relaxed"; // Class for the refund details
  const blurredGridStyle = {
    backgroundImage: `
      /* 1. Radial gradient: transparent center, white edges (creates the fade) */
      radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 75%),
      /* 2. Grid lines */
      linear-gradient(to right, rgba(218, 229, 243, 0.7) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(218, 229, 243, 0.7) 1px, transparent 1px)
    `,
    backgroundSize: "100% 100%, 40px 40px, 40px 40px",
    backgroundRepeat: "no-repeat, repeat, repeat",
    backgroundPosition: "center center, left top, left top",
    filter: "blur(8px)",
    transform: "scale(1.05)",
  };

  return (
    <div className=" flex flex-col items-center px-4 py-16 font-[SF Pro Display] relative bg-white overflow-hidden">
      <div className="absolute inset-0 checkered-bg-custom z-0"></div>
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4"></div>
      <div className="absolute inset-0 z-0" style={blurredGridStyle} />

      {/* Main Content (z-10 to stay on top) */}

      <div className="text-center z-10">
        <span className="inline-block mb-4 rounded-full bg-[#E8F1FD] px-4 py-1 text-sm font-medium text-[#4794EB]">
          Transparent & Refundable Deposit
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">
          Your Investment in Profit Recovery
        </h1>

        <p className="text-[#4B5563] mt-3 text-lg max-w-5xl mx-auto leading-relaxed">
          Our Profit Recovery Audit requires a one-time, fully refundable
          deposit based on your company’s size and complexity <br />— ensuring
          commitment and accuracy from both sides.
        </p>
      </div>

      <div
        className={`mt-10 bg-white rounded-2xl shadow-xl w-full max-w-4xl ${boxClasses} border border-gray-100 z-10`}>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Deposit Details */}

          <div className={depositSectionClasses}>
            <h3 className="text-[#4794EB] font-medium text-lg tracking-tight">
              Profit Audit Recovery Deposit
            </h3>

            <p className="text-4xl font-extrabold text-[#0A0A0A] mt-2 tracking-tight">
              $4,997 – $49,997
            </p>

            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              Final deposit amount is determined by your business scale and data
              complexity.
            </p>

            <p className={refundDepositText}>
              Submit all required data within{" "}
              <span className="font-bold">3 business days</span> and instantly
              receive{" "}
              <span className="font-bold">50% of your deposit refunded.</span>
            </p>
          </div>

          {/* Right Section: Benefits */}

          <div className={benefitsSectionClasses}>
            {/* 100% Refund Guarantee */}

            <div className={lineSeparatorClasses}>
              <div className={iconContainerClasses}>
                <ShieldIcon />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  100% Refund Guarantee
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  If we don’t uncover at least{" "}
                  <span className="font-bold">3×–5× your deposit</span>, you get
                  a full refund.
                </p>
              </div>
            </div>

            {/* Transparent Pricing */}

            <div className={lineSeparatorClasses}>
              <div className={iconContainerClasses}>
                <SearchIcon />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Transparent Pricing
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  No hidden fees or ongoing commitments.
                </p>
              </div>
            </div>

            {/* Applies Toward Implementation */}

            <div className={lineSeparatorClasses}>
              <div className={iconContainerClasses}>
                <WrenchIcon />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Applies Toward Implementation
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Your deposit is fully credited when you move forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
          <button
            className="mt-8 w-full bg-[#4794EB] hover:bg-[#377AD1] text-white font-semibold py-4 rounded-xl shadow-lg transition duration-200 text-lg"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(71, 148, 235, 0.2)",
            }}>
           Schedule My Profit Recovery Audit
          </button>
        </a>
      </div>
    </div>
  );
};

export default PRInvestment;
