import React from 'react';

// --- SVG Icons Components (Re-using provided SVGs) ---
// Icon 1: Transfer / Transactions (Mapped to Shipping & Logistics)
const IconTransfer = () => (
    <svg width="80" height="93" viewBox="0 0 80 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="72" height="72" stroke="#4CA8FF" strokeOpacity="0.32" style={{stroke:'#4CA8FF', strokeOpacity:0.32}} />
        <foreignObject x="-13" y="-13" width="106" height="106">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(12px)', clipPath:'url(#bgblur_0_303_4607_clip_path)', height:'100%', width:'100%'}}></div>
        </foreignObject>
        <g filter="url(#filter0_dd_303_4607)" data-figma-bg-blur-radius="24">
            <rect x="12" y="12" width="56" height="56" rx="16" fill="#4CA8FF" fillOpacity="0.74" style={{fill:'#4CA8FF', fillOpacity:0.74}} shapeRendering="crispEdges"/>
            <rect x="12" y="12" width="56" height="56" rx="16" stroke="#4CA8FF" strokeOpacity="0.94" style={{stroke:'#4CA8FF', strokeOpacity:0.94}} strokeWidth="2" shapeRendering="crispEdges"/>
            <g filter="url(#filter1_d_303_4607)">
                <path opacity="0.2" d="M26 33H39V47H37C37 46.2044 36.6839 45.4413 36.1213 44.8787C35.5587 44.3161 34.7956 44 34 44C33.2044 44 32.4413 44.3161 31.8787 44.8787C31.3161 45.4413 31 46.2044 31 47C31 46.2044 30.6839 45.4413 30.1213 44.8787C29.5587 44.3161 28.7956 44 28 44C27.2044 44 26.4413 44.3161 25.8787 44.8787C25.3161 45.4413 25 46.2044 25 47V34C25 33.7348 25.1054 33.4804 25.2929 33.2929C25.4804 33.1054 25.7348 33 26 33ZM51 37V36C51 34.4087 50.3679 32.8826 49.2426 31.7574C48.1174 30.6321 46.5913 30 45 30H44C43.7348 30 43.4804 30.1054 43.2929 30.2929C43.1054 30.4804 43 30.7348 43 31V47H49C49 46.2044 49.3161 45.4413 49.8787 44.8787C50.4413 44.3161 51.2044 44 52 44C52.7956 44 53.5587 44.3161 54.1213 44.8787C54.6839 45.4413 55 46.2044 55 47V41C55 39.9391 54.5786 38.9217 53.8284 38.1716C53.0783 37.4214 52.0609 37 51 37Z" fill="white" />
                <path d="M52 36.1V36C51.998 34.1441 51.2599 32.3648 49.9476 31.0524C48.6352 29.7401 46.8559 29.002 45 29H44C43.4696 29 42.9609 29.2107 42.5858 29.5858C42.2107 29.9609 42 30.4696 42 31V46H40V33C40 32.7348 39.8946 32.4804 39.7071 32.2929C39.5196 32.1054 39.2652 32 39 32H26C25.4696 32 24.9609 32.2107 24.5858 32.5858C24.2107 32.9609 24 33.4696 24 34V47C24.0009 47.8121 24.249 48.6047 24.7113 49.2724C25.1735 49.9401 25.8281 50.4513 26.5879 50.738C27.3477 51.0246 28.1768 51.0733 28.9649 50.8774C29.753 50.6815 30.4628 50.2503 31 49.6412C31.4801 50.1867 32.0998 50.591 32.7924 50.8109C33.485 51.0307 34.2245 51.0577 34.9313 50.889C35.6381 50.7202 36.2856 50.3621 36.8042 49.8531C37.3228 49.3442 37.693 48.7035 37.875 48H48.125C48.3668 48.9445 48.9453 49.7681 49.7516 50.3162C50.558 50.8642 51.5367 51.0988 52.5039 50.976C53.4711 50.8532 54.3601 50.3814 55.0039 49.6492C55.6477 48.917 56.0019 47.9749 56 47V41C55.9986 39.8478 55.6 38.7313 54.8713 37.8387C54.1427 36.9461 53.1286 36.3321 52 36.1ZM44 31H45C46.3261 31 47.5979 31.5268 48.5355 32.4645C49.4732 33.4021 50 34.6739 50 36V37C50 37.2652 50.1054 37.5196 50.2929 37.7071C50.4804 37.8946 50.7348 38 51 38C51.7956 38 52.5587 38.3161 53.1213 38.8787C53.6839 39.4413 54 40.2043 54 41V43.5387C53.3929 43.1851 52.7026 42.9991 52 43C51.1132 43.0008 50.2517 43.2958 49.5505 43.8387C48.8493 44.3815 48.3479 45.1417 48.125 46H44V31ZM38 34V46H37.875C37.693 45.2965 37.3228 44.6558 36.8042 44.1468C36.2856 43.6379 35.6381 43.2798 34.9313 43.111C34.2245 42.9423 33.485 42.9693 32.7924 43.1891C32.0998 43.409 31.4801 43.8133 31 44.3587C30.3907 43.6638 29.559 43.2021 28.647 43.0525C27.735 42.9029 26.7993 43.0748 26 43.5387V34H38ZM28 49C27.6044 49 27.2178 48.8827 26.8889 48.6629C26.56 48.4432 26.3036 48.1308 26.1522 47.7654C26.0009 47.3999 25.9613 46.9978 26.0384 46.6098C26.1156 46.2219 26.3061 45.8655 26.5858 45.5858C26.8655 45.3061 27.2219 45.1156 27.6098 45.0384C27.9978 44.9613 28.3999 45.0009 28.7654 45.1522C29.1308 45.3036 29.4432 45.56 29.6629 45.8889C29.8827 46.2178 30 46.6044 30 47C30 47.5304 29.7893 48.0391 29.4142 48.4142C29.0391 48.7893 28.5304 49 28 49ZM34 49C33.6044 49 33.2178 48.8827 32.8889 48.6629C32.56 48.4432 32.3036 48.1308 32.1522 47.7654C32.0009 47.3999 31.9613 46.9978 32.0384 46.6098C32.1156 46.2219 32.3061 45.8655 32.5858 45.5858C32.8655 45.3061 33.2219 45.1156 33.6098 45.0384C33.9978 44.9613 34.3999 45.0009 34.7654 45.1522C35.1308 45.3036 35.4432 45.56 35.6629 45.8889C35.8827 46.2178 36 46.6044 36 47C36 47.5304 35.7893 48.0391 35.4142 48.4142C35.0391 48.7893 34.5304 49 34 49ZM52 49C51.6044 49 51.2178 48.8827 50.8889 48.6629C50.56 48.4432 50.3036 48.1308 50.1522 47.7654C50.0009 47.3999 49.9613 46.9978 50.0384 46.6098C50.1156 46.2219 50.3061 45.8655 50.5858 45.5858C50.8655 45.3061 51.2219 45.1156 51.6098 45.0384C51.9978 44.9613 52.3999 45.0009 52.7654 45.1522C53.1308 45.3036 53.4432 45.56 53.6629 45.8889C53.8827 46.2178 54 46.6044 54 47C54 47.5304 53.7893 48.0391 53.4142 48.4142C53.0391 48.7893 52.5304 49 52 49Z" fill="white" />
            </g>
        </g>
        <rect x="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect x="72" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect y="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect width="8" height="8" rx="4" fill="#66B5FF" />
        <defs>
            <filter id="filter0_dd_303_4607" x="-13" y="-13" width="106" height="106" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_303_4607"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4607"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow_303_4607"/>
                <feOffset dy="16"/>
                <feGaussianBlur stdDeviation="8"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_303_4607" result="effect2_dropShadow_303_4607"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_303_4607" result="shape"/>
            </filter>
            <clipPath id="bgblur_0_303_4607_clip_path" transform="translate(13 13)">
                <rect x="12" y="12" width="56" height="56" rx="16"/>
            </clipPath>
            <filter id="filter1_d_303_4607" x="14" y="18" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4607"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_4607" result="shape"/>
            </filter>
        </defs>
    </svg>
);

// Icon 2: Document / Management (Mapped to Merchant Processing)
const IconDocument = () => (
    <svg width="80" height="93" viewBox="0 0 80 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="72" height="72" stroke="#4CA8FF" strokeOpacity="0.32" style={{stroke:'#4CA8FF', strokeOpacity:0.32}}/>
        <foreignObject x="-13" y="-13" width="106" height="106">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(12px)', clipPath:'url(#bgblur_0_303_4618_clip_path)', height:'100%', width:'100%'}}></div>
        </foreignObject>
        <g filter="url(#filter0_dd_303_4618)" data-figma-bg-blur-radius="24">
            <rect x="12" y="12" width="56" height="56" rx="16" fill="#4CA8FF" fillOpacity="0.74" style={{fill:'#4CA8FF', fillOpacity:0.74}} shapeRendering="crispEdges"/>
            <rect x="12" y="12" width="56" height="56" rx="16" stroke="#4CA8FF" strokeOpacity="0.94" style={{stroke:'#4CA8FF', strokeOpacity:0.94}} strokeWidth="2" shapeRendering="crispEdges"/>
            <g filter="url(#filter1_d_303_4618)">
                <path opacity="0.2" d="M53 36V48C53 48.2652 52.8946 48.5196 52.7071 48.7071C52.5196 48.8946 52.2652 49 52 49H28C27.7348 49 27.4804 48.8946 27.2929 48.7071C27.1054 48.5196 27 48.2652 27 48V36H53Z" fill="white" />
                <path d="M52 30H28C27.4696 30 26.9609 30.2107 26.5858 30.5858C26.2107 30.9609 26 31.4696 26 32V48C26 48.5304 26.2107 49.0391 26.5858 49.4142C26.9609 49.7893 27.4696 50 28 50H52C52.5304 50 53.0391 49.7893 53.4142 49.4142C53.7893 49.0391 54 48.5304 54 48V32C54 31.4696 53.7893 30.9609 53.4142 30.5858C53.0391 30.2107 52.5304 30 52 30ZM52 32V35H28V32H52ZM52 48H28V37H52V48ZM50 45C50 45.2652 49.8946 45.5196 49.7071 45.7071C49.5196 45.8946 49.2652 46 49 46H45C44.7348 46 44.4804 45.8946 44.2929 45.7071C44.1054 45.5196 44 45.2652 44 45C44 44.7348 44.1054 44.4804 44.2929 44.2929C44.4804 44.1054 44.7348 44 45 44H49C49.2652 44 49.5196 44.1054 49.7071 44.2929C49.8946 44.4804 50 44.7348 50 45ZM42 45C42 45.2652 41.8946 45.5196 41.7071 45.7071C41.5196 45.8946 41.2652 46 41 46H39C38.7348 46 38.4804 45.8946 38.2929 45.7071C38.1054 45.5196 38 45.2652 38 45C38 44.7348 38.1054 44.4804 38.2929 44.2929C38.4804 44.1054 38.7348 44 39 44H41C41.2652 44 41.5196 44.1054 41.7071 44.2929C41.8946 44.4804 42 44.7348 42 45Z" fill="white" />
            </g>
        </g>
        <rect x="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect x="72" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect y="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect width="8" height="8" rx="4" fill="#66B5FF" />
        <defs>
            <filter id="filter0_dd_303_4618" x="-13" y="-13" width="106" height="106" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_303_4618"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4618"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow_303_4618"/>
                <feOffset dy="16"/>
                <feGaussianBlur stdDeviation="8"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_303_4618" result="effect2_dropShadow_303_4618"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_303_4618" result="shape"/>
            </filter>
            <clipPath id="bgblur_0_303_4618_clip_path" transform="translate(13 13)">
                <rect x="12" y="12" width="56" height="56" rx="16"/>
            </clipPath>
            <filter id="filter1_d_303_4618" x="14" y="18" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4618"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_4618" result="shape"/>
            </filter>
        </defs>
    </svg>
);

// Icon 3: Security / Lock (Mapped to Payroll Optimization)
const IconVault = () => (
    <svg width="80" height="93" viewBox="0 0 80 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="72" height="72" stroke="#4CA8FF" strokeOpacity="0.32" style={{stroke:'#4CA8FF', strokeOpacity:0.32}}/>
        <foreignObject x="-13" y="-13" width="106" height="106">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(12px)', clipPath:'url(#bgblur_0_303_4629_clip_path)', height:'100%', width:'100%'}}></div>
        </foreignObject>
        <g filter="url(#filter0_dd_303_4629)" data-figma-bg-blur-radius="24">
            <rect x="12" y="12" width="56" height="56" rx="16" fill="#4CA8FF" fillOpacity="0.74" style={{fill:'#4CA8FF', fillOpacity:0.74}} shapeRendering="crispEdges"/>
            <rect x="12" y="12" width="56" height="56" rx="16" stroke="#4CA8FF" strokeOpacity="0.94" style={{stroke:'#4CA8FF', strokeOpacity:0.94}} strokeWidth="2" shapeRendering="crispEdges"/>
            <g filter="url(#filter1_d_303_4629)">
                <path opacity="0.2" d="M52 38.7888V49C52 49.2652 51.8946 49.5196 51.7071 49.7071C51.5196 49.8947 51.2652 50 51 50H29C28.7348 50 28.4804 49.8947 28.2929 49.7071C28.1054 49.5196 28 49.2652 28 49V38.7888C31.6469 40.8985 35.7868 42.0063 40 42C44.2132 42.0067 48.3532 40.8988 52 38.7888Z" fill="white" />
                <path d="M37 38C37 37.7348 37.1054 37.4804 37.2929 37.2929C37.4804 37.1054 37.7348 37.7348 38 37H42C42.2652 37 42.5196 37.1054 42.7071 37.2929C42.8946 37.4804 43 37.7348 43 38C43 38.2652 42.8946 38.5196 42.7071 38.7071C42.5196 38.8946 42.2652 39 42 39H38C37.7348 39 37.4804 38.8946 37.2929 38.7071C37.1054 38.5196 37 38.2652 37 38ZM53 33V49C53 49.5304 52.7893 50.0391 52.4142 50.4142C52.0391 50.7893 51.5304 51 51 51H29C28.4696 51 27.9609 50.7893 27.5858 50.4142C27.2107 50.0391 27 49.5304 27 49V33C27 32.4696 27.2107 31.9609 27.5858 31.5858C27.9609 31.2107 28.4696 31 29 31H34V30C34 29.2044 34.3161 28.4413 34.8787 27.8787C35.4413 27.3161 36.2044 27 37 27H43C43.7956 27 44.5587 27.3161 45.1213 27.8787C45.6839 28.4413 46 29.2044 46 30V31H51C51.5304 31 52.0391 31.2107 52.4142 31.5858C52.7893 31.9609 53 32.4696 53 33ZM36 31H44V30C44 29.7348 43.8946 29.4804 43.7071 29.2929C43.5196 29.1054 43.2652 29 43 29H37C36.7348 29 36.4804 29.1054 36.2929 29.2929C36.1054 29.4804 36 29.7348 36 30V31ZM29 33V38.2025C32.3755 40.0389 36.1573 41.0007 40 41C43.8429 41.0007 47.6247 40.0385 51 38.2013V33H29ZM51 49V40.4538C47.5751 42.1292 43.8127 43.0001 40 43C36.1873 43.0007 32.4249 42.1302 29 40.455V49H51Z" fill="white" />
            </g>
        </g>
        <rect x="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect x="72" y="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect y="72" width="8" height="8" rx="4" fill="#66B5FF" />
        <rect width="8" height="8" rx="4" fill="#66B5FF" />
        <defs>
            <filter id="filter0_dd_303_4629" x="-13" y="-13" width="106" height="106" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_303_4629"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4629"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow_303_4629"/>
                <feOffset dy="16"/>
                <feGaussianBlur stdDeviation="8"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_303_4629" result="effect2_dropShadow_303_4629"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_303_4629" result="shape"/>
            </filter>
            <clipPath id="bgblur_0_303_4629_clip_path" transform="translate(13 13)">
                <rect x="12" y="12" width="56" height="56" rx="16"/>
            </clipPath>
            <filter id="filter1_d_303_4629" x="14" y="18" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.658824 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4629"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_4629" result="shape"/>
            </filter>
        </defs>
    </svg>
);

// Feature Item Component - Customized for the required light-mode design
const FeatureItem = ({ icon: Icon, title }) => (
    <div className="flex flex-col items-center text-center px-4 py-8 md:py-0 w-full md:w-1/3">
        <div className="w-20 h-20 mb-6 flex items-center justify-center flex-shrink-0">
            <Icon />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {title}
        </h3>
    </div>
);

// Separator Component (Vertical line visible only on desktop)
const FeatureSeparator = () => (
    <div className="hidden md:flex flex-shrink-0 w-px bg-gray-200" style={{ height: '150px' }}></div>
);


const Features = () => {
    // Injecting SF Pro compatible font stack using system fonts, prioritizing SF Pro on compatible systems.
    const fontStyle = `
        .sf-pro-font {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
    `;

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 sf-pro-font">
            {/* Custom font style injection */}
            <style dangerouslySetInnerHTML={{ __html: fontStyle }} />

            <div className="max-w-6xl w-full mx-auto py-16 sm:py-24">
                
                {/* Header Section */}
                <div className="text-center mb-16 px-4">
                    {/* Small Blue Badge */}
                    <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full tracking-wide">
                        What We Do
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        What We Do
                    </h1>

                    {/* Main Description */}
                    <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
                        Most companies unknowingly lose 6-7 figures every year in hidden operational costs.
                    </p>
                    <p className="mt-2 text-lg text-gray-700 max-w-3xl mx-auto">
                        At FinServe360, our Profit Recovery Audit identifies and recovers these profits through data-driven analysis across shipping, merchant processing, and payroll tax savings, and other areas of the business
                    </p>
                </div>

                {/* Feature Grid with Separators */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mt-12 mb-16 px-4">
                    
                    {/* Feature 1: Shipping & Logistics */}
                    <FeatureItem icon={IconTransfer} title="Shipping & Logistics" />

                    {/* Separator 1 (Visible on desktop only) */}
                    <FeatureSeparator />
                    {/* Horizontal Divider for Mobile */}
                    <div className="md:hidden w-48 h-px bg-gray-200 my-8"></div>


                    {/* Feature 2: Merchant Processing */}
                    <FeatureItem icon={IconDocument} title="Merchant Processing" />

                    {/* Separator 2 (Visible on desktop only) */}
                    <FeatureSeparator />
                    {/* Horizontal Divider for Mobile */}
                    <div className="md:hidden w-48 h-px bg-gray-200 my-8"></div>


                    {/* Feature 3: Payroll Optimization */}
                    <FeatureItem icon={IconVault} title="Payroll Optimization" />
                </div>

                {/* Footer Message */}
                <div className="text-center mt-12 px-4">
                    <p className="text-lg font-semibold text-gray-800">
                        Our audits deliver measurable results — <span className="text-blue-600 font-bold">typically within 14 days or less.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Features;
