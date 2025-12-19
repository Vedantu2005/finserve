import React from 'react';



// Load external font for specific text elements (assuming you still need this for the h2 tag)

const FontLoader = () => (

  <link

    rel="stylesheet"

    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap"

  />

);



// --- Custom SVG Icon Components ---



// 1. Check Circle Icon (A+ Rated Partners)

const CustomCheckCircleIcon = ({ className }) => (

  <svg width="72" height="80" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>

    <foreignObject x="-16" y="-24" width="104" height="104"><div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: "blur(12px)", clipPath: "url(#bgblur_1_164_364_clip_path)", height: "100%", width: "100%" }}></div></foreignObject><g filter="url(#filter0_dd_164_364)" data-figma-bg-blur-radius="24">

      <g clipPath="url(#clip0_164_364)">

        <rect x="8" width="56" height="56" rx="16" fill="#4CA8FF" fillOpacity="0.16" style={{ fill: "#4CA8FF", fillOpacity: "0.16" }} shapeRendering="crispEdges" />

        <g filter="url(#filter1_d_164_364)">

          <path opacity="0.2" d="M47 19V26C47 38 36 41 36 41C36 41 25 38 25 26V19C25 18.7348 25.1054 18.4804 25.2929 18.2929C25.4804 18.1054 25.7348 18 26 18H46C46.2652 18 46.5196 18.1054 46.7071 18.2929C46.8946 18.4804 47 18.7348 47 19Z" fill="white" style={{ fill: "white" }} />

          <path d="M46 17H26C25.4696 17 24.9609 17.2107 24.5858 17.5858C24.2107 17.9609 24 18.4696 24 19V26C24 32.59 27.19 36.5838 29.8663 38.7738C32.7487 41.1313 35.6163 41.9313 35.7413 41.965C35.9131 42.0118 36.0944 42.0118 36.2663 41.965C36.3913 41.9313 39.255 41.1313 42.1413 38.7738C44.81 36.5838 48 32.59 48 26V19C48 18.4696 47.7893 17.9609 47.4142 17.5858C47.0391 17.2107 46.5304 17 46 17ZM46 26C46 30.6338 44.2925 34.395 40.925 37.1775C39.4591 38.3846 37.7919 39.324 36 39.9525C34.2315 39.335 32.5849 38.4123 31.135 37.2263C27.7275 34.4388 26 30.6625 26 26V19H46V26ZM30.2925 29.7075C30.1049 29.5199 29.9994 29.2654 29.9994 29C29.9994 28.7346 30.1049 28.4801 30.2925 28.2925C30.4801 28.1049 30.7346 27.9994 31 27.9994C31.2654 27.9994 31.5199 28.1049 31.7075 28.2925L34 30.5863L40.2925 24.2925C40.3854 24.1996 40.4957 24.1259 40.6171 24.0756C40.7385 24.0253 40.8686 23.9994 41 23.9994C41.1314 23.9994 41.2615 24.0253 41.3829 24.0756C41.5043 24.1259 41.6146 24.1996 41.7075 24.2925C41.8004 24.3854 41.8741 24.4957 41.9244 24.6171C41.9747 24.7385 42.0006 24.8686 42.0006 25C42.0006 25.1314 41.9747 25.2615 41.9244 25.3829C41.8741 25.5043 41.8004 25.6146 41.7075 25.7075L34.7075 32.7075C34.6146 32.8005 34.5043 32.8742 34.3829 32.9246C34.2615 32.9749 34.1314 33.0008 34 33.0008C33.8686 33.0008 33.7385 32.9749 33.6171 32.9246C33.4957 32.8742 33.3854 32.8005 33.2925 32.7075L30.2925 29.7075Z" fill="white" style={{ fill: "white" }} />

        </g>

      </g>

      <rect x="9" y="1" width="54" height="54" rx="15" stroke="#4CA8FF" strokeOpacity="0.5" style={{ stroke: "#4CA8FF", strokeOpacity: "0.5" }} strokeWidth="2" shapeRendering="crispEdges" />

    </g>

    <defs>

      <filter id="filter0_dd_164_364" x="-16" y="-24" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

        <feFlood floodOpacity="0" result="BackgroundImageFix" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_164_364" />

        <feOffset dy="4" />

        <feGaussianBlur stdDeviation="2" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />

        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_164_364" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow_164_364" />

        <feOffset dy="16" />

        <feGaussianBlur stdDeviation="8" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />

        <feBlend mode="normal" in2="effect1_dropShadow_164_364" result="effect2_dropShadow_164_364" />

        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_164_364" result="shape" />

      </filter>

      <clipPath id="bgblur_1_164_364_clip_path" transform="translate(16 24)"><rect x="8" width="56" height="56" rx="16" />

      </clipPath><filter id="filter1_d_164_364" x="10.625" y="8.25" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

        <feFlood floodOpacity="0" result="BackgroundImageFix" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feOffset dy="5.625" />

        <feGaussianBlur stdDeviation="4.6875" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />

        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_164_364" />

        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_164_364" result="shape" />

      </filter>

      <clipPath id="clip0_164_364">

        <rect x="8" width="56" height="56" rx="16" fill="white" style={{ fill: "white" }} />

      </clipPath>

    </defs>

  </svg>

);



// 2. Trending Up Icon (Consistent 3x-5x ROI)

const CustomTrendingUpIcon = ({ className }) => (

  <svg width="72" height="80" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>

    <foreignObject x="-16" y="-24" width="104" height="104"><div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: "blur(12px)", clipPath: "url(#bgblur_0_135_60_clip_path)", height: "100%", width: "100%" }}></div></foreignObject><g filter="url(#filter0_dd_135_60)" data-figma-bg-blur-radius="24">

      <rect x="8" width="56" height="56" rx="16" fill="#4CA8FF" fillOpacity="0.16" style={{ fill: "#4CA8FF", fillOpacity: "0.16" }} shapeRendering="crispEdges" />

      <rect x="9" y="1" width="54" height="54" rx="15" stroke="#4CA8FF" strokeOpacity="0.5" style={{ stroke: "#4CA8FF", strokeOpacity: "0.5" }} strokeWidth="2" shapeRendering="crispEdges" />

      <g filter="url(#filter1_d_135_60)">

        <path opacity="0.2" d="M49 19V27L41 19H49Z" fill="white" style={{ fill: "white" }} />

        <path d="M48.9996 18H40.9996C40.8017 17.9998 40.6082 18.0584 40.4436 18.1683C40.279 18.2782 40.1507 18.4344 40.075 18.6172C39.9992 18.8 39.9794 19.0012 40.0181 19.1953C40.0567 19.3894 40.1521 19.5676 40.2921 19.7075L43.5858 23L36.9996 29.5863L32.7071 25.2925C32.6142 25.1995 32.5039 25.1258 32.3825 25.0754C32.2611 25.0251 32.131 24.9992 31.9996 24.9992C31.8682 24.9992 31.738 25.0251 31.6166 25.0754C31.4952 25.1258 31.385 25.1995 31.2921 25.2925L22.2921 34.2925C22.1044 34.4801 21.999 34.7346 21.999 35C21.999 35.2654 22.1044 35.5199 22.2921 35.7075C22.4797 35.8951 22.7342 36.0006 22.9996 36.0006C23.2649 36.0006 23.5194 35.8951 23.7071 35.7075L31.9996 27.4137L36.2921 31.7075C36.385 31.8005 36.4952 31.8742 36.6166 31.9246C36.738 31.9749 36.8682 32.0008 36.9996 32.0008C37.131 32.0008 37.2611 31.9749 37.3825 31.9246C37.5039 31.8742 37.6142 31.8005 37.7071 31.7075L44.9996 24.4138L48.2921 27.7075C48.4319 27.8475 48.6102 27.9429 48.8043 27.9815C48.9984 28.0202 49.1996 28.0004 49.3824 27.9246C49.5652 27.8489 49.7214 27.7206 49.8313 27.556C49.9412 27.3914 49.9997 27.1979 49.9996 27V19C49.9996 18.7348 49.8942 18.4804 49.7067 18.2929C49.5192 18.1054 49.2648 18 48.9996 18ZM47.9996 24.5863L43.4133 20H47.9996V24.5863Z" fill="white" style={{ fill: "white" }} />

      </g>

    </g>

    <defs>

      <filter id="filter0_dd_135_60" x="-16" y="-24" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

        <feFlood floodOpacity="0" result="BackgroundImageFix" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_135_60" />

        <feOffset dy="4" />

        <feGaussianBlur stdDeviation="2" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />

        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_60" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow_135_60" />

        <feOffset dy="16" />

        <feGaussianBlur stdDeviation="8" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />

        <feBlend mode="normal" in2="effect1_dropShadow_135_60" result="effect2_dropShadow_135_60" />

        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_135_60" result="shape" />

      </filter>

      <clipPath id="bgblur_0_135_60_clip_path" transform="translate(16 24)"><rect x="8" width="56" height="56" rx="16" />

      </clipPath><filter id="filter1_d_135_60" x="10.625" y="8.25" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

        <feFlood floodOpacity="0" result="BackgroundImageFix" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feOffset dy="5.625" />

        <feGaussianBlur stdDeviation="4.6875" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />

        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_60" />

        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_60" result="shape" />

      </filter>

    </defs>

  </svg>

);



// 3. Shield Icon (Zero Risk)

const CustomShieldIcon = ({ className }) => (

  <svg width="72" height="80" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>

    <foreignObject x="-16" y="-24" width="104" height="104"><div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: "blur(12px)", clipPath: "url(#bgblur_0_135_69_clip_path)", height: "100%", width: "100%" }}></div></foreignObject><g filter="url(#filter0_dd_135_69)" data-figma-bg-blur-radius="24">

      <rect x="8" width="56" height="56" rx="16" fill="#4CA8FF" fillOpacity="0.16" style={{ fill: "#4CA8FF", fillOpacity: "0.16" }} shapeRendering="crispEdges" />

      <rect x="9" y="1" width="54" height="54" rx="15" stroke="#4CA8FF" strokeOpacity="0.5" style={{ stroke: "#4CA8FF", strokeOpacity: "0.5" }} strokeWidth="2" shapeRendering="crispEdges" />

      <g filter="url(#filter1_d_135_69)">

        <path opacity="0.2" d="M45 31L40 36L32 34L25 29L29.085 20.8287L36 19L42.915 20.8287L42.95 21H38L32.2925 26.5363C32.1864 26.6423 32.1055 26.7709 32.0558 26.9124C32.0062 27.054 31.989 27.2049 32.0055 27.354C32.0221 27.5031 32.072 27.6465 32.1515 27.7737C32.2311 27.9009 32.3382 28.0086 32.465 28.0888C34.6538 29.4875 37.625 29.3912 40 27L45 31Z" fill="white" style={{ fill: "white" }} />

        <path d="M51.7874 25.4888L48.5974 19.1063C48.4799 18.8714 48.3173 18.6619 48.1188 18.4898C47.9203 18.3178 47.6899 18.1865 47.4407 18.1035C47.1915 18.0205 46.9284 17.9874 46.6664 18.0061C46.4044 18.0248 46.1486 18.095 45.9137 18.2125L42.8049 19.7663L36.2562 18.0338C36.0882 17.99 35.9117 17.99 35.7437 18.0338L29.1949 19.7663L26.0862 18.2125C25.8513 18.095 25.5955 18.0248 25.3335 18.0061C25.0715 17.9874 24.8084 18.0205 24.5592 18.1035C24.31 18.1865 24.0796 18.3178 23.8811 18.4898C23.6826 18.6619 23.52 18.8714 23.4024 19.1063L20.2124 25.4875C20.0949 25.7224 20.0248 25.9782 20.0061 26.2402C19.9873 26.5022 20.0204 26.7653 20.1034 27.0145C20.1864 27.2637 20.3177 27.4942 20.4898 27.6926C20.6618 27.8911 20.8713 28.0538 21.1062 28.1713L24.4812 29.86L31.4174 34.8138C31.5197 34.8865 31.6345 34.9395 31.7562 34.97L39.7562 36.97C39.9237 37.012 40.0993 37.0099 40.2658 36.9639C40.4323 36.9179 40.584 36.8296 40.7062 36.7075L47.5899 29.8225L50.8924 28.1713C51.3666 27.9339 51.727 27.5181 51.8946 27.015C52.0622 26.512 52.0232 25.963 51.7862 25.4888H51.7874ZM44.9262 29.66L40.6249 26.215C40.4323 26.0607 40.1893 25.9831 39.9428 25.9972C39.6964 26.0113 39.4638 26.116 39.2899 26.2913C37.0637 28.5338 34.5824 28.25 32.9999 27.25L38.4049 22H42.3812L45.7824 28.8013L44.9262 29.66ZM25.1912 20L27.7499 21.2775L24.5537 27.6588L21.9999 26.3825L25.1912 20ZM39.6912 34.8913L32.4274 33.0763L26.2774 28.6838L29.7774 21.6838L35.9999 20.035L37.2249 20.3588L31.5999 25.8188L31.5899 25.83C31.3782 26.0418 31.2167 26.2984 31.1174 26.5808C31.0181 26.8633 30.9834 27.1645 31.0161 27.4622C31.0487 27.7599 31.1478 28.0464 31.3059 28.3007C31.4641 28.5549 31.6774 28.7704 31.9299 28.9313C34.4999 30.5725 37.6012 30.3063 40.0437 28.3063L43.4999 31.0825L39.6912 34.8913ZM47.4412 27.6575L44.2512 21.2825L46.8087 20L49.9999 26.3825L47.4412 27.6575ZM36.4724 39.2413C36.4184 39.4574 36.2938 39.6493 36.1183 39.7865C35.9428 39.9238 35.7265 39.9985 35.5037 39.9988C35.4215 39.9987 35.3397 39.9886 35.2599 39.9688L30.0512 38.6663C29.9294 38.6362 29.8144 38.5832 29.7124 38.51L26.4187 36.1575C26.2162 35.9985 26.0828 35.7675 26.0463 35.5126C26.0099 35.2577 26.0731 34.9986 26.2229 34.7892C26.3728 34.5797 26.5976 34.4362 26.8506 34.3884C27.1036 34.3406 27.3653 34.3922 27.5812 34.5325L30.7199 36.775L35.7499 38.03C36.0072 38.0944 36.2283 38.2583 36.3648 38.4856C36.5012 38.713 36.5417 38.9853 36.4774 39.2425L36.4724 39.2413Z" fill="white" style={{ fill: "white" }} />

      </g>

    </g>

    <defs>

      <filter id="filter0_dd_135_69" x="-16" y="-24" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

        <feFlood floodOpacity="0" result="BackgroundImageFix" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_135_69" />

        <feOffset dy="4" />

        <feGaussianBlur stdDeviation="2" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />

        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_69" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow_135_69" />

        <feOffset dy="16" />

        <feGaussianBlur stdDeviation="8" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />

        <feBlend mode="normal" in2="effect1_dropShadow_135_69" result="effect2_dropShadow_135_69" />

        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_135_69" result="shape" />

      </filter>

      <clipPath id="bgblur_0_135_69_clip_path" transform="translate(16 24)"><rect x="8" width="56" height="56" rx="16" />

      </clipPath><filter id="filter1_d_135_69" x="10.625" y="8.25" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

        <feFlood floodOpacity="0" result="BackgroundImageFix" />

        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

        <feOffset dy="5.625" />

        <feGaussianBlur stdDeviation="4.6875" />

        <feComposite in2="hardAlpha" operator="out" />

        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />

        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_69" />

        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_69" result="shape" />

      </filter>

    </defs>

  </svg>

);





// --- Data for the three guarantee highlights (UPDATED TO USE CUSTOM SVGs) ---

const guaranteeHighlights = [

  {

    icon: CustomCheckCircleIcon,

    title: "A+ Rated Partners.",

    description: "Best in the industry",

  },

  {

    icon: CustomTrendingUpIcon,

    title: "Consistent 3x-5x ROI.",

    description: "Proven Results",

  },

  {

    icon: CustomShieldIcon,

    title: "Zero Risk.",

    description: "Full refund guarantee",

  },

];



const ROIGuarentee = () => {

  return (

    // Outer container to center the component

    <div className=" flex items-center justify-center p-4 sm:p-8 font-inter">
      <section
        className="w-full max-w-6xl text-white rounded-[30px] sm:rounded-[40px] shadow-xl p-6 sm:p-10 md:p-16 text-center flex flex-col items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(100.68deg, #0D0D78 0.07%, #003181 56.4%)",
        }}
      >
        {/* Absolute Background Grid Pattern (UNCHANGED) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
    `,
            border: "2px solid",
            borderImageSource: `radial-gradient(
      89.39% 45.81% at 5.63% 26.41%,
      rgba(255, 255, 255, 0.06) 0%,
      rgba(255, 255, 255, 0) 100%
    )`,
            borderImageSlice: 1,
            backgroundSize: "40px 40px",
          }}>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* "Our Guarantee" Tag (UNCHANGED) */}
          <div className="inline-block bg-white/10 border border-white/20 text-white text-xs md:text-sm font-medium px-5 py-1 rounded-full mb-5 sm:mb-6">
            Our Guarantee
          </div>
          {/* Main Headline (UNCHANGED) */}
          <h2
            className="text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 leading-tight max-w-4xl text-center"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "42px",
              lineHeight: "48px",
              letterSpacing: "0%",
            }}
          >
            3x-5x ROI in 14 Days,{" "}
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "42px",
                lineHeight: "48px",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Or
            </span>{" "}
            Your Money Back.
          </h2>

          {/* Sub-description (UNCHANGED) */}
          <p
            className="text-[#FFFFFFA6] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed text-center"
            style={{
              fontFamily: "TT Hoves Pro Trial",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            We're so confident in our Profit Recovery Audit that if we don't identify at least{" "}
            <span
              style={{
                fontFamily: "TT Hoves Pro Trial",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "white", // same as text-blue-300
              }}
            >
              3x your audit deposit in hidden savings
            </span>
            , you'll receive a{" "}
            <span
              style={{
                fontFamily: "TT Hoves Pro Trial",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              100% refund.
            </span>
            <br />
            <br />
            <span
              style={{
                fontFamily: "TT Hoves Pro Trial",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "white",
              }}
            > No risk, only upside.</span>

          </p>

          {/* Guarantee Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl mb-6 md:mb-8">
            {guaranteeHighlights.map((item, idx) => {
              const IconComponent = item.icon; // Custom SVG component
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-1 px-3 sm:px-0"
                >
                  {/* Icon Container: Removed circular background classes */}
                  <div className="p-3  flex items-center justify-center">
                    {/* The SVG handles its own styling, background, and drop shadow */}
                    <IconComponent className="w-16 h-16 sm:w-20 sm:h-20" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "TT Hoves Pro Trial",
                      fontWeight: 700,
                      fontStyle: "bold",
                      fontSize: "24px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "white",
                      marginTop: "-20px", // equivalent of -mt-5
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "TT Hoves Pro Trial",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.7)", // text-white/70
                      maxWidth: "260px",
                      margin: "0 auto", // center the paragraph
                    }}
                  >
                    {item.description}
                  </p>

                </div>
              );
            })}
          </div>
          {/* Call-to-Action Button (UNCHANGED) */}
          <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
            <button
              className="mt-2 px-8 cursor-pointer py-3 rounded-xl font-semibold text-white shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-base sm:text-lg"
              style={{
                // Button Gradient and Inset Shadow as seen in screenshot
                background: "linear-gradient(180deg, #4EA0E9 0%, #307DD1 100%)",
                boxShadow: "inset 0 2px 5px rgba(255,255,255,0.2), 0 5px 15px rgba(0,0,0,0.3)",
              }}>
              Launch Your Profit Recovery Audit
            </button>
          </a>
          {/* Small Print (UNCHANGED) */}
          <p className="text-white/70 text-xs mt-3">
            Takes less than 2 minutes to start.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ROIGuarentee;