import React from 'react';

export default function Payroll2() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Title */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              <div className='text-center lg:text-end lg:pr-15'> Overview</div>
            </h2>
          </div> 

          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-gray-700 leading-relaxed">
              FinServe360 helps businesses unlock payroll tax savings - effortlessly. Our program has been vetted by multiple Fortune 500 companies and is backed by the “Best Law Firm in 2026” specializing in Business, Corporate, Healthcare, Employment and Labor. 
            </p>
          </div>
        </div>

        {/* Key Points Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Title */}
          <div className="flex justify-center lg:justify-end">
            <h3 className="text-4xl font-bold text-gray-900">Key Points</h3>
          </div>

          {/* Right - Points List */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="pt-2">
                <p className="text-gray-900">
                    
                  <span className="font-bold">A+ Rated Carrier Support</span> - We are the only program backed by an A+ Rated carrier in the market.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="pt-2">
                <p className="text-gray-900"> 
                  <span className="font-bold">Zero Upfront Cost</span> - You pay only when savings are realized.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="pt-2">
                <p className="text-gray-900"> 
                  <span className="font-bold">Simple, Integrated Process</span> - Minimal paperwork, maximum results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}