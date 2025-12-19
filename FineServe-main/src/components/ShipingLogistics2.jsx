import React from 'react';

export default function ShipingLogistics2() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Title */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Streamlined Logistics.<div className='text-center lg:text-end lg:pr-15'> Real Savings.</div>
            </h2>
          </div> 

          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-gray-700 leading-relaxed">
              We partner directly with national and international carriers to reduce costs at every leg of your supply chain. From parcel to freight, every shipment is optimized through negotiated rates, data-driven routing, and vendor-neutral technology.
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
                  <span className="font-bold">Direct-to-Carrier Access</span> - No middlemen, just better rates.
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
                  <span className="font-bold">All-in-One Platform</span> - Manage quotes, tracking, and invoices in one dashboard.
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
                  <span className="font-bold">Data Transparency</span> - Get full visibility into every shipment's cost and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}