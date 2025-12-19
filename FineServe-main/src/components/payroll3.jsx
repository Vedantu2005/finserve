import React from 'react';
import { Banknote, RefreshCw, TrendingUp } from 'lucide-react';

// Reusable Card Component with the styles from the first card
const StatCard = ({ Icon, title, description }) => {
  return (
    <div className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col items-center justify-start" style={{
      background: 'radial-gradient(circle at center, white 40%, #2cb59c29 120%)',
      border: '5px solid white',
      boxShadow: '0 0 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.2)'
    }}>
      {/* Icon with decorative corner dots and connecting lines */}
      <div className="flex justify-center mb-6 relative">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center relative">
          {/* Connecting lines */}
          <div className="absolute -top-2 left-0 right-0 h-0 border-t border-[#4CA8FFF0]" style={{borderWidth: '1px', width: 'calc(100% + 16px)', left: '-8px'}}></div>
          <div className="absolute -right-2 top-0 bottom-0 w-0 border-r border-[#4CA8FFF0]" style={{borderWidth: '1px', height: 'calc(100% + 16px)', top: '-8px'}}></div>
          <div className="absolute -bottom-2 left-0 right-0 h-0 border-b border-[#4CA8FFF0]" style={{borderWidth: '1px', width: 'calc(100% + 16px)', left: '-8px'}}></div>
          <div className="absolute -left-2 top-0 bottom-0 w-0 border-l border-[#4CA8FFF0]" style={{borderWidth: '1px', height: 'calc(100% + 16px)', top: '-8px'}}></div>
          
          {/* Corner dots */}
          <div className="absolute -top-3 -left-3 w-2 h-2 bg-[#4CA8FFF0] rounded-full z-10"></div>
          <div className="absolute -top-3 -right-3 w-2 h-2 bg-[#4CA8FFF0] rounded-full z-10"></div>
          <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-[#4CA8FFF0] rounded-full z-10"></div>
          <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-[#4CA8FFF0] rounded-full z-10"></div>
          
          {/* Lucide Icon */}
          <Icon className="w-8 h-8 text-blue-600" strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="text-center flex flex-col">
        <h3 
          className="text-2xl font-bold mb-4 pb-1 min-h-[3.5rem] flex items-center justify-center leading-tight" 
          style={{
            background: 'linear-gradient(90deg, #062765 0%, #61E6CD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
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

// Data for each of the three cards
const cardData = [
  {
    icon: Banknote,
    title: '$650-850 Saved<br />Per W2 Employee',
    description: 'Average annual savings in payroll taxes per employee, optimized for your business bottom line.'
  },
  {
    icon: RefreshCw,
    title: 'Simplified<br />Integration',
    description: 'Keep your existing payroll software and major medical benefits with a completely seamless transition.'
  },
  {
    icon: TrendingUp,
    title: 'Retention &<br />Revenue',
    description: 'Increased recruitment, retention, and revenue results for long-term business success.'
  }
];

export default function Payroll3() {
  return (
    <div className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Subtle grid background with gradient mask */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 200, 200, 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)'
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-medium border border-blue-200">
              The Impact We Deliver
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="italic font-light">Results</span> That Prove Our Value
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every engagement with FinServe360 creates measurable savings and stronger bottom lines while enhancing employee value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <StatCard 
              key={index}
              Icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}