import React from "react";

// Load external font for specific text elements
const FontLoader = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap"
  />
);

// --- 1. Custom SVG Components (Clock, Trending, Shield, Globe) ---

const ClockIcon = ({ className }) => (
  <svg width="166" height="173" viewBox="0 0 66 73" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_dd_108_2707)">
      <rect x="8.5332" y="0.128204" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.5332 0.128204)" fill="url(#paint0_linear_108_2707)" />
      <rect x="8.5332" y="0.128204" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.5332 0.128204)" fill="url(#paint1_linear_108_2707)" />
      <g filter="url(#filter1_d_108_2707)">
        <path opacity="0.2" d="M43.6308 26.5692C43.5563 28.704 42.8504 30.7687 41.6024 32.5022C40.3544 34.2358 38.6204 35.5603 36.6196 36.3084C34.6189 37.0564 32.4412 37.1944 30.362 36.7048C28.2829 36.2152 26.3956 35.1201 24.9388 33.5579C23.482 31.9957 22.5212 30.0366 22.1778 27.9284C21.8345 25.8201 22.124 23.6574 23.0098 21.7136C23.8956 19.7699 25.3379 18.1325 27.1543 17.0085C28.9707 15.8845 31.0796 15.3244 33.2143 15.3989C36.0769 15.4989 38.7826 16.7319 40.736 18.8267C42.6895 20.9216 43.7308 23.7067 43.6308 26.5692Z" fill="white" />
        <path d="M33.2466 14.4994C30.934 14.4187 28.6493 15.0255 26.6816 16.2432C24.7138 17.4609 23.1513 19.2347 22.1917 21.3404C21.2321 23.4461 20.9184 25.7891 21.2904 28.073C21.6624 30.357 22.7033 32.4793 24.2814 34.1717C25.8596 35.8641 27.9042 37.0505 30.1566 37.5809C32.4091 38.1112 34.7682 37.9618 36.9357 37.1514C39.1032 36.341 40.9817 34.9061 42.3337 33.028C43.6857 31.15 44.4504 28.9133 44.5311 26.6006C44.6361 23.5004 43.5069 20.4851 41.3914 18.2164C39.2758 15.9477 36.3466 14.611 33.2466 14.4994ZM32.4928 36.0863C30.5359 36.018 28.6433 35.3709 27.0542 34.2269C25.4651 33.0829 24.2509 31.4934 23.5652 29.6594C22.8795 27.8253 22.753 25.8291 23.2018 23.9232C23.6506 22.0173 24.6545 20.2873 26.0865 18.9519C27.5185 17.6165 29.3143 16.7358 31.2469 16.4211C33.1795 16.1063 35.162 16.3717 36.9437 17.1837C38.7255 17.9957 40.2264 19.3178 41.2568 20.9828C42.2871 22.6478 42.8006 24.581 42.7322 26.5378C42.6377 29.1609 41.5065 31.6393 39.5869 33.4293C37.6673 35.2194 35.116 36.1749 32.4928 36.0863ZM40.0339 26.4436C40.0255 26.6821 39.9228 26.9076 39.7482 27.0704C39.5737 27.2332 39.3416 27.32 39.103 27.3116L32.8069 27.0918C32.5683 27.0834 32.3428 26.9807 32.18 26.8061C32.0173 26.6315 31.9305 26.3995 31.9388 26.1609L32.1587 19.8647C32.167 19.6262 32.2698 19.4007 32.4443 19.2379C32.6189 19.0751 32.851 18.9884 33.0895 18.9967C33.3281 19.005 33.5536 19.1078 33.7164 19.2824C33.8791 19.4569 33.9659 19.689 33.9576 19.9276L33.7691 25.3243L39.1658 25.5127C39.4044 25.5211 39.6299 25.6238 39.7926 25.7984C39.9554 25.973 40.0422 26.205 40.0339 26.4436Z" fill="white" />
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_108_2707" x="-0.425586" y="0.128204" width="66.5279" height="73.7282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="3.6" operator="erode" in="SourceAlpha" result="effect1_dropShadow_108_2707" />
        <feOffset dy="3.6" />
        <feGaussianBlur stdDeviation="1.8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2707" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="7.2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_108_2707" />
        <feOffset dy="14.4" />
        <feGaussianBlur stdDeviation="7.2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_108_2707" result="effect2_dropShadow_108_2707" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_108_2707" result="shape" />
      </filter>
      <filter id="filter1_d_108_2707" x="7.94434" y="5.29856" width="49.7871" height="49.7876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2707" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_2707" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_108_2707" x1="58.9332" y1="50.5282" x2="8.5332" y2="0.128206" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3CC9A8" />
        <stop offset="0.56" stop-color="#4A90E2" />
      </linearGradient>
      <linearGradient id="paint1_linear_108_2707" x1="10.7063" y1="5.99412" x2="55.3289" y2="47.6054" gradientUnits="userSpaceOnUse">
        <stop stop-color="#08307D" />
        <stop offset="1" stop-color="#61E6CD" />
      </linearGradient>
    </defs>
  </svg>
);

const TrendingUpIcon = ({ className }) => (
  <svg width="66" height="73" viewBox="0 0 66 73" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_dd_108_2717)">
      <rect x="8.50586" y="0.143425" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.50586 0.143425)" fill="url(#paint0_linear_108_2717)" />
      <rect x="8.50586" y="0.143425" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.50586 0.143425)" fill="url(#paint1_linear_108_2717)" />
      <g filter="url(#filter1_d_108_2717)">
        <path opacity="0.2" d="M44.7855 18.5209L44.5342 25.7165L37.5898 18.2696L44.7855 18.5209Z" fill="white" />
        <path d="M44.8179 17.6214L37.6223 17.3701C37.4443 17.3638 37.2684 17.4104 37.1169 17.504C36.9655 17.5977 36.8452 17.7342 36.7713 17.8962C36.6974 18.0583 36.6733 18.2386 36.7019 18.4144C36.7306 18.5902 36.8108 18.7535 36.9323 18.8837L39.7915 21.9486L33.6606 27.6657L29.9346 23.6689C29.8539 23.5824 29.7571 23.5125 29.6494 23.4635C29.5418 23.4144 29.4256 23.387 29.3074 23.3829C29.1892 23.3788 29.0713 23.398 28.9606 23.4394C28.8498 23.4809 28.7483 23.5437 28.6618 23.6245L20.2841 31.4368C20.1094 31.5997 20.0066 31.8253 19.9983 32.064C19.9899 32.3027 20.0768 32.5349 20.2396 32.7096C20.4025 32.8842 20.6281 32.987 20.8668 32.9954C21.1055 33.0037 21.3377 32.9169 21.5124 32.754L29.2316 25.5546L32.9576 29.5515C33.0382 29.638 33.1351 29.7078 33.2427 29.7569C33.3503 29.806 33.4665 29.8334 33.5847 29.8375C33.7029 29.8416 33.8208 29.8224 33.9316 29.781C34.0423 29.7395 34.1439 29.6766 34.2303 29.5959L41.0187 23.2646L43.8767 26.3306C43.9981 26.4609 44.1554 26.5523 44.3287 26.5932C44.5021 26.634 44.6837 26.6225 44.8505 26.5601C45.0173 26.4977 45.1619 26.3873 45.2659 26.2427C45.3699 26.0981 45.4286 25.9259 45.4347 25.7479L45.686 18.5523C45.6943 18.3137 45.6075 18.0816 45.4447 17.907C45.2819 17.7325 45.0565 17.6297 44.8179 17.6214ZM43.7116 23.514L39.7305 19.2448L43.8557 19.3889L43.7116 23.514Z" fill="white" />
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_108_2717" x="-0.452929" y="0.143425" width="66.5279" height="73.7282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="3.6" operator="erode" in="SourceAlpha" result="effect1_dropShadow_108_2717" />
        <feOffset dy="3.6" />
        <feGaussianBlur stdDeviation="1.8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2717" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="7.2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_108_2717" />
        <feOffset dy="14.4" />
        <feGaussianBlur stdDeviation="7.2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_108_2717" result="effect2_dropShadow_108_2717" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_108_2717" result="shape" />
      </filter>
      <filter id="filter1_d_108_2717" x="7.91699" y="5.3138" width="49.7871" height="49.7876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2717" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_2717" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_108_2717" x1="58.9059" y1="50.5434" x2="8.50586" y2="0.143427" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3CC9A8" />
        <stop offset="0.56" stop-color="#4A90E2" />
      </linearGradient>
      <linearGradient id="paint1_linear_108_2717" x1="10.6789" y1="6.00934" x2="55.3015" y2="47.6206" gradientUnits="userSpaceOnUse">
        <stop stop-color="#08307D" />
        <stop offset="1" stop-color="#61E6CD" />
      </linearGradient>
    </defs>
  </svg>
);

const ShieldCheckIcon = ({ className }) => (
  <svg width="66" height="74" viewBox="0 0 66 74" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_dd_108_2725)">
      <g clip-path="url(#clip0_108_2725)">
        <rect x="8.34863" y="0.485382" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.34863 0.485382)" fill="url(#paint0_linear_108_2725)" />
        <rect x="8.34863" y="0.485382" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.34863 0.485382)" fill="url(#paint1_linear_108_2725)" />
        <g filter="url(#filter1_d_108_2725)">
          <path opacity="0.2" d="M42.2764 31.4682C41.4429 33.0949 40.2118 34.4846 38.6975 35.5082L37.6819 34.418C37.5731 34.3009 37.4351 34.2148 37.282 34.1688L34.8903 33.4481C34.6783 33.3843 34.4972 33.2447 34.3817 33.0558C34.2662 32.867 34.2243 32.6422 34.2642 32.4244L34.5953 30.6123C34.6233 30.4595 34.6904 30.3165 34.7901 30.1973C34.8897 30.0781 35.0185 29.9867 35.1639 29.932L38.6383 28.6282C38.7988 28.5681 38.9731 28.555 39.1408 28.5906C39.3085 28.6262 39.4625 28.7089 39.5847 28.829L42.2764 31.4682ZM36.3304 24.0888L38.9243 21.2751C39.0702 21.1174 39.1548 20.9127 39.1629 20.6981L39.2571 17.9997C37.224 16.4269 34.6965 15.6309 32.129 15.7546C29.5615 15.8784 27.1223 16.9138 25.2498 18.6749C23.3774 20.4359 22.1944 22.807 21.9136 25.3621C21.6328 27.9172 22.2725 30.4887 23.7177 32.6144L24.8586 31.9203C24.985 31.843 25.0903 31.7357 25.1653 31.608C25.2403 31.4802 25.2825 31.3359 25.2883 31.1879L25.4542 27.1153C25.4616 26.9388 25.5204 26.7683 25.6233 26.6248L28.1005 23.1879C28.1715 23.09 28.2615 23.0075 28.3651 22.9452C28.4688 22.8829 28.5839 22.8421 28.7036 22.8253C28.8233 22.8084 28.9452 22.8159 29.062 22.8472C29.1788 22.8785 29.2881 22.9331 29.3833 23.0075L31.5596 24.5469C31.7424 24.6886 31.9724 24.755 32.2026 24.7326L35.7564 24.3772C35.9767 24.3549 36.1811 24.2523 36.3304 24.0888Z" fill="white" />
          <path d="M33.063 14.8566C30.7504 14.7759 28.4657 15.3827 26.498 16.6004C24.5302 17.8181 22.9677 19.5919 22.0081 21.6976C21.0485 23.8033 20.7348 26.1462 21.1068 28.4302C21.4788 30.7141 22.5197 32.8365 24.0978 34.5289C25.676 36.2213 27.7206 37.4077 29.973 37.938C32.2255 38.4684 34.5846 38.319 36.7521 37.5086C38.9196 36.6982 40.7981 35.2632 42.1501 33.3852C43.5021 31.5072 44.2668 29.2705 44.3475 26.9578C44.4525 23.8576 43.3233 20.8423 41.2078 18.5736C39.0922 16.3049 36.163 14.9682 33.063 14.8566ZM33.0002 16.6555C34.9172 16.7204 36.7734 17.344 38.3408 18.4495L38.2634 20.6667L35.6697 23.4736L32.1148 23.829L32.0808 23.803L29.9198 22.28C29.7285 22.135 29.5102 22.0297 29.2777 21.9704C29.0452 21.911 28.8031 21.8987 28.5658 21.9343C28.3284 21.9699 28.1006 22.0525 27.8957 22.1774C27.6908 22.3023 27.5129 22.4669 27.3725 22.6615L24.8953 26.0984C24.6889 26.3848 24.5713 26.7256 24.5572 27.0783L24.3891 31.1508L24.013 31.3797C23.1565 29.8474 22.7228 28.1149 22.7565 26.3598C22.7901 24.6047 23.2898 22.8901 24.2044 21.3917C25.1189 19.8933 26.4155 18.6651 27.9611 17.8328C29.5067 17.0006 31.2458 16.5943 33.0002 16.6555ZM25.0372 32.8654L25.327 32.6898C25.5801 32.5352 25.7911 32.3205 25.9413 32.0648C26.0914 31.809 26.176 31.5201 26.1876 31.2238L26.3535 27.1512L28.8329 23.7144C28.8441 23.7237 28.8559 23.7324 28.868 23.7404L31.029 25.2646C31.3905 25.5391 31.8426 25.6663 32.2942 25.6206L35.8515 25.2642C36.2901 25.2211 36.6977 25.0187 36.997 24.6952L39.5908 21.886C39.8809 21.5691 40.0482 21.1589 40.0623 20.7295L40.0872 20.0178C41.2588 21.3474 42.0515 22.9675 42.3822 24.7085C42.7129 26.4495 42.5695 28.2474 41.9671 29.914L40.2104 28.1912C39.9662 27.9508 39.6585 27.7851 39.3234 27.7136C38.9883 27.6421 38.6397 27.6677 38.3187 27.7874L34.8443 29.0901C34.5538 29.2003 34.2965 29.3835 34.0973 29.622C33.8981 29.8605 33.7638 30.1463 33.7071 30.4519L33.3748 32.2627C33.295 32.6986 33.3787 33.1486 33.6099 33.5266C33.8412 33.9046 34.2038 34.184 34.6282 34.3114L37.0188 35.032L37.2748 35.3077C35.2651 36.3693 32.951 36.7061 30.722 36.2613C28.4931 35.8164 26.4855 34.6171 25.0372 32.8654ZM38.8002 34.3062L38.3337 33.8047C38.1161 33.5705 37.84 33.3984 37.5338 33.3063L35.1455 32.5857L35.4778 30.7749L38.951 29.471L41.1451 31.6279C40.5309 32.6544 39.7365 33.5617 38.8002 34.3062Z" fill="white" />
        </g>
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_108_2725" x="-0.610156" y="0.485382" width="66.5279" height="73.7282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="3.6" operator="erode" in="SourceAlpha" result="effect1_dropShadow_108_2725" />
        <feOffset dy="3.6" />
        <feGaussianBlur stdDeviation="1.8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2725" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="7.2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_108_2725" />
        <feOffset dy="14.4" />
        <feGaussianBlur stdDeviation="7.2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_108_2725" result="effect2_dropShadow_108_2725" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_108_2725" result="shape" />
      </filter>
      <filter id="filter1_d_108_2725" x="7.76074" y="5.65573" width="49.7871" height="49.7876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2725" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_2725" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_108_2725" x1="58.7486" y1="50.8854" x2="8.34863" y2="0.485384" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3CC9A8" />
        <stop offset="0.56" stop-color="#4A90E2" />
      </linearGradient>
      <linearGradient id="paint1_linear_108_2725" x1="10.5217" y1="6.35129" x2="55.1443" y2="47.9625" gradientUnits="userSpaceOnUse">
        <stop stop-color="#08307D" />
        <stop offset="1" stop-color="#61E6CD" />
      </linearGradient>
      <clipPath id="clip0_108_2725"><rect x="8.34863" y="0.485382" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.34863 0.485382)" fill="white" /></clipPath>
    </defs>
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg width="66" height="74" viewBox="0 0 66 74" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_dd_108_2733)">
      <g clip-path="url(#clip0_108_2733)">
        <rect x="8.32227" y="0.500565" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.32227 0.500565)" fill="url(#paint0_linear_108_2733)" />
        <g filter="url(#filter1_d_108_2733)">
          <path opacity="0.2" d="M42.8034 18.8152L42.5835 25.1113C42.2066 35.9047 32.2184 38.2576 32.2184 38.2576C32.2184 38.2576 22.4187 35.2137 22.7956 24.4203L23.0155 18.1242C23.0238 17.8856 23.1265 17.6601 23.3011 17.4973C23.4757 17.3346 23.7078 17.2478 23.9463 17.2561L41.9354 17.8843C42.1739 17.8926 42.3994 17.9954 42.5622 18.17C42.725 18.3445 42.8117 18.5766 42.8034 18.8152Z" fill="white" />
          <path d="M41.9667 16.9848L23.9776 16.3566C23.5005 16.34 23.0363 16.5135 22.6872 16.8391C22.3381 17.1647 22.1326 17.6156 22.1159 18.0927L21.896 24.3889C21.689 30.3163 24.4328 34.0087 26.7712 36.0625C29.2898 38.2735 31.8439 39.0831 31.9553 39.1174C32.1084 39.1649 32.2714 39.1706 32.4275 39.1339C32.541 39.1075 35.1419 38.4779 37.812 36.4481C40.2812 34.5621 43.2759 31.0701 43.4829 25.1427L43.7027 18.8466C43.7194 18.3695 43.5458 17.9053 43.2203 17.5561C42.8947 17.207 42.4438 17.0015 41.9667 16.9848ZM41.684 25.0799C41.5384 29.2477 39.8845 32.5772 36.7682 34.9741C35.4117 36.0138 33.8827 36.8064 32.2512 37.3154C30.6799 36.7044 29.2279 35.8228 27.961 34.7105C24.9837 32.0962 23.5485 28.6454 23.6949 24.4517L23.9148 18.1555L41.9038 18.7837L41.684 25.0799ZM27.4394 27.9213C27.2765 27.7466 27.1897 27.5144 27.198 27.2757C27.2063 27.037 27.3092 26.8114 27.4838 26.6485C27.6585 26.4856 27.8907 26.3988 28.1294 26.4072C28.3681 26.4155 28.5937 26.5183 28.7565 26.693L30.7465 28.8281L36.604 23.3648C36.6905 23.2842 36.792 23.2213 36.9028 23.1799C37.0135 23.1385 37.1314 23.1193 37.2495 23.1234C37.3677 23.1276 37.4839 23.1549 37.5915 23.204C37.6992 23.253 37.7961 23.3228 37.8767 23.4093C37.9574 23.4957 38.0202 23.5973 38.0616 23.708C38.103 23.8188 38.1222 23.9366 38.1181 24.0548C38.1139 24.173 38.0866 24.2892 38.0375 24.3968C37.9885 24.5044 37.9187 24.6013 37.8323 24.682L31.3162 30.7583C31.2298 30.839 31.1283 30.9019 31.0175 30.9433C30.9067 30.9848 30.7889 31.004 30.6707 30.9999C30.5524 30.9957 30.4362 30.9683 30.3286 30.9193C30.221 30.8702 30.1241 30.8004 30.0435 30.7138L27.4394 27.9213Z" fill="white" />
        </g>
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_108_2733" x="-0.636523" y="0.500565" width="66.5279" height="73.7282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="3.6" operator="erode" in="SourceAlpha" result="effect1_dropShadow_108_2733" />
        <feOffset dy="3.6" />
        <feGaussianBlur stdDeviation="1.8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2733" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="7.2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_108_2733" />
        <feOffset dy="14.4" />
        <feGaussianBlur stdDeviation="7.2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.125156 0 0 0 0 0.30701 0 0 0 0 0.514844 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_108_2733" result="effect2_dropShadow_108_2733" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_108_2733" result="shape" />
      </filter>
      <filter id="filter1_d_108_2733" x="7.7334" y="5.67093" width="49.7871" height="49.7876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_2733" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_2733" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_108_2733" x1="10.4954" y1="6.36647" x2="55.1179" y2="47.9777" gradientUnits="userSpaceOnUse">
        <stop stop-color="#08307D" />
        <stop offset="1" stop-color="#61E6CD" />
      </linearGradient>
      <clipPath id="clip0_108_2733"><rect x="8.32227" y="0.500565" width="50.4" height="50.4" rx="25.2" transform="rotate(2 8.32227 0.500565)" fill="white" /></clipPath>
    </defs>
  </svg>
);

// --- 2. Configuration & Features Data ---

const features = [
  {
    icon: <ClockIcon />,
    title: "60+ Years",
    description: "Combined Expertise",
  },
  {
    icon: <TrendingUpIcon />,
    title: "3x-5x ROI",
    description: "Guarantee",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "50+ States",
    description: "Served Growing Worldwide",
  },
  {
    icon: <GlobeIcon />,
    title: "$35M+",
    description: "Recovered to date",
  },
];

const MoreServices = () => {
  const primaryBlue = "#6BA9EF";
  const primaryDark = "#1C2C40";
  const lightBg = "#FFFFFF";

  const crossBackgroundStyle = {
    backgroundColor: lightBg,
    backgroundImage: `linear-gradient(to right, rgba(200, 200, 200, 0.4) 1px, transparent 1px), 
                        linear-gradient(to bottom, rgba(200, 200, 200, 0.4) 1px, transparent 1px)`,
    backgroundSize: "50px 50px",
    height: "80%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    borderRadius: "50px",
  };

  const cardBlurStyle = {
    position: "relative",
    zIndex: 10,
    width: "calc(50vw - 24px)",
    maxWidth: "202.5px",
    aspectRatio: "1 / 1",
    transform: "rotate(3deg)",
    borderRadius: "28.8px",
    paddingTop: "28.8px",
    paddingRight: "21.6px",
    paddingBottom: "18px",
    paddingLeft: "21.6px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    transition: "transform 0.3s ease",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  return (
    <section id="more-services" className="bg-[#F7FCFC] py-20 px-4 sm:px-8 lg:px-16 flex justify-center">
      <FontLoader />
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === Left Column: Content === */}
          <div className="lg:pr-12 text-left">
            <div
              className="inline-block px-4 py-2 mb-6 rounded-full bg-white border border-[#E9F3FA] text-sm font-semibold"
              style={{ color: primaryBlue, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" }}
            >
              About FinServe360
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-[2.7rem] font-extrabold leading-none tracking-tight mb-8"
              style={{ color: primaryDark, fontFamily: "sans-serif" }}
            >
              <span style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontStyle: "italic" }}>
                More Than a
              </span>{" "}
              Service
              <span className="block">Provider — Your Long-</span>
              <span className="block">Term Advocate</span>
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We deliver tailored financial solutions that unlock cash flow, cut
              invisible costs, and revive your bottom line.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              With over <b className="text-gray-800">60+ years of combined expertise</b>, 
              we act as trusted advisors across many industries — leveraging our unique relationships 
              to free up capital and position your business for long term profitability. From optimizing 
              expenses to opening doors to new growth opportunities, we are excited to see what new 
              milestones we can achieve together.
            </p>

            <a href="https://calendly.com/colin-finserve360/profit-recovery-audit">
              <button
                className="text-white font-medium cursor-pointer px-5 sm:px-6 py-2.5 sm:py-3 rounded-[16px] shadow-lg text-sm sm:text-base transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%), linear-gradient(0deg, #2CB59C, #2CB59C), linear-gradient(0deg, #4794EB, #4794EB)",
                  boxShadow: "0px -8px 16px 0px #FFFFFF7A inset, 0px 6px 20px 0px #0000001A",
                }}
              >
                Schedule Your Profit Recovery Audit
              </button>
            </a>
          </div>

          {/* === Right Column: Feature Cards === */}
          <div className="relative h-full min-h-[500px] lg:min-h-0">
            <div style={crossBackgroundStyle} className="rounded-xl" />

            <div className="grid grid-cols-2 gap-[16px] p-2 sm:gap-[21.6px] sm:p-4 lg:p-0 relative z-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-between cursor-pointer transition hover:scale-[1.03] mx-auto"
                  style={cardBlurStyle}
                >
                  <div
                    className="absolute inset-0 rounded-[28.8px] pointer-events-none"
                    style={{
                      padding: "0.9px",
                      background: "linear-gradient(133deg, #003182 7.85%, #00E9CD 93.5%)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  <div className="mb-4">
                    {React.cloneElement(feature.icon, {
                      className: "w-15 h-15 sm:w-20 sm:h-20",
                    })}
                  </div>

                  <div className="mt-auto relative z-10">
                    <h3
                      className="text-xl sm:text-2xl font-extrabold mb-1"
                      style={{
                        background: "linear-gradient(90deg, #062765 0%, #61E6CD 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServices;