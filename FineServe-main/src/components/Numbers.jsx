import React from "react";

// --- Custom SVG Icon Components (Restored to Original Structures) ---

// 1. Dollar Sign Icon (Money Bill Trend Up equivalent)
const CustomDollarIcon = ({ className }) => (
  <svg
    width="81"
    height="93"
    viewBox="0 0 81 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <rect
      x="4.33301"
      y="4"
      width="72"
      height="72"
      stroke="#4CA8FF"
      strokeOpacity="0.32"
      style={{ stroke: "#4CA8FF", strokeOpacity: "0.32" }}
    />
    <foreignObject x="-12.667" y="-13" width="106" height="106">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(12px)",
          clipPath: "url(#bgblur_0_164_406_clip_path)",
          height: "100%",
          width: "100%",
        }}></div>
    </foreignObject>
    <g filter="url(#filter0_dd_164_406)" data-figma-bg-blur-radius="24">
      <rect
        x="12.333"
        y="12"
        width="56"
        height="56"
        rx="16"
        fill="#4CA8FF"
        fillOpacity="0.74"
        style={{ fill: "#4CA8FF", fillOpacity: "0.74" }}
        shapeRendering="crispEdges"
      />
      <rect
        x="12.333"
        y="12"
        width="56"
        height="56"
        rx="16"
        stroke="#4CA8FF"
        strokeOpacity="0.94"
        style={{ stroke: "#4CA8FF", strokeOpacity: "0.94" }}
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <g filter="url(#filter1_d_164_406)">
        <path
          opacity="0.2"
          d="M26.333 32.6514V47.6514C37.788 42.0551 42.878 52.9451 54.333 47.3489V32.3489C42.878 37.9451 37.788 27.0551 26.333 32.6514ZM40.333 43.0001C39.7397 43.0001 39.1596 42.8242 38.6663 42.4945C38.1729 42.1649 37.7884 41.6963 37.5614 41.1482C37.3343 40.6 37.2749 39.9968 37.3907 39.4148C37.5064 38.8329 37.7921 38.2984 38.2117 37.8788C38.6312 37.4592 39.1658 37.1735 39.7477 37.0578C40.3297 36.942 40.9329 37.0014 41.4811 37.2285C42.0292 37.4555 42.4978 37.8401 42.8274 38.3334C43.1571 38.8268 43.333 39.4068 43.333 40.0001C43.333 40.7958 43.0169 41.5588 42.4543 42.1214C41.8917 42.684 41.1287 43.0001 40.333 43.0001Z"
          fill="white"
        />
        <path
          d="M54.863 31.4999C54.719 31.4101 54.5546 31.3583 54.3851 31.3496C54.2156 31.3408 54.0467 31.3754 53.8943 31.4499C48.528 34.0749 44.6955 32.8449 40.6443 31.5474C36.3943 30.1862 31.988 28.7799 25.9005 31.7524C25.7304 31.834 25.5869 31.962 25.4865 32.1217C25.386 32.2814 25.3328 32.4663 25.333 32.6549V47.6462C25.333 47.8158 25.3761 47.9827 25.4584 48.1311C25.5406 48.2795 25.6593 48.4045 25.8032 48.4944C25.9471 48.5843 26.1115 48.6361 26.281 48.6449C26.4504 48.6538 26.6193 48.6194 26.7718 48.5449C32.138 45.9199 35.9705 47.1499 40.028 48.4474C42.433 49.2162 44.883 49.9999 47.653 49.9999C49.7893 49.9999 52.1193 49.5349 54.7668 48.2424C54.9349 48.1603 55.0767 48.0327 55.1759 47.874C55.2751 47.7154 55.3278 47.532 55.328 47.3449V32.3537C55.3295 32.1836 55.2876 32.0159 55.2062 31.8665C55.1249 31.7171 55.0067 31.5909 54.863 31.4999ZM53.333 46.7087C48.258 48.9799 44.5518 47.7949 40.638 46.5437C38.233 45.7749 35.783 44.9912 33.013 44.9912C31.0669 45.0006 29.1406 45.3825 27.338 46.1162V33.2912C32.413 31.0199 36.1193 32.2049 40.033 33.4562C43.9468 34.7074 47.9755 35.9999 53.333 33.8862V46.7087ZM40.333 35.9999C39.5419 35.9999 38.7685 36.2345 38.1107 36.674C37.4529 37.1136 36.9402 37.7383 36.6375 38.4692C36.3347 39.2001 36.2555 40.0043 36.4099 40.7803C36.5642 41.5562 36.9452 42.2689 37.5046 42.8283C38.064 43.3877 38.7767 43.7687 39.5526 43.9231C40.3286 44.0774 41.1328 43.9982 41.8637 43.6954C42.5946 43.3927 43.2194 42.88 43.6589 42.2222C44.0984 41.5644 44.333 40.791 44.333 39.9999C44.333 38.939 43.9116 37.9216 43.1614 37.1715C42.4113 36.4213 41.3939 35.9999 40.333 35.9999ZM40.333 41.9999C39.9374 41.9999 39.5508 41.8826 39.2219 41.6628C38.893 41.4431 38.6366 41.1307 38.4852 40.7653C38.3339 40.3998 38.2943 39.9977 38.3714 39.6097C38.4486 39.2218 38.6391 38.8654 38.9188 38.5857C39.1985 38.306 39.5549 38.1155 39.9428 38.0383C40.3308 37.9612 40.7329 38.0008 41.0984 38.1522C41.4638 38.3035 41.7762 38.5599 41.9959 38.8888C42.2157 39.2177 42.333 39.6043 42.333 39.9999C42.333 40.5303 42.1223 41.0391 41.7472 41.4141C41.3721 41.7892 40.8634 41.9999 40.333 41.9999ZM31.333 35.9999V41.9999C31.333 42.2651 31.2277 42.5195 31.0401 42.707C30.8526 42.8946 30.5982 42.9999 30.333 42.9999C30.0678 42.9999 29.8134 42.8946 29.6259 42.707C29.4384 42.5195 29.333 42.2651 29.333 41.9999V35.9999C29.333 35.7347 29.4384 35.4803 29.6259 35.2928C29.8134 35.1053 30.0678 34.9999 30.333 34.9999C30.5982 34.9999 30.8526 35.1053 31.0401 35.2928C31.2277 35.4803 31.333 35.7347 31.333 35.9999ZM49.333 43.9999V37.9999C49.333 37.7347 49.4384 37.4803 49.6259 37.2928C49.8134 37.1053 50.0678 36.9999 50.333 36.9999C50.5982 36.9999 50.8526 37.1053 51.0401 37.2928C51.2277 37.4803 51.333 37.7347 51.333 37.9999V43.9999C51.333 44.2651 51.2277 44.5195 51.0401 44.707C50.8526 44.8946 50.5982 44.9999 50.333 44.9999C50.0678 44.9999 49.8134 44.8946 49.6259 44.707C49.4384 44.5195 49.333 44.2651 49.333 43.9999Z"
          fill="white"
        />
      </g>
    </g>
    <rect x="72.333" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="72.333" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.333008" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.333008" width="8" height="8" rx="4" fill="#66B5FF" />
    <defs>
      <filter
        id="filter0_dd_164_406"
        x="-12.667"
        y="-13"
        width="106"
        height="106"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_164_406"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_406"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="8"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_164_406"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_164_406"
          result="effect2_dropShadow_164_406"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_164_406"
          result="shape"
        />
      </filter>
      <clipPath
        id="bgblur_0_164_406_clip_path"
        transform="translate(12.667 13)">
        <rect x="12.333" y="12" width="56" height="56" rx="16" />
      </clipPath>
      <filter
        id="filter1_d_164_406"
        x="14.333"
        y="18"
        width="52"
        height="52"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_406"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_164_406"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// 2. Line Chart Icon (Chart Line equivalent)
const CustomLineChartIcon = ({ className }) => (
  <svg
    width="80"
    height="93"
    viewBox="0 0 80 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <rect
      x="4"
      y="4"
      width="72"
      height="72"
      stroke="#4CA8FF"
      strokeOpacity="0.32"
      style={{ stroke: "#4CA8FF", strokeOpacity: "0.32" }}
    />
    <foreignObject x="-13" y="-13" width="106" height="106">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(12px)",
          clipPath: "url(#bgblur_0_164_395_clip_path)",
          height: "100%",
          width: "100%",
        }}></div>
    </foreignObject>
    <g filter="url(#filter0_dd_164_395)" data-figma-bg-blur-radius="24">
      <rect
        x="12"
        y="12"
        width="56"
        height="56"
        rx="16"
        fill="#4CA8FF"
        fillOpacity="0.74"
        style={{ fill: "#4CA8FF", fillOpacity: "0.74" }}
        shapeRendering="crispEdges"
      />
      <rect
        x="12"
        y="12"
        width="56"
        height="56"
        rx="16"
        stroke="#4CA8FF"
        strokeOpacity="0.94"
        style={{ stroke: "#4CA8FF", strokeOpacity: "0.94" }}
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <g filter="url(#filter1_d_164_395)">
        <path opacity="0.2" d="M53 31V39L45 31H53Z" fill="white" />
        <path
          d="M52.9996 30H44.9996C44.8017 29.9998 44.6082 30.0584 44.4436 30.1683C44.279 30.2782 44.1507 30.4344 44.075 30.6172C43.9992 30.8 43.9794 31.0012 44.0181 31.1953C44.0567 31.3894 44.1521 31.5676 44.2921 31.7075L47.5858 35L40.9996 41.5863L36.7071 37.2925C36.6142 37.1995 36.5039 37.1258 36.3825 37.0754C36.2611 37.0251 36.131 36.9992 35.9996 36.9992C35.8682 36.9992 35.738 37.0251 35.6166 37.0754C35.4952 37.1258 35.385 37.1995 35.2921 37.2925L26.2921 46.2925C26.1044 46.4801 25.999 46.7346 25.999 47C25.999 47.2654 26.1044 47.5199 26.2921 47.7075C26.4797 47.8951 26.7342 48.0006 26.9996 48.0006C27.2649 48.0006 27.5194 47.8951 27.7071 47.7075L35.9996 39.4137L40.2921 43.7075C40.385 43.8005 40.4952 43.8742 40.6166 43.9246C40.738 43.9749 40.8682 44.0008 40.9996 44.0008C41.131 44.0008 41.2611 43.9749 41.3825 43.9246C41.5039 43.8742 41.6142 43.8005 41.7071 43.7075L48.9996 36.4138L52.2921 39.7075C52.4319 39.8475 52.6102 39.9429 52.8043 39.9815C52.9984 40.0202 53.1996 40.0004 53.3824 39.9246C53.5652 39.8489 53.7214 39.7206 53.8313 39.556C53.9412 39.3914 53.9997 39.1979 53.9996 39V31C53.9996 30.7348 53.8942 30.4804 53.7067 30.2929C53.5192 30.1054 53.2648 30 52.9996 30ZM51.9996 36.5863L47.4133 32H51.9996V36.5863Z"
          fill="white"
        />
      </g>
    </g>
    <rect x="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="72" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect width="8" height="8" rx="4" fill="#66B5FF" />
    <defs>
      <filter
        id="filter0_dd_164_395"
        x="-13"
        y="-13"
        width="106"
        height="106"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_164_395"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_395"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="8"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_164_395"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_164_395"
          result="effect2_dropShadow_164_395"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_164_395"
          result="shape"
        />
      </filter>
      <clipPath id="bgblur_0_164_395_clip_path" transform="translate(13 13)">
        <rect x="12" y="12" width="56" height="56" rx="16" />
      </clipPath>
      <filter
        id="filter1_d_164_395"
        x="14"
        y="18"
        width="52"
        height="52"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_395"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_164_395"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// 3. Clock/Hourglass Icon (Hourglass Half equivalent)
const CustomClockIcon = ({ className }) => (
  <svg
    width="81"
    height="93"
    viewBox="0 0 81 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <rect
      x="4.66602"
      y="4"
      width="72"
      height="72"
      stroke="#4CA8FF"
      strokeOpacity="0.32"
      style={{ stroke: "#4CA8FF", strokeOpacity: "0.32" }}
    />
    <foreignObject x="-12.334" y="-13" width="106" height="106">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(12px)",
          clipPath: "url(#bgblur_0_164_417_clip_path)",
          height: "100%",
          width: "100%",
        }}></div>
    </foreignObject>
    <g filter="url(#filter0_dd_164_417)" data-figma-bg-blur-radius="24">
      <rect
        x="12.666"
        y="12"
        width="56"
        height="56"
        rx="16"
        fill="#4CA8FF"
        fillOpacity="0.74"
        style={{ fill: "#4CA8FF", fillOpacity: "0.74" }}
        shapeRendering="crispEdges"
      />
      <rect
        x="12.666"
        y="12"
        width="56"
        height="56"
        rx="16"
        stroke="#4CA8FF"
        strokeOpacity="0.94"
        style={{ stroke: "#4CA8FF", strokeOpacity: "0.94" }}
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <g filter="url(#filter1_d_164_417)">
        <path
          opacity="0.2"
          d="M47.2812 35L40.6663 40L34 35H47.2812Z"
          fill="white"
        />
        <path
          d="M49.666 33.455V29C49.666 28.4696 49.4553 27.9609 49.0802 27.5858C48.7052 27.2107 48.1964 27 47.666 27H33.666C33.1356 27 32.6269 27.2107 32.2518 27.5858C31.8767 27.9609 31.666 28.4696 31.666 29V33.5C31.6667 33.8104 31.7393 34.1164 31.8781 34.394C32.0169 34.6716 32.2181 34.9132 32.466 35.1L38.9998 40L32.466 44.9C32.2181 45.0868 32.0169 45.3284 31.8781 45.606C31.7393 45.8836 31.6667 46.1896 31.666 46.5V51C31.666 51.5304 31.8767 52.0391 32.2518 52.4142C32.6269 52.7893 33.1356 53 33.666 53H47.666C48.1964 53 48.7052 52.7893 49.0802 52.4142C49.4553 52.0391 49.666 51.5304 49.666 51V46.545C49.6653 46.2358 49.5933 45.931 49.4557 45.6541C49.318 45.3773 49.1184 45.1359 48.8723 44.9487L42.3248 40L48.8723 35.0513C49.1184 34.8641 49.318 34.6227 49.4557 34.3459C49.5933 34.069 49.6653 33.7642 49.666 33.455ZM33.666 29H47.666V33.455L46.9448 34H34.3323L33.666 33.5V29ZM40.666 38.75L36.9998 36H44.2998L40.666 38.75ZM47.666 51H33.666V46.5L39.666 42V45C39.666 45.2652 39.7714 45.5196 39.9589 45.7071C40.1464 45.8946 40.4008 46 40.666 46C40.9312 46 41.1856 45.8946 41.3731 45.7071C41.5607 45.5196 41.666 45.2652 41.666 45V42.01L47.666 46.545V51Z"
          fill="white"
        />
      </g>
    </g>
    <rect x="72.666" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="72.666" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.666016" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.666016" width="8" height="8" rx="4" fill="#66B5FF" />
    <defs>
      <filter
        id="filter0_dd_164_417"
        x="-12.334"
        y="-13"
        width="106"
        height="106"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_164_417"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_417"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="8"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_164_417"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_164_417"
          result="effect2_dropShadow_164_417"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_164_417"
          result="shape"
        />
      </filter>
      <clipPath
        id="bgblur_0_164_417_clip_path"
        transform="translate(12.334 13)">
        <rect x="12.666" y="12" width="56" height="56" rx="16" />
      </clipPath>
      <filter
        id="filter1_d_164_417"
        x="14.666"
        y="18"
        width="52"
        height="52"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_417"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_164_417"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// 4. Globe Icon (Globe Americas equivalent)
const CustomGlobeIcon = ({ className }) => (
  <svg
    width="81"
    height="93"
    viewBox="0 0 81 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <rect
      x="4.33301"
      y="4"
      width="72"
      height="72"
      stroke="#4CA8FF"
      strokeOpacity="0.32"
      style={{ stroke: "#4CA8FF", strokeOpacity: "0.32" }}
    />
    <foreignObject x="-12.667" y="-13" width="106" height="106">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(12px)",
          clipPath: "url(#bgblur_0_164_520_clip_path)",
          height: "100%",
          width: "100%",
        }}></div>
    </foreignObject>
    <g filter="url(#filter0_dd_164_520)" data-figma-bg-blur-radius="24">
      <rect
        x="12.333"
        y="12"
        width="56"
        height="56"
        rx="16"
        fill="#4CA8FF"
        fillOpacity="0.74"
        style={{ fill: "#4CA8FF", fillOpacity: "0.74" }}
        shapeRendering="crispEdges"
      />
      <rect
        x="12.333"
        y="12"
        width="56"
        height="56"
        rx="16"
        stroke="#4CA8FF"
        strokeOpacity="0.94"
        style={{ stroke: "#4CA8FF", strokeOpacity: "0.94" }}
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <g filter="url(#filter1_d_164_520)">
        <path
          opacity="0.2"
          d="M51.2079 45.0887C50.3454 46.9274 49.0322 48.5183 47.3904 49.7137L46.2204 48.5425C46.095 48.4166 45.9384 48.3265 45.7666 48.2812L43.0829 47.5737C42.845 47.5111 42.6385 47.3631 42.5029 47.1579C42.3673 46.9526 42.3121 46.7046 42.3479 46.4612L42.6454 44.4362C42.6705 44.2654 42.7395 44.1041 42.8455 43.9678C42.9515 43.8316 43.091 43.7251 43.2504 43.6587L47.0579 42.0762C47.2338 42.0032 47.4268 41.982 47.6144 42.015C47.802 42.048 47.9762 42.1338 48.1166 42.2625L51.2079 45.0887ZM44.3191 37.125L47.0904 33.9C47.2462 33.7192 47.3322 33.4886 47.3329 33.25V30.25C45.0142 28.5823 42.1768 27.7964 39.3305 28.0333C36.4843 28.2703 33.8159 29.5147 31.8049 31.5428C29.794 33.571 28.5723 36.2498 28.3595 39.098C28.1468 41.9462 28.9568 44.7768 30.6441 47.0812L31.8841 46.2662C32.0215 46.1755 32.1343 46.0523 32.2125 45.9075C32.2908 45.7627 32.3322 45.6008 32.3329 45.4362L32.3591 40.9075C32.3605 40.7112 32.4191 40.5196 32.5279 40.3562L35.1454 36.4437C35.2204 36.3323 35.3172 36.2372 35.4298 36.164C35.5425 36.0908 35.6687 36.041 35.801 36.0177C35.9333 35.9943 36.069 35.9979 36.1999 36.0281C36.3308 36.0584 36.4542 36.1147 36.5629 36.1937L39.0391 37.8187C39.2476 37.9689 39.5056 38.0337 39.7604 38L43.6929 37.4675C43.9367 37.4342 44.1596 37.3123 44.3191 37.125Z"
          fill="white"
        />
        <path
          d="M40.333 27C37.7619 27 35.2484 27.7624 33.1106 29.1909C30.9728 30.6194 29.3065 32.6497 28.3226 35.0251C27.3386 37.4006 27.0812 40.0144 27.5828 42.5362C28.0844 45.0579 29.3225 47.3743 31.1406 49.1924C32.9587 51.0105 35.2751 52.2486 37.7968 52.7502C40.3186 53.2518 42.9325 52.9944 45.3079 52.0104C47.6833 51.0265 49.7137 49.3603 51.1421 47.2224C52.5706 45.0846 53.333 42.5712 53.333 40C53.3294 36.5533 51.9586 33.2488 49.5214 30.8116C47.0842 28.3744 43.7797 27.0036 40.333 27ZM40.333 29C42.4642 28.9977 44.5496 29.6182 46.333 30.785V33.25L43.5618 36.4675L39.628 37L39.5893 36.9725L37.1305 35.365C36.9125 35.2114 36.666 35.103 36.4055 35.0461C36.145 34.9892 35.8758 34.985 35.6136 35.0337C35.3514 35.0824 35.1017 35.183 34.8789 35.3296C34.6562 35.4762 34.4651 35.6659 34.3168 35.8875L31.6993 39.8C31.4812 40.126 31.3638 40.509 31.3618 40.9013L31.333 45.43L30.9243 45.6987C29.9138 44.0304 29.3651 42.1234 29.3344 40.1732C29.3037 38.2229 29.7921 36.2996 30.7495 34.6003C31.707 32.901 33.0991 31.4868 34.7831 30.5027C36.4671 29.5186 38.3825 29 40.333 29ZM32.1193 47.3088L32.4343 47.1025C32.7093 46.9211 32.9353 46.6745 33.0921 46.3847C33.2489 46.0948 33.3317 45.7708 33.333 45.4412L33.3593 40.9125L35.9793 37C35.9921 37.0099 36.0054 37.0191 36.0193 37.0275L38.478 38.6362C38.8901 38.9271 39.3971 39.0508 39.8968 38.9825L43.833 38.4487C44.3184 38.384 44.7632 38.1433 45.083 37.7725L47.8543 34.5525C48.1642 34.1894 48.334 33.7274 48.333 33.25V32.4587C49.6856 33.8897 50.6286 35.658 51.0634 37.5785C51.4981 39.499 51.4086 41.501 50.8043 43.375L48.7868 41.53C48.5063 41.2726 48.1582 41.1005 47.7833 41.0341C47.4084 40.9677 47.0224 41.0096 46.6705 41.155L42.863 42.7362C42.5446 42.8699 42.2661 43.0833 42.0541 43.3559C41.8422 43.6284 41.7041 43.951 41.653 44.2925L41.3543 46.3162C41.2825 46.8034 41.3929 47.2998 41.6643 47.7106C41.9358 48.1214 42.3492 48.4176 42.8255 48.5425L45.508 49.25L45.803 49.5462C43.6125 50.8031 41.0559 51.2667 38.5635 50.8592C36.0712 50.4517 33.7954 49.1978 32.1193 47.3088ZM47.458 48.375L46.9205 47.8363C46.6698 47.5846 46.3566 47.4042 46.013 47.3137L43.333 46.6063L43.6318 44.5825L47.438 43L49.958 45.31C49.3157 46.4737 48.4688 47.5119 47.458 48.375Z"
          fill="white"
        />
      </g>
    </g>
    <rect x="72.333" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="72.333" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.333008" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.333008" width="8" height="8" rx="4" fill="#66B5FF" />
    <defs>
      <filter
        id="filter0_dd_164_520"
        x="-12.667"
        y="-13"
        width="106"
        height="106"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_164_520"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_520"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="8"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_164_520"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_164_520"
          result="effect2_dropShadow_164_520"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_164_520"
          result="shape"
        />
      </filter>
      <clipPath
        id="bgblur_0_164_520_clip_path"
        transform="translate(12.667 13)">
        <rect x="12.333" y="12" width="56" height="56" rx="16" />
      </clipPath>
      <filter
        id="filter1_d_164_520"
        x="14.333"
        y="18"
        width="52"
        height="52"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_520"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_164_520"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// 5. Handshake Icon (Handshake equivalent)
const CustomHandshakeIcon = ({ className }) => (
  <svg
    width="80"
    height="93"
    viewBox="0 0 80 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <rect
      x="4"
      y="4"
      width="72"
      height="72"
      stroke="#4CA8FF"
      strokeOpacity="0.32"
      style={{ stroke: "#4CA8FF", strokeOpacity: "0.32" }}
    />
    <foreignObject x="-13" y="-13" width="106" height="106">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(12px)",
          clipPath: "url(#bgblur_0_164_509_clip_path)",
          height: "100%",
          width: "100%",
        }}></div>
    </foreignObject>
    <g filter="url(#filter0_dd_164_509)" data-figma-bg-blur-radius="24">
      <rect
        x="12"
        y="12"
        width="56"
        height="56"
        rx="16"
        fill="#4CA8FF"
        fillOpacity="0.74"
        style={{ fill: "#4CA8FF", fillOpacity: "0.74" }}
        shapeRendering="crispEdges"
      />
      <rect
        x="12"
        y="12"
        width="56"
        height="56"
        rx="16"
        stroke="#4CA8FF"
        strokeOpacity="0.94"
        style={{ stroke: "#4CA8FF", strokeOpacity: "0.94" }}
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <g filter="url(#filter1_d_164_509)">
        <path
          opacity="0.2"
          d="M49 43L44 48L36 46L29 41L33.085 32.8287L40 31L46.915 32.8287L46.95 33H42L36.2925 38.5363C36.1864 38.6423 36.1055 38.7709 36.0558 38.9124C36.0062 39.054 35.989 39.2049 36.0055 39.354C36.0221 39.5031 36.072 39.6465 36.1515 39.7737C36.2311 39.9009 36.3382 40.0086 36.465 40.0888C38.6538 41.4875 41.625 41.3912 44 39L49 43Z"
          fill="white"
        />
        <path
          d="M55.7874 37.4888L52.5974 31.1063C52.4799 30.8714 52.3173 30.6619 52.1188 30.4898C51.9203 30.3178 51.6899 30.1865 51.4407 30.1035C51.1915 30.0205 50.9284 29.9874 50.6664 30.0061C50.4044 30.0248 50.1486 30.095 49.9137 30.2125L46.8049 31.7663L40.2562 30.0338C40.0882 29.99 39.9117 29.99 39.7437 30.0338L33.1949 31.7663L30.0862 30.2125C29.8513 30.095 29.5955 30.0248 29.3335 30.0061C29.0715 29.9874 28.8084 30.0205 28.5592 30.1035C28.31 30.1865 28.0796 30.3178 27.8811 30.4898C27.6826 30.6619 27.52 30.8714 27.4024 31.1063L24.2124 37.4875C24.0949 37.7224 24.0248 37.9782 24.0061 38.2402C23.9873 38.5022 24.0204 38.7653 24.1034 39.0145C24.1864 39.2637 24.3177 39.4942 24.4898 39.6926C24.6618 39.8911 24.8713 40.0538 25.1062 40.1713L28.4812 41.86L35.4174 46.8138C35.5197 46.8865 35.6345 46.9395 35.7562 46.97L43.7562 48.97C43.9237 49.012 44.0993 49.0099 44.2658 48.9639C44.4323 48.9179 44.584 48.8296 44.7062 48.7075L51.5899 41.8225L54.8924 40.1713C55.3666 39.9339 55.727 39.5181 55.8946 39.015C56.0622 38.512 56.0232 37.963 55.7862 37.4888H55.7874ZM48.9262 41.66L44.6249 38.215C44.4323 38.0607 44.1893 37.9831 43.9428 37.9972C43.6964 38.0113 43.4638 38.116 43.2899 38.2913C41.0637 40.5338 38.5824 40.25 36.9999 39.25L42.4049 34H46.3812L49.7824 40.8013L48.9262 41.66ZM29.1912 32L31.7499 33.2775L28.5537 39.6588L25.9999 38.3825L29.1912 32ZM43.6912 46.8913L36.4274 45.0763L30.2774 40.6838L33.7774 33.6838L39.9999 32.035L41.2249 32.3588L35.5999 37.8188L35.5899 37.83C35.3782 38.0418 35.2167 38.2984 35.1174 38.5808C35.0181 38.8633 34.9834 39.1645 35.0161 39.4622C35.0487 39.7599 35.1478 40.0464 35.3059 40.3007C35.4641 40.5549 35.6774 40.7704 35.9299 40.9313C38.4999 42.5725 41.6012 42.3063 44.0437 40.3063L47.4999 43.0825L43.6912 46.8913ZM51.4412 39.6575L48.2512 33.2825L50.8087 32L53.9999 38.3825L51.4412 39.6575ZM40.4724 51.2413C40.4184 51.4574 40.2938 51.6493 40.1183 51.7865C39.9428 51.9238 39.7265 51.9985 39.5037 51.9988C39.4215 51.9987 39.3397 51.9886 39.2599 51.9688L34.0512 50.6663C33.9294 50.6362 33.8144 50.5832 33.7124 50.51L30.4187 48.1575C30.2162 47.9985 30.0828 47.7675 30.0463 47.5126C30.0099 47.2577 30.0731 46.9986 30.2229 46.7892C30.3728 46.5797 30.5976 46.4362 30.8506 46.3884C31.1036 46.3406 31.3653 46.3922 31.5812 46.5325L34.7199 48.775L39.7499 50.03C40.0072 50.0944 40.2283 50.2583 40.3648 50.4856C40.5012 50.713 40.5417 50.9853 40.4774 51.2425L40.4724 51.2413Z"
          fill="white"
        />
      </g>
    </g>
    <rect x="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="72" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect width="8" height="8" rx="4" fill="#66B5FF" />
    <defs>
      <filter
        id="filter0_dd_164_509"
        x="-13"
        y="-13"
        width="106"
        height="106"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_164_509"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_509"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="8"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_164_509"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_164_509"
          result="effect2_dropShadow_164_509"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_164_509"
          result="shape"
        />
      </filter>
      <clipPath id="bgblur_0_164_509_clip_path" transform="translate(13 13)">
        <rect x="12" y="12" width="56" height="56" rx="16" />
      </clipPath>
      <filter
        id="filter1_d_164_509"
        x="14"
        y="18"
        width="52"
        height="52"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_509"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_164_509"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// 6. Shield Check Icon (Shield Halved equivalent)
const CustomShieldCheckIcon = ({ className }) => (
  <svg
    width="81"
    height="93"
    viewBox="0 0 81 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <rect
      x="4.66602"
      y="4"
      width="72"
      height="72"
      stroke="#4CA8FF"
      strokeOpacity="0.32"
      style={{ stroke: "#4CA8FF", strokeOpacity: "0.32" }}
    />
    <foreignObject x="-12.334" y="-13" width="106" height="106">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(12px)",
          clipPath: "url(#bgblur_1_164_461_clip_path)",
          height: "100%",
          width: "100%",
        }}></div>
    </foreignObject>
    <g filter="url(#filter0_dd_164_461)" data-figma-bg-blur-radius="24">
      <g clipPath="url(#clip0_164_461)">
        <rect
          x="12.666"
          y="12"
          width="56"
          height="56"
          rx="16"
          fill="#4CA8FF"
          fillOpacity="0.74"
          style={{ fill: "#4CA8FF", fillOpacity: "0.74" }}
          shapeRendering="crispEdges"
        />
        <g filter="url(#filter1_d_164_461)">
          <path
            opacity="0.2"
            d="M51.666 31V38C51.666 50 40.666 53 40.666 53C40.666 53 29.666 50 29.666 38V31C29.666 30.7348 29.7714 30.4804 29.9589 30.2929C30.1464 30.1054 30.4008 30 30.666 30H50.666C50.9312 30 51.1856 30.1054 51.3731 30.2929C51.5607 30.4804 51.666 30.7348 51.666 31Z"
            fill="white"
          />
          <path
            d="M50.666 29H30.666C30.1356 29 29.6269 29.2107 29.2518 29.5858C28.8767 29.9609 28.666 30.4696 28.666 31V38C28.666 44.59 31.856 48.5838 34.5323 50.7738C37.4148 53.1313 40.2823 53.9313 40.4073 53.965C40.5791 54.0118 40.7604 54.0118 40.9323 53.965C41.0573 53.9313 43.921 53.1313 46.8073 50.7738C49.476 48.5838 52.666 44.59 52.666 38V31C52.666 30.4696 52.4553 29.9609 52.0802 29.5858C51.7052 29.2107 51.1964 29 50.666 29ZM50.666 38C50.666 42.6338 48.9585 46.395 45.591 49.1775C44.1251 50.3846 42.458 51.324 40.666 51.9525C38.8975 51.335 37.251 50.4123 35.801 49.2263C32.3935 46.4388 30.666 42.6625 30.666 38V31H50.666V38ZM34.9585 41.7075C34.7709 41.5199 34.6655 41.2654 34.6655 41C34.6655 40.7346 34.7709 40.4801 34.9585 40.2925C35.1462 40.1049 35.4007 39.9994 35.666 39.9994C35.9314 39.9994 36.1859 40.1049 36.3735 40.2925L38.666 42.5863L44.9585 36.2925C45.0514 36.1996 45.1617 36.1259 45.2831 36.0756C45.4045 36.0253 45.5346 35.9994 45.666 35.9994C45.7974 35.9994 45.9275 36.0253 46.0489 36.0756C46.1703 36.1259 46.2806 36.1996 46.3735 36.2925C46.4664 36.3854 46.5401 36.4957 46.5904 36.6171C46.6407 36.7385 46.6666 36.8686 46.6666 37C46.6666 37.1314 46.6407 37.2615 46.5904 37.3829C46.5401 37.5043 46.4664 37.6146 46.3735 37.7075L39.3735 44.7075C39.2806 44.8005 39.1704 44.8742 39.049 44.9246C38.9276 44.9749 38.7974 45.0008 38.666 45.0008C38.5346 45.0008 38.4045 44.9749 38.2831 44.9246C38.1617 44.8742 38.0514 44.8005 37.9585 44.7075L34.9585 41.7075Z"
            fill="white"
          />
        </g>
      </g>
      <rect
        x="12.666"
        y="12"
        width="56"
        height="56"
        rx="16"
        stroke="#4CA8FF"
        strokeOpacity="0.94"
        style={{ stroke: "#4CA8FF", strokeOpacity: "0.94" }}
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
    </g>
    <rect x="72.666" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="72.666" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.666016" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
    <rect x="0.666016" width="8" height="8" rx="4" fill="#66B5FF" />
    <defs>
      <filter
        id="filter0_dd_164_461"
        x="-12.334"
        y="-13"
        width="106"
        height="106"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_164_461"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_461"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="8"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_164_461"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_164_461"
          result="effect2_dropShadow_164_461"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_164_461"
          result="shape"
        />
      </filter>
      <clipPath
        id="bgblur_1_164_461_clip_path"
        transform="translate(12.334 13)">
        <rect x="12.666" y="12" width="56" height="56" rx="16" />
      </clipPath>
      <filter
        id="filter1_d_164_461"
        x="15.291"
        y="20.25"
        width="50.75"
        height="50.75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="5.625" />
        <feGaussianBlur stdDeviation="4.6875" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.419608 0 0 0 0 0.662745 0 0 0 0 0.937255 0 0 0 0.14 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_164_461"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_164_461"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_164_461">
        <rect x="12.666" y="12" width="56" height="56" rx="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// --- Data for the value cards, updated to use Custom SVG Components ---
const cardData = [
  {
    id: 1,
    title: "$650–850",
    description: "Average savings per W2 employee each year",
    icon: <CustomDollarIcon />,
  },
  {
    id: 2,
    title: "3x–5x ROI",
    description: "Guaranteed results from every audit",
    icon: <CustomLineChartIcon />,
  },
  {
    id: 3,
    title: "60+ Years",
    description: "Combined expertise across finance & operations",
    icon: <CustomClockIcon />,
  },
  {
    id: 4,
    title: "15–45%",
    description:
      "Average shipping savings through our direct-to-carrier relationships",
    icon: <CustomGlobeIcon />,
  },
  {
    id: 5,
    title: "100% Refund",
    description: "Risk-free guarantee if we don't deliver",
    icon: <CustomHandshakeIcon />,
  },
  {
    id: 6,
    title: "A+ Rated",
    description: "Backed by innovative industry experts",
    icon: <CustomShieldCheckIcon />,
  },
];

const StatCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-3xl p-8 relative overflow-hidden" 
    style={{
      background: 'radial-gradient(circle at center, white 40%, #2cb59c29 120%)',
      border: '12px solid white',
      boxShadow: '0 0 1px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.2)'
    }}>
      {/* Icon with decorative corner dots and connecting lines */}
      <div className="flex justify-center mb-6 relative">
        <div className="w-16 h-16  flex items-center justify-center relative">

          {/* The unique icon for each card */}
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3
          className="text-3xl font-bold mb-2 pb-1"
          style={{
            background: 'linear-gradient(90deg, #062765 0%, #61E6CD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          // Used to render the <br /> tag in the title correctly
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};


const Numbers = () => {
  return (
    <div className="bg-white py-5 lg:-mt-20 px-6 relative overflow-hidden">
      {/* Subtle grid background with gradient mask */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 200, 200, 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)'
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header (Unchanged) */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-medium border border-blue-200">
              The Impact We Deliver
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="italic font-light">Numbers</span> That Prove Our Value
          </h2>
          <p className="text-gray-600 text-lg">
            Every engagement with FinServe360 creates measurable savings and stronger bottom lines.
          </p>
        </div>

        {/* Cards Grid - Now mapping the data to the reusable StatCard component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <StatCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
