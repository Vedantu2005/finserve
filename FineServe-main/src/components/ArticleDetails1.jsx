import React from 'react';

export default function ArticleDetails1() {
  return (
    <div className="relative">
      {/* Blue Header Section */}
      <div className="bg-gradient-to-b from-[#3776BE] to-[#4794EB3F] pt-36 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/90 mb-8">
            <a href="#" className="hover:text-white transition-colors">
              All Articles
            </a>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
            <span className="truncate max-w-[200px]">Uncovering Hidden...</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Uncovering Hidden Costs in Your Business
          </h1>

          {/* Description */}
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tor...
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-3 border-b-1 pb-3 text-white/90 mb-2">
            <span>By Colin</span>
            <span className="w-1 h-1 bg-white/70 rounded-full"></span>
            <span>Merchant Processing</span>
          </div>

          {/* Date */}
          <p className="text-white/80 text-xl font-[700]">18 Aug 2025</p>
        </div>
      </div>

      {/* Image Section - Full Width */}
      <div className="relative-mt-24">
        <div className="w-full">
          <div className="overflow-hidden">
            <img
              src="../../public/assets/about.jpg"
              alt="Business meeting in conference room"
              className="w-full h-135 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}