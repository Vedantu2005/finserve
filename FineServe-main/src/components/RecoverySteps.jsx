import React, { useState, useEffect } from 'react';

// --- SVG Icons Components (New Set) ---

// Icon 1: Secure Your Audit (Shield/Checkmark)
const IconShield = () => (
    <svg width="84" height="93" viewBox="0 0 84 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_d_303_4878)">
            <path opacity="0.2" d="M70.875 18.375V36.75C70.875 68.25 42 76.125 42 76.125C42 76.125 13.125 68.25 13.125 36.75L13.125 18.375C13.125 17.6788 13.4016 17.0111 13.8938 16.5188C14.3861 16.0266 15.0538 15.75 15.75 15.75L68.25 15.75C68.9462 15.75 69.6139 16.0266 70.1062 16.5188C70.5984 17.0111 70.875 17.6788 70.875 18.375Z" fill="#1979E6" />
            <path d="M68.25 13.125L15.75 13.125C14.3576 13.125 13.0223 13.6781 12.0377 14.6627C11.0531 15.6473 10.5 16.9826 10.5 18.375L10.5 36.75C10.5 54.0488 18.8737 64.5323 25.8989 70.2811C33.4655 76.4695 40.9927 78.5695 41.3208 78.6581C41.772 78.7809 42.2477 78.7809 42.6989 78.6581C43.027 78.5695 50.5444 76.4695 58.1208 70.2811C65.1263 64.5323 73.5 54.0488 73.5 36.75V18.375C73.5 16.9826 72.9469 15.6473 71.9623 14.6627C70.9777 13.6781 69.6424 13.125 68.25 13.125ZM68.25 36.75C68.25 48.9136 63.7678 58.7869 54.9281 66.0909C51.0801 69.2597 46.7038 71.7255 42 73.3753C37.3577 71.7543 33.0355 69.3322 29.2294 66.2189C20.2847 58.9017 15.75 48.9891 15.75 36.75V18.375L68.25 18.375V36.75ZM27.0178 46.4822C26.5253 45.9896 26.2485 45.3216 26.2485 44.625C26.2485 43.9284 26.5253 43.2604 27.0178 42.7678C27.5104 42.2753 28.1784 41.9985 28.875 41.9985C29.5716 41.9985 30.2396 42.2753 30.7322 42.7678L36.75 48.7889L53.2678 32.2678C53.5117 32.0239 53.8012 31.8305 54.1199 31.6985C54.4386 31.5665 54.7801 31.4985 55.125 31.4985C55.4699 31.4985 55.8114 31.5665 56.1301 31.6985C56.4488 31.8305 56.7383 32.0239 56.9822 32.2678C57.2261 32.5117 57.4195 32.8012 57.5515 33.1199C57.6835 33.4386 57.7515 33.7801 57.7515 34.125C57.7515 34.4699 57.6835 34.8114 57.5515 35.1301C57.4195 35.4488 57.2261 35.7383 56.9822 35.9822L38.6072 54.3572C38.3634 54.6013 38.0739 54.7949 37.7552 54.927C37.4365 55.0591 37.095 55.1271 36.75 55.1271C36.405 55.1271 36.0635 55.0591 35.7448 54.927C35.4261 54.7949 35.1366 54.6013 34.8928 54.3572L27.0178 46.4822Z" fill="#1979E6" />
        </g>
        <defs>
            <filter id="filter0_d_303_4878" x="-10" y="-6" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4878" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_4878" result="shape" />
            </filter>
        </defs>
    </svg>
);

// Icon 2: Provide Data (Document with Up Arrow)
const IconData = () => (
    <svg width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_d_303_4906)">
            <path opacity="0.2" d="M68.25 29.2188H49.875V10.625L68.25 29.2188Z" fill="#1979E6" />
            <path d="M70.1072 27.3395L51.7322 8.7457C51.4882 8.49911 51.1986 8.30358 50.88 8.17026C50.5613 8.03695 50.2198 7.96848 49.875 7.96875L18.375 7.96875C16.9826 7.96875 15.6473 8.52846 14.6627 9.52475C13.6781 10.521 13.125 11.8723 13.125 13.2813L13.125 71.7188C13.125 73.1277 13.6781 74.479 14.6627 75.4753C15.6473 76.4715 16.9826 77.0312 18.375 77.0312H65.625C67.0174 77.0312 68.3527 76.4715 69.3373 75.4753C70.3219 74.479 70.875 73.1277 70.875 71.7188V29.2188C70.8753 28.8698 70.8076 28.5243 70.6759 28.2018C70.5441 27.8794 70.3509 27.5863 70.1072 27.3395ZM52.5 17.0365L61.9139 26.5625H52.5V17.0365ZM65.625 71.7188H18.375V13.2813H47.25V29.2188C47.25 29.9232 47.5266 30.5989 48.0188 31.097C48.5111 31.5951 49.1788 31.875 49.875 31.875H65.625V71.7188ZM51.7322 45.9332C51.9761 46.18 52.1695 46.473 52.3015 46.7954C52.4335 47.1179 52.5015 47.4635 52.5015 47.8125C52.5015 48.1615 52.4335 48.5071 52.3015 48.8296C52.1695 49.152 51.9761 49.445 51.7322 49.6918C51.4883 49.9386 51.1988 50.1344 50.8801 50.2679C50.5614 50.4015 50.2199 50.4702 49.875 50.4702C49.5301 50.4702 49.1886 50.4015 48.8699 50.2679C48.5512 50.1344 48.2617 49.9386 48.0178 49.6918L44.625 46.2553V61.0938C44.625 61.7982 44.3484 62.4739 43.8562 62.972C43.3639 63.4701 42.6962 63.75 42 63.75C41.3038 63.75 40.6361 63.4701 40.1438 62.972C39.6516 62.4739 39.375 61.7982 39.375 61.0938V46.2553L35.9822 49.6918C35.7383 49.9386 35.4488 50.1344 35.1301 50.2679C34.8114 50.4015 34.4699 50.4702 34.125 50.4702C33.7801 50.4702 33.4386 50.4015 33.1199 50.2679C32.8012 50.1344 32.5117 49.9386 32.2678 49.6918L40.1428 37.9645C40.3866 37.7175 40.6761 37.5216 40.9948 37.3879C41.3135 37.2542 41.655 37.1854 42 37.1854C42.345 37.1854 42.6865 37.2542 43.0052 37.3879C43.3239 37.5216 43.6134 37.7175 43.8572 37.9645L51.7322 45.9332Z" fill="#1979E6" />
        </g>
        <defs>
            <filter id="filter0_d_303_4906" x="-10" y="-6" width="104" height="105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4906" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_4906" result="shape" />
            </filter>
        </defs>
    </svg>
);

// Icon 3: Profit Recovery Report (Line Chart/Graph)
const IconReport = () => (
    <svg width="89" height="85" viewBox="0 0 89 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_d_303_4930)">
            <path opacity="0.2" d="M75.625 21V68.25H12.625V15.75H70.375C71.7674 15.75 73.1027 16.3031 74.0873 17.2877C75.0719 18.2723 75.625 19.6076 75.625 21Z" fill="#1979E6" />
            <path d="M78.25 68.25C78.25 68.9462 77.9734 69.6139 77.4812 70.1062C76.9889 70.5984 76.3212 70.875 75.625 70.875H12.625C11.9288 70.875 11.2611 70.5984 10.7688 70.1062C10.2766 69.6139 10 68.9462 10 68.25V15.75C10 15.0538 10.2766 14.3861 10.7688 13.8938C11.2611 13.4016 11.9288 13.125 12.625 13.125C13.3212 13.125 13.9889 13.4016 14.4812 13.8938C14.9734 14.3861 15.25 15.0538 15.25 15.75V51.4139L31.7678 34.8928C32.0116 34.6487 32.3011 34.4551 32.6198 34.323C32.9385 34.1909 33.28 34.1229 33.625 34.1229C33.97 34.1229 34.3115 34.1909 34.6302 34.323C34.9489 34.4551 35.2384 34.6487 35.4822 34.8928L44.125 43.5389L61.4139 26.25H54.625C53.9288 26.25 53.2611 25.9734 52.7688 25.4812C52.2766 24.9889 52 24.3212 52 23.625C52 22.9288 52.2766 22.2611 52.7688 21.7688C53.2611 21.2766 53.9288 21 54.625 21H67.75C68.4462 21 69.1139 21.2766 69.6062 21.7688C70.0984 22.2611 70.375 22.9288 70.375 23.625V36.75C70.375 37.4462 70.0984 38.1139 69.6062 38.6062C69.1139 39.0984 68.4462 39.375 67.75 39.375C67.0538 39.375 66.3861 39.0984 65.8938 38.6062C65.4016 38.1139 65.125 37.4462 65.125 36.75V29.9611L45.9822 49.1072C45.7384 49.3513 45.4489 49.5449 45.1302 49.677C44.8116 49.8091 44.47 49.8771 44.125 49.8771C43.78 49.8771 43.4384 49.8091 43.1198 49.677C42.8011 49.5449 42.5116 49.3513 42.2678 49.1072L33.625 40.4611L15.25 58.8361V65.625H75.625C76.3212 65.625 76.9889 65.9016 77.4812 66.3938C77.9734 66.8861 78.25 67.5538 78.25 68.25Z" fill="#1979E6" />
        </g>
        <defs>
            <filter id="filter0_d_303_4930" x="-7.875" y="-6" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4930" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_4930" result="shape" />
            </filter>
        </defs>
    </svg>
);

// Icon 4: Implementation (Handshake)
const IconImplementation = () => (
    <svg width="104" height="88" viewBox="0 0 104 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_303_4923)">
            <path opacity="0.2" d="M75.6221 49.875L62.4971 63L41.4971 57.75L23.1221 44.625L33.8452 23.1755L51.9971 18.375L70.1489 23.1755L70.2408 23.625H57.2471L42.2649 38.1577C41.9864 38.436 41.774 38.7735 41.6437 39.1451C41.5133 39.5166 41.4681 39.9128 41.5116 40.3042C41.5551 40.6955 41.6861 41.0721 41.8949 41.406C42.1036 41.7399 42.3849 42.0225 42.7177 42.233C48.4632 45.9047 56.2627 45.652 62.4971 39.375L75.6221 49.875Z" fill="#1979E6" />
            <path d="M93.4395 35.408L85.0657 18.6539C84.7572 18.0372 84.3303 17.4874 83.8093 17.0358C83.2883 16.5841 82.6834 16.2395 82.0293 16.0217C81.3751 15.8038 80.6844 15.7169 79.9966 15.766C79.3088 15.8151 78.6375 15.9992 78.0209 16.3078L69.8604 20.3864L52.6699 15.8386C52.2289 15.7238 51.7657 15.7238 51.3246 15.8386L34.1342 20.3864L25.9737 16.3078C25.3571 15.9992 24.6857 15.8151 23.998 15.766C23.3102 15.7169 22.6195 15.8038 21.9653 16.0217C21.3111 16.2395 20.7063 16.5841 20.1853 17.0358C19.6643 17.4874 19.2373 18.0372 18.9289 18.6539L10.5551 35.4047C10.2465 36.0213 10.0624 36.6926 10.0133 37.3804C9.96423 38.0682 10.0511 38.7589 10.2689 39.4131C10.4868 40.0672 10.8314 40.6721 11.283 41.1931C11.7347 41.7141 12.2845 42.141 12.9012 42.4495L21.7606 46.8825L39.9682 59.8861C40.2365 60.077 40.5381 60.2161 40.8575 60.2962L61.8574 65.5463C62.2972 65.6565 62.7581 65.651 63.1951 65.5303C63.6321 65.4095 64.0304 65.1776 64.3512 64.8572L82.421 46.7841L91.0901 42.4495C92.3346 41.8265 93.2809 40.7348 93.7208 39.4144C94.1607 38.094 94.0584 36.6529 93.4362 35.408H93.4395ZM75.4287 46.3575L64.1379 37.3144C63.6321 36.9093 62.9943 36.7056 62.3474 36.7426C61.7004 36.7795 61.0899 37.0545 60.6335 37.5145C54.7896 43.4011 48.2764 42.6562 44.1223 40.0312L58.3104 26.25H68.7481L77.6764 44.1033L75.4287 46.3575ZM23.6243 21L30.341 24.3534L21.9509 41.1042L15.2473 37.7541L23.6243 21ZM61.6868 60.0895L42.6195 55.3252L26.4757 43.7948L35.6632 25.4198L51.9973 21.0919L55.2129 21.9417L40.4473 36.2742L40.421 36.3037C39.8652 36.8596 39.4413 37.5331 39.1806 38.2747C38.9198 39.0162 38.8289 39.8068 38.9146 40.5882C39.0003 41.3696 39.2603 42.1218 39.6755 42.7892C40.0907 43.4566 40.6505 44.0223 41.3135 44.4445C48.0598 48.7528 56.2006 48.0539 62.6121 42.8039L71.6848 50.0916L61.6868 60.0895ZM82.0306 41.1009L73.6568 24.3666L80.3703 21L88.7473 37.7541L82.0306 41.1009ZM53.2376 71.5083C53.0958 72.0756 52.7686 spokeswoman: 72.5794 52.3079 72.9396C51.8472 73.2998 51.2794 73.4959 50.6946 73.4967C50.479 73.4964 50.2641 73.47 50.0548 73.418L36.3818 69.9989C36.062 69.92 35.7602 69.7808 35.4926 69.5888L26.8465 63.4134C26.3149 62.996 25.9648 62.3896 25.869 61.7205C25.7733 61.0515 25.9394 60.3712 26.3326 59.8215C26.7259 59.2718 27.3161 58.8949 27.9802 58.7694C28.6444 58.6439 29.3313 58.7795 29.8981 59.1478L38.1373 65.0344L51.341 68.3288C52.0163 68.4977 52.5968 68.9279 52.9549 69.5247C53.313 70.1216 53.4195 70.8363 53.2507 71.5116L53.2376 71.5083Z" fill="#1979E6" />
        </g>
        <defs>
            <filter id="filter0_d_303_4923" x="-0.00292969" y="-6" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.47451 0 0 0 0 0.901961 0 0 0 0.24 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_4923" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_4923" result="shape" />
            </filter>
        </defs>
    </svg>
);


// Timeline Step Component
const TimelineStep = ({ stepNumber, title, description, icon: Icon, side, active }) => {
    // Determine layout based on side ('left' for odd, 'right' for even)
    const isLeft = side === 'left';
    const opacityClass = active ? 'opacity-100 scale-100' : 'opacity-60 scale-95';
    // Use smaller number indicator classes to move it off the center line.
    const stepColorClass = active ? 'bg-[#4794EB] w-8 h-8' : 'bg-blue-300 w-7 h-7';

    // Helper component for the step number circle
    const StepNumber = () => (
        <div className={`mb-2 inline-flex items-center justify-center rounded-full 
                         ${active ? 'bg-blue-600 shadow-lg shadow-blue-400/50' : 'bg-blue-400'}`}>
            <div className="w-12 h-12 text-xl font-bold flex items-center justify-center rounded-full text-white transition-all duration-500">
                <span>{stepNumber}</span>
            </div>
        </div>
    );

    return (
        // Wrapper for the step. The total height is space-y-24, so we need a minimum height wrapper.
        <div className={`relative flex items-center justify-between`}>

            {/* Right Content / Icon (for steps 1 & 3 - side: right) */}
            {!isLeft && (
                <>
                    {/* Content (Left) */}
                    <div className={`w-5/12 text-right pr-8 transition-all duration-700 ${opacityClass}`}>
                        <StepNumber />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-600">{description}</p>
                    </div>

                    {/* Spacer / Line (Center) - Desktop Only */}
                    <div className="w-2/12 flex justify-center relative z-10">
                        {/* ICON (Right side of line) */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 ml-10 flex items-center justify-center">
                            <div className={`w-16 h-16 flex items-center justify-center transition-all duration-700 ${active ? 'opacity-100' : 'opacity-30'}`}>
                                <Icon />
                            </div>
                        </div>

                        {/* Empty space where number used to be */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12"></div>
                    </div>

                    {/* Empty Right Slot (Placeholder) */}
                    <div className="w-5/12 pl-8"></div>
                </>
            )}

            {/* Left Content / Icon (for steps 2 & 4 - side: left) */}
            {isLeft && (
                <>
                    {/* Empty Left Slot (Placeholder) */}
                    <div className="w-5/12 pr-8"></div>

                    {/* Spacer / Line (Center) - Desktop Only */}
                    <div className="w-2/12 flex justify-center relative z-10">
                        {/* ICON (Left side of line) */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-1/2 mr-10 flex items-center justify-center">
                            <div className={`w-16 h-16 flex items-center justify-center transition-all duration-700 ${active ? 'opacity-100' : 'opacity-30'}`}>
                                <Icon />
                            </div>
                        </div>

                        {/* Empty space where number used to be */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12"></div>
                    </div>

                    {/* Content (Right) */}
                    <div className={`w-5/12 text-left pl-8 transition-all duration-700 ${opacityClass}`}>
                        <StepNumber />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </>
            )}
        </div>
    );
};


const RecoverySteps = () => {
    // 4 steps total (0, 1, 2, 3)
    const totalSteps = 4;
    const [activeStep, setActiveStep] = useState(0);

    // Auto-advance logic (3000ms = 3 seconds per step)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % totalSteps);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Injects the SF Pro compatible system font stack and grid pattern
    const fontStyle = `
        .sf-pro-font {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        /* Custom Grid/Checkered background pattern with soft corners for the full page container */
        .checkered-bg-custom {
            /* Lighter blue grid lines */
            background-image: linear-gradient(rgba(224, 231, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(224, 231, 255, 0.4) 1px, transparent 1px);
            background-size: 25px 25px;
            background-position: center center;
            /* Use mask-image for blending corners */
            mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%);
            -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%);
            opacity: 0.8;
        }
    `;

    // Timeline data structured to match the image content
    const steps = [
        {
            number: 1,
            title: "Secure Your Audit",
            description: "Pay a fully refundable deposit to begin your audit",
            icon: IconShield,
            side: 'right', // Swapped side based on screenshot
        },
        {
            number: 2,
            title: "Provide Data",
            description: "Submit shipping, merchant, and payroll reports for review",
            icon: IconData,
            side: 'left', // Swapped side based on screenshot
        },
        {
            number: 3,
            title: "Profit Recovery Report",
            description: "We calculate your annualized savings and ROI potential",
            icon: IconReport,
            side: 'right', // Swapped side based on screenshot
        },
        {
            number: 4,
            title: "Implementation",
            description: "Move forward with verified vendor partners — your deposit is fully credited",
            icon: IconImplementation,
            side: 'left', // Swapped side based on screenshot
        },
    ];

    // The final step is at index 3, total steps is 4.
    const maxActiveIndex = totalSteps - 1;

    return (
        <div className="bg-white sf-pro-font relative overflow-hidden py-16">
            {/* Custom font style and checkered background injection */}
            <style dangerouslySetInnerHTML={{ __html: fontStyle }} />

            {/* Checkered background layer with faded corners */}
            <div className="absolute inset-0 checkered-bg-custom z-0"></div>

            <div className="relative z-10 max-w-6xl w-full mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-16">
                    {/* Small Blue Badge */}
                    <div className="inline-block px-5 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full tracking-wide border border-blue-200">
                        How It Works
                    </div>

                    {/* Main Title, matching the screenshot's style */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        Your Profit Recovery Audit <br /> in<span style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontWeight: 400,
                            fontStyle: "italic",
                            lineHeight: "100%",
                        }}> 4 Simple Steps</span>
                    </h1>
                </div>

                {/* Timeline Container (Desktop Only - Alternating Layout) */}
                <div className="hidden md:block relative max-w-4xl mx-auto space-y-24">

                    {/* Vertical Blue Line with Animated Progress */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-2 transform -translate-x-1/2 rounded-full overflow-hidden">
                        {/* Base gradient line (Static background, light blue) */}
                        <div className="absolute inset-0 bg-blue-300 opacity-30"></div>

                        {/* Animated progress overlay */}
                        <div
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#4794EB] to-blue-600 transition-all duration-1000 ease-in-out"
                            style={{
                                // Calculated height to hit the center of the active step line
                                height: `calc(${(activeStep * 100) / maxActiveIndex}% + 12px)`,
                                transformOrigin: 'top',
                            }}
                        ></div>
                    </div>

                    {/* Steps */}
                    {steps.map((step, index) => (
                        <TimelineStep
                            key={step.number}
                            stepNumber={step.number}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            side={step.side}
                            active={index <= activeStep} // All steps up to the active step are 'active' for color/opacity
                        />
                    ))}
                </div>

                <div className="md:hidden relative mx-auto max-w-sm pt-12">

                    {steps.map((step, index) => (
                        <div key={step.number} className="relative flex items-start mb-16">

                            {/* Center Column: Icon + Step number */}
                            <div className="flex flex-col items-center w-2/12 z-10">
                                {/* Number Circle (always highlighted up to activeStep) */}
                                <div className={`w-10 h-10 ${index <= activeStep ? 'bg-[#4794EB]' : 'bg-blue-300'} rounded-full flex items-center justify-center text-white font-extrabold text-lg transition-colors duration-500`}>
                                    {step.number}
                                </div>

                                {/* Icon (positioned slightly below the number) */}
                                <div className={`w-12 h-12 mt-4 flex items-center justify-center transition-opacity duration-700 ${index <= activeStep ? 'opacity-100' : 'opacity-30'}`}>
                                    <step.icon />
                                </div>
                            </div>

                            {/* Right side: Content */}
                            <div className="w-10/12 pl-4 pt-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default RecoverySteps;
