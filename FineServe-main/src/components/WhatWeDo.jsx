import React from "react";

// --- 1. Font Loader ---
const FontLoader = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap"
  />
);

// --- 2. Configuration ---
const ICON_SIZE = { width: "52px", height: "52px" };
const ICON_COLOR = "#4794EB";

// --- 3. SVG Icon Components ---

const TruckIcon = ({ size, color, className }) => (
  <svg width="72" height="60" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: size.width, height: size.height, color: color }}>
    <g filter="url(#filter0_d_344_834)">
      <path opacity="0.2" d="M13.25 14.625H34.375V37.375H31.125C31.125 36.0821 30.6114 34.8421 29.6971 33.9279C28.7829 33.0136 27.5429 32.5 26.25 32.5C24.9571 32.5 23.7171 33.0136 22.8029 33.9279C21.8886 34.8421 21.375 36.0821 21.375 37.375C21.375 36.0821 20.8614 34.8421 19.9471 33.9279C19.0329 33.0136 17.7929 32.5 16.5 32.5C15.2071 32.5 13.9671 33.0136 13.0529 33.9279C12.1386 34.8421 11.625 36.0821 11.625 37.375V16.25C11.625 15.819 11.7962 15.4057 12.101 15.101C12.4057 14.7962 12.819 14.625 13.25 14.625ZM53.875 21.125V19.5C53.875 16.9141 52.8478 14.4342 51.0193 12.6057C49.1908 10.7772 46.7109 9.75 44.125 9.75H42.5C42.069 9.75 41.6557 9.92121 41.351 10.226C41.0462 10.5307 40.875 10.944 40.875 11.375V37.375H50.625C50.625 36.0821 51.1386 34.8421 52.0529 33.9279C52.9671 33.0136 54.2071 32.5 55.5 32.5C56.7929 32.5 58.0329 33.0136 58.9471 33.9279C59.8614 34.8421 60.375 36.0821 60.375 37.375V27.625C60.375 25.9011 59.6902 24.2478 58.4712 23.0288C57.2522 21.8098 55.5989 21.125 53.875 21.125Z" fill={color} />
      <path d="M55.5 19.6625V19.5C55.4968 16.4842 54.2973 13.5928 52.1648 11.4602C50.0323 9.3277 47.1409 8.12823 44.125 8.125H42.5C41.638 8.125 40.8114 8.46741 40.2019 9.0769C39.5924 9.6864 39.25 10.513 39.25 11.375V35.75H36V14.625C36 14.194 35.8288 13.7807 35.524 13.476C35.2193 13.1712 34.806 13 34.375 13H13.25C12.388 13 11.5614 13.3424 10.9519 13.9519C10.3424 14.5614 10 15.388 10 16.25V37.375C10.0015 38.6947 10.4046 39.9826 11.1558 41.0676C11.907 42.1526 12.9706 42.9833 14.2053 43.4492C15.44 43.9151 16.7873 43.9941 18.068 43.6757C19.3487 43.3574 20.5021 42.6568 21.375 41.667C22.1552 42.5534 23.1622 43.2104 24.2877 43.5677C25.4132 43.9249 26.6147 43.9688 27.7633 43.6946C28.9119 43.4204 29.964 42.8385 30.8068 42.0114C31.6496 41.1843 32.2512 40.1432 32.5469 39H49.2031C49.5961 40.5348 50.5361 41.8732 51.8464 42.7638C53.1567 43.6543 54.7472 44.0356 56.3188 43.836C57.8905 43.6364 59.3352 42.8697 60.3813 41.6799C61.4275 40.4902 62.0031 38.9593 62 37.375V27.625C61.9977 25.7526 61.35 23.9383 60.1659 22.4879C58.9819 21.0375 57.334 20.0396 55.5 19.6625ZM42.5 11.375H44.125C46.2799 11.375 48.3465 12.231 49.8702 13.7548C51.394 15.2785 52.25 17.3451 52.25 19.5V21.125C52.25 21.556 52.4212 21.9693 52.726 22.274C53.0307 22.5788 53.444 22.75 53.875 22.75C55.1679 22.75 56.4079 23.2636 57.3222 24.1779C58.2364 25.0921 58.75 26.3321 58.75 27.625V31.7505C57.7634 31.1757 56.6418 30.8736 55.5 30.875C54.0589 30.8764 52.659 31.3557 51.5196 32.2378C50.3801 33.12 49.5654 34.3552 49.2031 35.75H42.5V11.375ZM32.75 16.25V35.75H32.5469C32.2512 34.6068 31.6496 33.5657 30.8068 32.7386C29.964 31.9115 28.9119 31.3296 27.7633 31.0554C26.6147 30.7812 25.4132 30.8251 24.2877 31.1823C23.1622 31.5395 22.1552 32.1966 21.375 33.083C20.3849 31.9537 19.0334 31.2034 17.5513 30.9603C16.0693 30.7173 14.5489 30.9966 13.25 31.7505V16.25H32.75ZM16.5 40.625C15.8572 40.625 15.2289 40.4344 14.6944 40.0773C14.1599 39.7202 13.7434 39.2126 13.4974 38.6187C13.2514 38.0249 13.187 37.3714 13.3124 36.741C13.4379 36.1105 13.7474 35.5314 14.2019 35.0769C14.6564 34.6224 15.2355 34.3128 15.866 34.1874C16.4964 34.062 17.1499 34.1264 17.7437 34.3724C18.3376 34.6184 18.8452 35.0349 19.2023 35.5694C19.5594 36.1039 19.75 36.7322 19.75 37.375C19.75 38.237 19.4076 39.0636 18.7981 39.6731C18.1886 40.2826 17.362 40.625 16.5 40.625ZM26.25 40.625C25.6072 40.625 24.9789 40.4344 24.4444 40.0773C23.9099 39.7202 23.4934 39.2126 23.2474 38.6187C23.0014 38.0249 22.937 37.3714 23.0624 36.741C23.1879 36.1105 23.4974 35.5314 23.9519 35.0769C24.4064 34.6224 24.9855 34.3128 25.616 34.1874C26.2464 34.062 26.8999 34.1264 27.4937 34.3724C28.0876 34.6184 28.5952 35.0349 28.9523 35.5694C29.3094 36.1039 29.5 36.7322 29.5 37.375C29.5 38.237 29.1576 39.0636 28.5481 39.6731C27.9386 40.2826 27.112 40.625 26.25 40.625ZM55.5 40.625C54.8572 40.625 54.2289 40.4344 53.6944 40.0773C53.1599 39.7202 52.7434 39.2126 52.4974 38.6187C52.2514 38.0249 52.187 37.3714 52.3125 36.741C52.4379 36.1105 52.7474 35.5314 53.2019 35.0769C53.6564 34.6224 54.2355 34.3128 54.866 34.1874C55.4964 34.062 56.1499 34.1264 56.7437 34.3724C57.3376 34.6184 57.8452 35.0349 58.2023 35.5694C58.5594 36.1039 58.75 36.7322 58.75 37.375C58.75 38.237 58.4076 39.0636 57.7981 39.6731C57.1886 40.2826 56.362 40.625 55.5 40.625Z" fill={color} />
    </g>
    <defs>
      <filter id="filter0_d_344_834" x="0" y="-4" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_834" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_834" result="shape" />
      </filter>
    </defs>
  </svg>
);

const HandCoinsIcon = ({ size, color, className }) => (
  <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: size.width, height: size.height, color: color }}>
    <g filter="url(#filter0_d_344_843)">
      <path opacity="0.2" d="M13.25 30.875H19.75V42.25H13.25C12.819 42.25 12.4057 42.0788 12.101 41.774C11.7962 41.4693 11.625 41.056 11.625 40.625V32.5C11.625 32.069 11.7962 31.6557 12.101 31.3509C12.4057 31.0462 12.819 30.875 13.25 30.875ZM51.4375 11.375C50.5942 11.3755 49.7616 11.5635 49 11.9254C48.9447 10.7056 48.4983 9.53597 47.7267 8.5895C46.9552 7.64303 45.8996 6.97 44.7159 6.66994C43.5323 6.36988 42.2835 6.45873 41.1543 6.92335C40.025 7.38796 39.0753 8.20368 38.4456 9.24985C37.8158 10.296 37.5395 11.5171 37.6574 12.7325C37.7754 13.9478 38.2814 15.093 39.1005 15.9985C39.9197 16.9041 41.0086 17.5219 42.2061 17.7607C43.4036 17.9995 44.6461 17.8466 45.75 17.3245C45.8013 18.4368 46.178 19.5096 46.8333 20.4098C47.4886 21.31 48.3937 21.998 49.4364 22.3886C50.4791 22.7792 51.6136 22.8551 52.699 22.6069C53.7845 22.3588 54.7732 21.7975 55.5426 20.9926C56.3121 20.1877 56.8283 19.1747 57.0273 18.0792C57.2264 16.9837 57.0995 15.8538 56.6624 14.8297C56.2253 13.8057 55.4972 12.9324 54.5684 12.3183C53.6396 11.7042 52.551 11.3762 51.4375 11.375Z" fill={color} />
      <path d="M56.7858 28.6528C56.1811 28.1876 55.4773 27.868 54.729 27.719C53.9807 27.57 53.2082 27.5955 52.4714 27.7936L43.9727 29.7477C44.1704 28.9124 44.1765 28.0432 43.9905 27.2052C43.8045 26.3673 43.4313 25.5823 42.8988 24.9091C42.3663 24.2359 41.6883 23.6919 40.9157 23.318C40.1431 22.9441 39.2959 22.7499 38.4375 22.75H28.2691C27.4151 22.7479 26.5692 22.915 25.7802 23.2416C24.9913 23.5683 24.2748 24.0481 23.6723 24.6533L19.0777 29.25H13.25C12.388 29.25 11.5614 29.5924 10.9519 30.2019C10.3424 30.8114 10 31.6381 10 32.5V40.625C10 41.487 10.3424 42.3136 10.9519 42.9231C11.5614 43.5326 12.388 43.875 13.25 43.875H34.375C34.5079 43.8751 34.6402 43.8587 34.7691 43.8263L47.7691 40.5763C47.8519 40.5565 47.9328 40.5293 48.0108 40.495L55.9062 37.1353L55.9956 37.0947C56.7544 36.7155 57.4042 36.1494 57.8838 35.4497C58.3633 34.75 58.6569 33.9397 58.7367 33.0952C58.8166 32.2507 58.6801 31.3998 58.3403 30.6226C58.0004 29.8454 57.4682 29.1675 56.7939 28.6528H56.7858ZM13.25 32.5H18.125V40.625H13.25V32.5ZM54.5717 34.1677L46.853 37.4542L34.1719 40.625H21.375V31.5473L25.9717 26.9527C26.2724 26.6496 26.6304 26.4092 27.0248 26.2457C27.4191 26.0822 27.8421 25.9986 28.2691 26H38.4375C39.084 26 39.704 26.2568 40.1611 26.7139C40.6182 27.1711 40.875 27.791 40.875 28.4375C40.875 29.084 40.6182 29.704 40.1611 30.1611C39.704 30.6182 39.084 30.875 38.4375 30.875H32.75C32.319 30.875 31.9057 31.0462 31.601 31.351C31.2962 31.6557 31.125 32.069 31.125 32.5C31.125 32.931 31.2962 33.3443 31.601 33.6491C31.9057 33.9538 32.319 34.125 32.75 34.125H39.25C39.3723 34.1247 39.4942 34.111 39.6136 34.0844L53.223 30.9542L53.2859 30.938C53.7014 30.8226 54.1448 30.865 54.5309 31.057C54.917 31.2489 55.2184 31.5769 55.3773 31.9777C55.5361 32.3785 55.5411 32.824 55.3912 33.2283C55.2414 33.6325 54.9473 33.9671 54.5656 34.1677H54.5717ZM43.3125 19.5C43.714 19.5005 44.1148 19.4678 44.5109 19.4025C44.9565 20.726 45.7717 21.8942 46.8601 22.769C47.9486 23.6438 49.2648 24.1887 50.6531 24.3392C52.0414 24.4897 53.4437 24.2396 54.6944 23.6183C55.945 22.9971 56.9916 22.0307 57.7105 20.8335C58.4293 19.6363 58.7903 18.2583 58.7508 16.8624C58.7113 15.4665 58.2729 14.1112 57.4875 12.9565C56.7021 11.8019 55.6025 10.8963 54.3187 10.3468C53.035 9.79726 51.6207 9.62683 50.2431 9.85563C49.8141 8.5805 49.0416 7.44845 48.0107 6.58405C46.9798 5.71965 45.7303 5.15642 44.3999 4.95633C43.0695 4.75624 41.7097 4.92706 40.4701 5.44998C39.2306 5.9729 38.1593 6.82765 37.3742 7.92018C36.5891 9.0127 36.1206 10.3006 36.0203 11.6423C35.9199 12.9839 36.1917 14.3272 36.8056 15.5243C37.4195 16.7214 38.3518 17.726 39.4998 18.4274C40.6478 19.1289 41.9671 19.5 43.3125 19.5ZM55.5 17.0625C55.5 17.866 55.2617 18.6514 54.8153 19.3195C54.369 19.9876 53.7345 20.5083 52.9922 20.8158C52.2498 21.1232 51.433 21.2037 50.6449 21.0469C49.8569 20.8902 49.133 20.5033 48.5649 19.9351C47.9967 19.367 47.6098 18.6431 47.4531 17.8551C47.2963 17.067 47.3768 16.2502 47.6842 15.5079C47.9917 14.7655 48.5124 14.1311 49.1805 13.6847C49.8486 13.2383 50.634 13 51.4375 13C52.5149 13 53.5483 13.428 54.3101 14.1899C55.072 14.9517 55.5 15.9851 55.5 17.0625ZM43.3125 8.125C44.1987 8.12545 45.0605 8.41569 45.7665 8.95147C46.4724 9.48726 46.9838 10.2392 47.2227 11.0927C46.3904 11.6783 45.6895 12.4311 45.1649 13.3031C44.6402 14.1751 44.3033 15.1469 44.1758 16.1566C43.8921 16.2178 43.6027 16.2491 43.3125 16.25C42.2351 16.25 41.2017 15.822 40.4399 15.0601C39.678 14.2983 39.25 13.2649 39.25 12.1875C39.25 11.1101 39.678 10.0767 40.4399 9.31488C41.2017 8.55302 42.2351 8.125 43.3125 8.125Z" fill={color} />
    </g>
    <defs>
      <filter id="filter0_d_344_843" x="0" y="-4" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_843" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_843" result="shape" />
      </filter>
    </defs>
  </svg>
);

const CreditCardIcon = ({ size, color, className }) => (
  <svg width="66" height="59" viewBox="0 0 66 59" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: size.width, height: size.height, color: color }}>
    <g filter="url(#filter0_d_344_852)">
      <path opacity="0.2" d="M54.125 19.5V39C54.125 39.431 53.9538 39.8443 53.649 40.149C53.3443 40.4538 52.931 40.625 52.5 40.625H13.5C13.069 40.625 12.6557 40.4538 12.351 40.149C12.0462 39.8443 11.875 39.431 11.875 39V19.5H54.125Z" fill={color} />
      <path d="M52.5 9.75H13.5C12.638 9.75 11.8114 10.0924 11.2019 10.7019C10.5924 11.3114 10.25 12.138 10.25 13V39C10.25 39.862 10.5924 40.6886 11.2019 41.2981C11.8114 41.9076 12.638 42.25 13.5 42.25H52.5C53.362 42.25 54.1886 41.9076 54.7981 41.2981C55.4076 40.6886 55.75 39.862 55.75 39V13C55.75 12.138 55.4076 11.3114 54.7981 10.7019C54.1886 10.0924 53.362 9.75 52.5 9.75ZM52.5 13V17.875H13.5V13H52.5ZM52.5 39H13.5V21.125H52.5V39ZM49.25 34.125C49.25 34.556 49.0788 34.9693 48.774 35.274C48.4693 35.5788 48.056 35.75 47.625 35.75H41.125C40.694 35.75 40.2807 35.5788 39.976 35.274C39.6712 34.9693 39.5 34.556 39.5 34.125C39.5 33.694 39.6712 33.2807 39.976 32.976C40.2807 32.6712 40.694 32.5 41.125 32.5H47.625C48.056 32.5 48.4693 32.6712 48.774 32.976C49.0788 33.2807 49.25 33.694 49.25 34.125ZM36.25 34.125C36.25 34.556 36.0788 34.9693 35.774 35.274C35.4693 35.5788 35.056 35.75 34.625 35.75H31.375C30.944 35.75 30.5307 35.5788 30.226 35.274C29.9212 34.9693 29.75 34.556 29.75 34.125C29.75 33.694 29.9212 33.2807 30.226 32.976C30.5307 32.6712 30.944 32.5 31.375 32.5H34.625C35.056 32.5 35.4693 32.6712 35.774 32.976C36.0788 33.2807 36.25 33.694 36.25 34.125Z" fill={color} />
    </g>
    <defs>
      <filter id="filter0_d_344_852" x="-3" y="-4" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_852" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_852" result="shape" />
      </filter>
    </defs>
  </svg>
);

const WalletIcon = ({ size, color, className }) => (
  <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: size.width, height: size.height, color: color }}>
    <g filter="url(#filter0_d_344_861)">
      <path opacity="0.2" d="M49.5 16.25V39C49.5 39.431 49.3288 39.8443 49.024 40.149C48.7193 40.4538 48.306 40.625 47.875 40.625H15.375C14.513 40.625 13.6864 40.2826 13.0769 39.6731C12.4674 39.0636 12.125 38.237 12.125 37.375V11.375C12.125 12.237 12.4674 13.0636 13.0769 13.6731C13.6864 14.2826 14.513 14.625 15.375 14.625H47.875C48.306 14.625 48.7193 14.7962 49.024 15.101C49.3288 15.4057 49.5 15.819 49.5 16.25Z" fill={color} />
      <path d="M47.875 13H15.375C14.944 13 14.5307 12.8288 14.226 12.524C13.9212 12.2193 13.75 11.806 13.75 11.375C13.75 10.944 13.9212 10.5307 14.226 10.226C14.5307 9.92121 14.944 9.75 15.375 9.75H43C43.431 9.75 43.8443 9.57879 44.149 9.27405C44.4538 8.9693 44.625 8.55598 44.625 8.125C44.625 7.69402 44.4538 7.2807 44.149 6.97595C43.8443 6.67121 43.431 6.5 43 6.5H15.375C14.0821 6.5 12.8421 7.01361 11.9279 7.92785C11.0136 8.84209 10.5 10.0821 10.5 11.375V37.375C10.5 38.6679 11.0136 39.9079 11.9279 40.8221C12.8421 41.7364 14.0821 42.25 15.375 42.25H47.875C48.737 42.25 49.5636 41.9076 50.1731 41.2981C50.7826 40.6886 51.125 39.862 51.125 39V16.25C51.125 15.388 50.7826 14.5614 50.1731 13.9519C49.5636 13.3424 48.737 13 47.875 13ZM47.875 39H15.375C14.944 39 14.5307 38.8288 14.226 38.524C13.9212 38.2193 13.75 37.806 13.75 37.375V15.9717C14.2718 16.1567 14.8214 16.2508 15.375 16.25H47.875V39ZM38.125 26.8125C38.125 26.3304 38.268 25.8591 38.5358 25.4583C38.8036 25.0575 39.1843 24.745 39.6297 24.5605C40.0751 24.3761 40.5652 24.3278 41.038 24.4218C41.5109 24.5159 41.9452 24.748 42.2861 25.0889C42.627 25.4298 42.8591 25.8641 42.9532 26.337C43.0472 26.8098 42.9989 27.2999 42.8145 27.7453C42.63 28.1907 42.3175 28.5714 41.9167 28.8392C41.5159 29.107 41.0446 29.25 40.5625 29.25C39.916 29.25 39.296 28.9932 38.8389 28.5361C38.3818 28.079 38.125 27.459 38.125 26.8125Z" fill={color} />
    </g>
    <defs>
      <filter id="filter0_d_344_861" x="-6" y="-4" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_861" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_861" result="shape" />
      </filter>
    </defs>
  </svg>
);

const FundingIcon = ({ size, color, className }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: size.width, height: size.height, color: color }}>
    <g filter="url(#filter0_d_funding)">
      <path opacity="0.2" d="M14 44H50V40C50 38.8954 49.1046 38 48 38H14V44Z" fill={color} />
      <path d="M52 44H12V46H52V44ZM12 40V16C12 14.8954 12.8954 14 14 14H24C25.1046 14 26 14.8954 26 16V40H12ZM30 40V24C30 22.8954 30.8954 22 32 22H42C43.1046 22 44 22.8954 44 24V40H30ZM48 40V30C48 28.8954 48.8954 28 50 28H56C57.1046 28 58 28.8954 58 30V40H48Z" fill={color} />
      <path d="M54 12V20M54 12H46M54 12L40 26L32 18L14 36" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <filter id="filter0_d_funding" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_funding" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_funding" result="shape" />
      </filter>
    </defs>
  </svg>
);

// --- 4. Services Data ---
const services = [
  {
    icon: <TruckIcon />,
    title: "Shipping & Logistics",
    description:
      "From small parcels to LTL/FTL and international freight, our direct-to-carrier solutions maximize cost efficiency.",
    link: "/shipingLogistics",
  },
  {
    icon: <HandCoinsIcon />,
    title: "Payroll Tax Savings",
    description:
      "Save $650–850 per W2 employee per year, backed by an A+ rated insurance carrier, with no out-of-pocket cost.",
    link: "/payroll",
  },
  {
    icon: <CreditCardIcon />,
    title: "Merchant Processing",
    description:
      "Guaranteed rates, domestic & international accounts, low/high risk solutions, crypto transactions & more.",
    link: "/merchentProcessing",
  },
  {
    icon: <WalletIcon />,
    title: "Consumer Financing",
    description:
      "Flexible financing solutions designed to meet your customers where they’re at.",
    link: "/consumerFinance",
  },
  {
    icon: <FundingIcon />,
    title: "Business Funding",
    description:
      "Creative business funding solutions to meet your needs - working capital, hyper growth funds, cash flow support, bridge or equipment - we can help.",
    link: "/funding",
  },
];

// --- 5. Main Component ---
const App = () => {
  return (
    <>
      <FontLoader />

      <section
        id="what-we-do"
        className="bg-gradient-to-b from-[#1378C3] to-[#F6FCFC] flex flex-col items-center px-4 sm:px-6 md:px-20 py-12 md:py-16 text-center md:text-left"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* --- Header Section --- */}
          <div className="text-center mb-16">
            <p className="inline-block text-white text-xs sm:text-sm px-4 py-1 mb-6 rounded-full bg-[#FFFFFF29] [border:1px_solid_transparent] [border-image:linear-gradient(95.63deg,rgba(255,255,255,0.52)_-0.96%,rgba(255,255,255,0.052)_47.6%,rgba(255,255,255,0.52)_91.69%)_1] [border-image-slice:1] backdrop-blur-[50px] shadow-[0_0_12px_0_#2CB59C1F]">
              What We Do
            </p>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Comprehensive Advisory Solutions
              <br />
              <span
                className="font-light italic text-white/90"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                that
              </span>{" "}
              Recover Hidden Profits
            </h2>

            <p className="text-[18px] font-[400] leading-[140%] text-center text-[#FFFFFF8C] font-tthoves max-w-4xl mx-auto px-4 mb-12">
              We specialize in <b className="text-white font-[700]">Shipping & Logistics</b>,{" "}
              <b className="text-white font-[700]">Payroll Tax Savings</b>,{" "}
              <b className="text-white font-[700]">Merchant Processing</b>, {" "}
              <b className="text-white font-[700]">Consumer Financing</b> and <b className="text-white font-[700]">Funding Solutions</b> — helping you cut invisible costs and reinvest in growth.
            </p>
          </div>

          {/* --- Services Grid --- */}
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md flex flex-col items-start text-left
                  shadow-xl shadow-blue-300/30 border-12 border-white transition duration-300
                  transform hover:scale-[1.03] hover:shadow-blue-500/50 cursor-pointer
                  w-full sm:w-[calc(50%-12px)] lg:w-[calc(30%-16px)]"
                style={{
                  borderRadius: "32px",
                  minHeight: "320px",
                  padding: "24px",
                }}
              >
                <div className="mb-4">
                  {React.cloneElement(service.icon, {
                    size: ICON_SIZE,
                    color: ICON_COLOR,
                    className: "transition transform",
                  })}
                </div>

                <h3
                  className="text-black mb-3"
                  style={{
                    fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontSize: "26px",
                    lineHeight: "110%",
                    letterSpacing: "0",
                  }}
                >
                  {service.title}
                </h3>

                <p className="text-[#000000A3] text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="mt-auto text-[#3776BE] hover:text-[#104D9D] transition"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    textDecoration: "underline",
                    fontSize: "18px",
                    lineHeight: "100%",
                  }}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;