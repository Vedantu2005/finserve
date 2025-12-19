import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { getArticles } from "../firebase";

// --- Custom SVG Icon Components ---

// 1. Facebook/Generic Circle Icon (UNCHANGED)
const CustomFacebookIcon = ({ className }) => (
  <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_261_159)">
      <path opacity="0.2" d="M35 17C35 19.3734 34.2962 21.6935 32.9776 23.6668C31.6591 25.6402 29.7849 27.1783 27.5922 28.0866C25.3995 28.9948 22.9867 29.2324 20.6589 28.7694C18.3312 28.3064 16.193 27.1635 14.5147 25.4853C12.8365 23.8071 11.6936 21.6689 11.2306 19.3411C10.7676 17.0133 11.0052 14.6005 11.9135 12.4078C12.8217 10.2151 14.3598 8.34094 16.3332 7.02236C18.3066 5.70379 20.6266 5 23 5C26.1826 5 29.2348 6.26428 31.4853 8.51472C33.7357 10.7652 35 13.8174 35 17Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
      <path d="M23 4C20.4288 4 17.9154 4.76244 15.7776 6.1909C13.6398 7.61935 11.9735 9.64968 10.9896 12.0251C10.0056 14.4006 9.74819 17.0144 10.2498 19.5362C10.7514 22.0579 11.9895 24.3743 13.8076 26.1924C15.6257 28.0105 17.9421 29.2486 20.4638 29.7502C22.9856 30.2518 25.5995 29.9944 27.9749 29.0104C30.3503 28.0265 32.3807 26.3603 33.8091 24.2224C35.2376 22.0846 36 19.5712 36 17C35.9964 13.5533 34.6256 10.2488 32.1884 7.81163C29.7512 5.37445 26.4467 4.00364 23 4ZM24 27.9538V20H27C27.2652 20 27.5196 19.8946 27.7071 19.7071C27.8946 19.5196 28 19.2652 28 19C28 18.7348 27.8946 18.4804 27.7071 18.2929C27.5196 18.1054 27.2652 18 27 18H24V15C24 14.4696 24.2107 13.9609 24.5858 13.5858C24.9609 13.2107 25.4696 13 26 13H28C28.2652 13 28.5196 12.8946 28.7071 12.7071C28.8946 12.5196 29 12.2652 29 12C29 11.7348 28.8946 11.4804 28.7071 11.2929C28.5196 11.1054 28.2652 11 28 11H26C24.9391 11 23.9217 11.4214 23.1716 12.1716C22.4214 12.9217 22 13.9391 22 15V18H19C18.7348 18 18.4804 18.1054 18.2929 18.2929C18.1054 18.4804 18 18.7348 18 19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20H22V27.9538C19.181 27.6964 16.5697 26.3622 14.7093 24.2287C12.8489 22.0952 11.8826 19.3266 12.0114 16.4988C12.1402 13.671 13.3542 11.0017 15.4009 9.04613C17.4475 7.09057 20.1693 5.9993 23 5.9993C25.8307 5.9993 28.5525 7.09057 30.5992 9.04613C32.6458 11.0017 33.8598 13.671 33.9886 16.4988C34.1174 19.3266 33.1511 22.0952 31.2907 24.2287C29.4303 26.3622 26.819 27.6964 24 27.9538Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
    </g>
    <defs>
      <filter id="filter0_d_261_159" x="-2.375" y="-2.75" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.625" />
        <feGaussianBlur stdDeviation="4.6875" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_159" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_159" result="shape" />
      </filter>
    </defs>
  </svg>
);

// 2. NEW: Instagram/Generic Square Icon
const CustomNewInstagramIcon = ({ className }) => (
  <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_261_164)">
      <path opacity="0.2" d="M29 5H17C15.4087 5 13.8826 5.63214 12.7574 6.75736C11.6321 7.88258 11 9.4087 11 11V23C11 24.5913 11.6321 26.1174 12.7574 27.2426C13.8826 28.3679 15.4087 29 17 29H29C30.5913 29 32.1174 28.3679 33.2426 27.2426C34.3679 26.1174 35 24.5913 35 23V11C35 9.4087 34.3679 7.88258 33.2426 6.75736C32.1174 5.63214 30.5913 5 29 5ZM23 22C22.0111 22 21.0444 21.7068 20.2221 21.1573C19.3999 20.6079 18.759 19.827 18.3806 18.9134C18.0022 17.9998 17.9031 16.9945 18.0961 16.0245C18.289 15.0546 18.7652 14.1637 19.4645 13.4645C20.1637 12.7652 21.0546 12.289 22.0245 12.0961C22.9945 11.9031 23.9998 12.0022 24.9134 12.3806C25.827 12.759 26.6079 13.3999 27.1573 14.2221C27.7068 15.0444 28 16.0111 28 17C28 18.3261 27.4732 19.5979 26.5355 20.5355C25.5979 21.4732 24.3261 22 23 22Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
      <path d="M29 4H17C15.1441 4.00199 13.3648 4.74012 12.0524 6.05245C10.7401 7.36477 10.002 9.14409 10 11V23C10.002 24.8559 10.7401 26.6352 12.0524 27.9476C13.3648 29.2599 15.1441 29.998 17 30H29C30.8559 29.998 32.6352 29.2599 33.9476 27.9476C35.2599 26.6352 35.998 24.8559 36 23V11C35.998 9.14409 35.2599 7.36477 33.9476 6.05245C32.6352 4.74012 30.8559 4.00199 29 4ZM34 23C34 24.3261 33.4732 25.5979 32.5355 26.5355C31.5979 27.4732 30.3261 28 29 28H17C15.6739 28 14.4021 27.4732 13.4645 26.5355C12.5268 25.5979 12 24.3261 12 23V11C12 9.67392 12.5268 8.40215 13.4645 7.46447C14.4021 6.52678 15.6739 6 17 6H29C30.3261 6 31.5979 6.52678 32.5355 7.46447C33.4732 8.40215 34 9.67392 34 11V23ZM23 11C21.8133 11 20.6533 11.3519 19.6666 12.0112C18.6799 12.6705 17.9108 13.6075 17.4567 14.7039C17.0026 15.8003 16.8838 17.0067 17.1153 18.1705C17.3468 19.3344 17.9182 20.4035 18.7574 21.2426C19.5965 22.0818 20.6656 22.6532 21.8295 22.8847C22.9933 23.1162 24.1997 22.9974 25.2961 22.5433C26.3925 22.0892 27.3295 21.3201 27.9888 20.3334C28.6481 19.3467 29 18.1867 29 17C28.9983 15.4092 28.3657 13.884 27.2408 12.7592C26.116 11.6343 24.5908 11.0017 23 11ZM23 21C22.2089 21 21.4355 20.7654 20.7777 20.3259C20.1199 19.8864 19.6072 19.2616 19.3045 18.5307C19.0017 17.7998 18.9225 16.9956 19.0769 16.2196C19.2312 15.4437 19.6122 14.731 20.1716 14.1716C20.731 13.6122 21.4437 13.2312 22.2196 13.0769C22.9956 12.9225 23.7998 13.0017 24.5307 13.3045C25.2616 13.6072 25.8864 14.1199 26.3259 14.7777C26.7654 15.4355 27 16.2089 27 17C27 18.0609 26.5786 19.0783 25.8284 19.8284C25.0783 20.5786 24.0609 21 23 21ZM31 10.5C31 10.7967 30.912 11.0867 30.7472 11.3334C30.5824 11.58 30.3481 11.7723 30.074 11.8858C29.7999 11.9994 29.4983 12.0291 29.2074 11.9712C28.9164 11.9133 28.6491 11.7704 28.4393 11.5607C28.2296 11.3509 28.0867 11.0836 28.0288 10.7926C27.9709 10.5017 28.0007 10.2001 28.1142 9.92597C28.2277 9.65189 28.42 9.41762 28.6666 9.2528C28.9133 9.08797 29.2033 9 29.5 9C29.8978 9 30.2794 9.15804 30.5607 9.43934C30.842 9.72064 31 10.1022 31 10.5Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
    </g>
    <defs>
      <filter id="filter0_d_261_164" x="-2.375" y="-2.75" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.625" />
        <feGaussianBlur stdDeviation="4.6875" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_164" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_164" result="shape" />
      </filter>
    </defs>
  </svg>
);


// 3. OLD: Instagram/Generic Square Icon (This will become the new LinkedIn Icon)
const CustomOldInstagramIcon = ({ className }) => (
  <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_261_169)">
      <path opacity="0.2" d="M35 6V28C35 28.2652 34.8946 28.5196 34.7071 28.7071C34.5196 28.8946 34.2652 29 34 29H12C11.7348 29 11.4804 28.8946 11.2929 28.7071C11.1054 28.5196 11 28.2652 11 28V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5H34C34.2652 5 34.5196 5.10536 34.7071 5.29289C34.8946 5.48043 35 5.73478 35 6Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
      <path d="M34 4H12C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6V28C10 28.5304 10.2107 29.0391 10.5858 29.4142C10.9609 29.7893 11.4696 30 12 30H34C34.5304 30 35.0391 29.7893 35.4142 29.4142C35.7893 29.0391 36 28.5304 36 28V6C36 5.46957 35.7893 4.96086 35.4142 4.58579C35.0391 4.21071 34.5304 4 34 4ZM34 28H12V6H34V28ZM19 15V23C19 23.2652 18.8946 23.5196 18.7071 23.7071C18.5196 23.8946 18.2652 24 18 24C17.7348 24 17.4804 23.8946 17.2929 23.7071C17.1054 23.5196 17 23.2652 17 23V15C17 14.7348 17.1054 14.4804 17.2929 14.2929C17.4804 14.1054 17.7348 14 18 14C18.2652 14 18.5196 14.1054 18.7071 14.2929C18.8946 14.4804 19 14.7348 19 15ZM30 18.5V23C30 23.2652 29.8946 23.5196 29.7071 23.7071C29.5196 23.8946 29.2652 24 29 24C28.7348 24 28.4804 23.8946 28.2929 23.7071C28.1054 23.5196 28 23.2652 28 23V18.5C28 17.837 27.7366 17.2011 27.2678 16.7322C26.7989 16.2634 26.163 16 25.5 16C24.837 16 24.2011 16.2634 23.7322 16.7322C23.2634 17.2011 23 17.837 23 18.5V23C23 23.2652 22.8946 23.5196 22.7071 23.7071C22.5196 23.8946 22.2652 24 22 24C21.7348 24 21.4804 23.8946 21.2929 23.7071C21.1054 23.5196 21 23.2652 21 23V15C21.0012 14.7551 21.0923 14.5191 21.256 14.3369C21.4197 14.1546 21.6446 14.0388 21.888 14.0114C22.1314 13.9839 22.3764 14.0468 22.5765 14.188C22.7767 14.3292 22.918 14.539 22.9738 14.7775C23.6502 14.3186 24.4389 14.0526 25.2552 14.0081C26.0714 13.9637 26.8844 14.1424 27.6067 14.5251C28.329 14.9078 28.9335 15.48 29.3551 16.1803C29.7768 16.8806 29.9997 17.6825 30 18.5ZM19.5 11.5C19.5 11.7967 19.412 12.0867 19.2472 12.3334C19.0824 12.58 18.8481 12.7723 18.574 12.8858C18.2999 12.9994 17.9983 13.0291 17.7074 12.9712C17.4164 12.9133 17.1491 12.7704 16.9393 12.5607C16.7296 12.3509 16.5867 12.0836 16.5288 11.7926C16.4709 11.5017 16.5006 11.2001 16.6142 10.926C16.7277 10.6519 16.92 10.4176 17.1666 10.2528C17.4133 10.088 17.7033 10 18 10C18.3978 10 18.7794 10.158 19.0607 10.4393C19.342 10.7206 19.5 11.1022 19.5 11.5Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
    </g>
    <defs>
      <filter id="filter0_d_261_169" x="-2.375" y="-2.75" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.625" />
        <feGaussianBlur stdDeviation="4.6875" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_169" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_169" result="shape" />
      </filter>
    </defs>
  </svg>
);


// 4. OLD: LinkedIn/Generic Diamond/Triangle Icon (This will become the new X Icon)
const CustomOldLinkedInIcon = ({ className }) => (
  <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_261_174)">
      <path opacity="0.2" d="M31 27H25L11 5H17L31 27Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
      <path d="M31.844 26.4638L24.019 14.1663L31.7403 5.6725C31.9149 5.47565 32.0049 5.21791 31.9907 4.95515C31.9766 4.69239 31.8595 4.44579 31.6647 4.26882C31.47 4.09185 31.2134 3.99876 30.9504 4.00974C30.6875 4.02073 30.4396 4.1349 30.2603 4.3275L22.9053 12.4175L17.844 4.46375C17.7538 4.32169 17.6291 4.20471 17.4816 4.12365C17.3341 4.04258 17.1686 4.00005 17.0003 4H11.0003C10.821 3.99991 10.6449 4.04803 10.4906 4.13932C10.3363 4.23062 10.2094 4.36172 10.1231 4.5189C10.0368 4.67609 9.99443 4.85357 10.0003 5.03278C10.0062 5.21198 10.0601 5.3863 10.1565 5.5375L17.9815 17.8337L10.2603 26.3337C10.1701 26.4306 10.1 26.5444 10.0542 26.6685C10.0083 26.7927 9.98754 26.9247 9.99306 27.0569C9.99858 27.1891 10.0303 27.3189 10.0864 27.4388C10.1424 27.5586 10.2217 27.6662 10.3196 27.7552C10.4176 27.8442 10.5322 27.9129 10.6569 27.9572C10.7815 28.0016 11.006 28.0208 11.0459 28.0137C11.178 28.0066 11.3075 27.9733 11.4267 27.9158C11.5458 27.8583 11.6524 27.7777 11.7403 27.6787L19.0953 19.5888L24.1565 27.5425C24.2475 27.6834 24.3725 27.7991 24.5199 27.8791C24.6673 27.959 24.8325 28.0006 25.0003 28H31.0003C31.1794 27.9999 31.3552 27.9518 31.5093 27.8606C31.6634 27.7693 31.7902 27.6384 31.8764 27.4814C31.9627 27.3244 32.0051 27.1472 31.9994 26.9681C31.9937 26.7891 31.9401 26.6149 31.844 26.4638ZM25.549 26L12.8215 6H16.4465L29.179 26H25.549Z" fill="#4CA8FF" style={{ fill: "#4CA8FF", fillOpacity: 1 }} />
    </g>
    <defs>
      <filter id="filter0_d_261_174" x="-4.375" y="-3.75" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.625" />
        <feGaussianBlur stdDeviation="4.6875" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_174" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_174" result="shape" />
      </filter>
    </defs>
  </svg>
);


// 5. X / Twitter Icon (Using the LinkedIn SVG for the third social icon and giving it a separate color logic)
const CustomOldXIcon = ({ className }) => (
  <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_261_174)">
      <path opacity="0.2" d="M31 27H25L11 5H17L31 27Z" fill="currentColor" style={{ fill: "currentColor", fillOpacity: 1 }} />
      <path d="M31.844 26.4638L24.019 14.1663L31.7403 5.6725C31.9149 5.47565 32.0049 5.21791 31.9907 4.95515C31.9766 4.69239 31.8595 4.44579 31.6647 4.26882C31.47 4.09185 31.2134 3.99876 30.9504 4.00974C30.6875 4.02073 30.4396 4.1349 30.2603 4.3275L22.9053 12.4175L17.844 4.46375C17.7538 4.32169 17.6291 4.20471 17.4816 4.12365C17.3341 4.04258 17.1686 4.00005 17.0003 4H11.0003C10.821 3.99991 10.6449 4.04803 10.4906 4.13932C10.3363 4.23062 10.2094 4.36172 10.1231 4.5189C10.0368 4.67609 9.99443 4.85357 10.0003 5.03278C10.0062 5.21198 10.0601 5.3863 10.1565 5.5375L17.9815 17.8337L10.2603 26.3337C10.1701 26.4306 10.1 26.5444 10.0542 26.6685C10.0083 26.7927 9.98754 26.9247 9.99306 27.0569C9.99858 27.1891 10.0303 27.3189 10.0864 27.4388C10.1424 27.5586 10.2217 27.6662 10.3196 27.7552C10.4176 27.8442 10.5322 27.9129 10.6569 27.9572C10.7815 28.0016 10.9138 28.0208 11.0459 28.0137C11.178 28.0066 11.3075 27.9733 11.4267 27.9158C11.5458 27.8583 11.6524 27.7777 11.7403 27.6787L19.0953 19.5888L24.1565 27.5425C24.2475 27.6834 24.3725 27.7991 24.5199 27.8791C24.6673 27.959 24.8325 28.0006 25.0003 28H31.0003C31.1794 27.9999 31.3552 27.9518 31.5093 27.8606C31.6634 27.7693 31.7902 27.6384 31.8764 27.4814C31.9627 27.3244 32.0051 27.1472 31.9994 26.9681C31.9937 26.7891 31.9401 26.6149 31.844 26.4638ZM25.549 26L12.8215 6H16.4465L29.179 26H25.549Z" fill="currentColor" style={{ fill: "currentColor", fillOpacity: 1 }} />
    </g>
    <defs>
      <filter id="filter0_d_261_174" x="-4.375" y="-3.75" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.625" />
        <feGaussianBlur stdDeviation="4.6875" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_174" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_174" result="shape" />
      </filter>
    </defs>
  </svg>
);


// 6. OLD: X / Twitter Icon (This will be the final X icon)
const CustomOldXIconFinal = ({ className }) => (
  <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_261_174)">
      <path opacity="0.2" d="M31 27H25L11 5H17L31 27Z" fill="currentColor" style={{ fill: "currentColor", fillOpacity: 1 }} />
      <path d="M31.844 26.4638L24.019 14.1663L31.7403 5.6725C31.9149 5.47565 32.0049 5.21791 31.9907 4.95515C31.9766 4.69239 31.8595 4.44579 31.6647 4.26882C31.47 4.09185 31.2134 3.99876 30.9504 4.00974C30.6875 4.02073 30.4396 4.1349 30.2603 4.3275L22.9053 12.4175L17.844 4.46375C17.7538 4.32169 17.6291 4.20471 17.4816 4.12365C17.3341 4.04258 17.1686 4.00005 17.0003 4H11.0003C10.821 3.99991 10.6449 4.04803 10.4906 4.13932C10.3363 4.23062 10.2094 4.36172 10.1231 4.5189C10.0368 4.67609 9.99443 4.85357 10.0003 5.03278C10.0062 5.21198 10.0601 5.3863 10.1565 5.5375L17.9815 17.8337L10.2603 26.3337C10.1701 26.4306 10.1 26.5444 10.0542 26.6685C10.0083 26.7927 9.98754 26.9247 9.99306 27.0569C9.99858 27.1891 10.0303 27.3189 10.0864 27.4388C10.1424 27.5586 10.2217 27.6662 10.3196 27.7552C10.4176 27.8442 10.5322 27.9129 10.6569 27.9572C10.7815 28.0016 10.9138 28.0208 11.0459 28.0137C11.178 28.0066 11.3075 27.9733 11.4267 27.9158C11.5458 27.8583 11.6524 27.7777 11.7403 27.6787L19.0953 19.5888L24.1565 27.5425C24.2475 27.6834 24.3725 27.7991 24.5199 27.8791C24.6673 27.959 24.8325 28.0006 25.0003 28H31.0003C31.1794 27.9999 31.3552 27.9518 31.5093 27.8606C31.6634 27.7693 31.7902 27.6384 31.8764 27.4814C31.9627 27.3244 32.0051 27.1472 31.9994 26.9681C31.9937 26.7891 31.9401 26.6149 31.844 26.4638ZM25.549 26L12.8215 6H16.4465L29.179 26H25.549Z" fill="currentColor" style={{ fill: "currentColor", fillOpacity: 1 }} />
    </g>
    <defs>
      <filter id="filter0_d_261_174" x="-4.375" y="-3.75" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.625" />
        <feGaussianBlur stdDeviation="4.6875" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_174" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_174" result="shape" />
      </filter>
    </defs>
  </svg>
);

// --- Main Component ---

export default function Article2() {
  const initialPosts = [
    {
      id: 1,
      image: "/assets/person1.png",
      title: "Uncovering Hidden Costs in Your Business",
      author: "Colin",
      category: "Cost Optimization",
      date: "Aug 2025",
      bgColor: "bg-blue-50",
      url: "/article/1", // route will be /article/:id
    },
    // {
    //   id: 2,
    //   image: "/assets/2personOnTable.png",
    //   title: "Securing the Best Merchant Processing Rates",
    //   author: "Colin",
    //   category: "Merchant Processing",
    //   date: "Aug 2025",
    //   bgColor: "bg-gray-50",
    //   url: "/article/2",
    // },
    // {
    //   id: 3,
    //   image: "/assets/person1.png",
    //   title: "Payroll Tax Savings Made Simple",
    //   author: "Colin",
    //   category: "Cost Optimization",
    //   date: "Aug 2025",
    //   bgColor: "bg-blue-50",
    //   url: "/article/3",
    // },
    // {
    //   id: 4,
    //   image: "/assets/2personOnTable.png",
    //   title: "Smart Shipping: Reduce Freight Costs in 2025",
    //   author: "Colin",
    //   category: "Merchant Processing",
    //   date: "Aug 2025",
    //   bgColor: "bg-gray-50",
    //   url: "/article/4",
    // },
    // {
    //   id: 5,
    //   image: "/assets/person1.png",
    //   title: "Profit Recovery Audits: What You Need to Know",
    //   author: "Colin",
    //   category: "Cost Optimization",
    //   date: "Aug 2025",
    //   bgColor: "bg-gray-50",
    //   url: "/article/5",
    // },
    // {
    //   id: 6,
    //   image: "/assets/2personOnTable.png",
    //   title: "Flexible Financing Options for Modern Businesses",
    //   author: "Colin",
    //   category: "Merchant Processing",
    //   date: "Aug 2025",
    //   bgColor: "bg-blue-50",
    //   url: "/article/6",
    // },
  ];

  const [blogPosts, setBlogPosts] = useState(initialPosts);

  useEffect(() => {
    let mounted = true
    async function fetchRemote() {
      try {
        const remote = await getArticles()
        if (!mounted) return
        if (remote && remote.length) {
          // Map remote docs into the same structure as the local mock
          const mapped = remote.map((r, idx) => ({
            id: r.id || idx,
            image: r.image || "/assets/person1.png",
            title: r.title || r.excerpt || 'Untitled',
            author: r.author || 'Admin',
            category: r.category || 'General',
            date: r.date || (r.createdAt ? new Date(r.createdAt).toLocaleDateString() : 'Unknown'),
            bgColor: 'bg-white',
            url: `/article/${r.id}`,
          }))
          setBlogPosts(mapped)
        }
      } catch (err) {
        // If Firestore not initialized or fails, keep default mock posts
        // console.warn('Could not load remote articles:', err.message)
      }
    }
    fetchRemote()
    return () => { mounted = false }
  }, [])

  return (
    <div className="bg-white py-16 px-6 font-sans">
      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Newsletter Subscription */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Subscribe to Our Newsletter for daily Insight
              </h3>
              <div className="flex flex-row items-stretch rounded-lg overflow-hidden mt-6 shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-3 bg-blue-50/50 border border-blue-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  style={{
                    background: "linear-gradient(90deg, #f0f8ff, #f8f8f8)",
                    borderRight: "none",
                    borderRadius: "0.5rem 0 0 0.5rem",
                    minWidth: "0",
                  }}
                />
                <a
                  href="https://calendly.com/colin-finserve360/profit-recovery-audit"
                  className="flex-shrink-0"
                >
                  <button
                    className="px-4 py-3 text-white font-semibold transition-all duration-300 flex justify-center items-center"
                    style={{
                      width: "120px",
                      height: "51px",
                      background:
                        "linear-gradient(271.48deg, #01ABFF -1.21%, #00D5B6 115.6%), linear-gradient(0deg, #1B96F2, #1B96F2)",
                      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
                      borderRadius: "0 0.5rem 0.5rem 0",
                    }}
                  >
                    Join Now
                  </button>
                </a>
              </div>

            </div>

            {/* Right Column: Follow Us */}
            <div className="lg:border-l pb-14 lg:border-gray-200 lg:pl-12 flex flex-col justify-start">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Follow Us
              </h3>
              <p className="text-gray-600 mb-4">
                Get the latest News & Inspiration
              </p>
              <div className="flex space-x-3">
                {/* <a
                  href="/articleDetail"
                  aria-label="Follow us on Facebook"
                  className="w-11 h-11 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  <CustomFacebookIcon className="w-full h-full" />
                </a>
                <a
                  href="/articleDetail"
                  aria-label="Follow us on New Instagram"
                  className="w-11 h-11 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  <CustomNewInstagramIcon className="w-full h-full" />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/finserve360/"
                  aria-label="Follow us on LinkedIn"
                  className="w-11 h-11 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  <CustomOldInstagramIcon className="w-full h-full" />
                </a>
                {/* <a
                  href="/articleDetail"
                  aria-label="Follow us on X"
                  className="w-11 h-11 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  <CustomOldLinkedInIcon className="w-full h-full" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.url}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:bg-[#4794EB1F] hover:shadow-xl hover:border-[#4794EB]">
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight min-h-[56px] transition-colors duration-300 group-hover:text-[#4794EB]">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>By {post.author}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>{post.category}</span>
                  </div>
                  {/* Icon for visual feedback on hover/click */}
                  <div className="text-gray-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#4794EB]">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="text-lg font-serif italic text-gray-900 hover:text-[#4794EB] underline transition-colors">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}