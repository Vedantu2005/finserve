import React from 'react';

export default function ArticleDetails2() {
  const relatedPosts = [
    {
      id: 1,
      image: '/assets/person1.png',
      title: 'Securing the Best Merchant Processing R...',
      author: 'Colin',
      category: 'Merchant Processing',
      date: 'Aug 2025',
      url: '#' // Added mock URL
    },
    {
      id: 2,
      image: '/assets/2personOnTable.png',
      title: 'Payroll Tax Savings Made Simple',
      author: 'Colin',
      category: 'Cost Optimization',
      date: 'Aug 2025',
      url: '#' // Added mock URL
    },
    {
      id: 3,
      image: '/assets/person1.png',
      title: 'Smart Shipping: Reduce Freight Costs in 2025',
      author: 'Colin',
      category: 'Merchant Processing',
      date: 'Aug 2025',
      url: '#' // Added mock URL
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Left Side (2/3 width) - UNCHANGED */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            <ul className="space-y-3 ml-5 list-disc pl-5"> {/* Added list-disc and pl-5 for proper bullet formatting */}
              <li className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="text-gray-800 leading-relaxed">
                Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet.
              </li>
              <li className="text-gray-800 leading-relaxed">
                Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu.
              </li>
              <li className="text-gray-800 leading-relaxed">
                Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
              </li>
            </ul>

            {/* Remaining paragraphs (truncated for brevity) */}
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            {/* ... other paragraphs ... */}
            <p className="text-gray-800 leading-relaxed">
              Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. <a href="#" className="text-blue-600 hover:underline">Text arcu nunc nibh sed</a>. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus voluptas impedit alias porro similique corrupti error minus quaerat, facere incidunt id perferendis exercitationem labore nulla dolor? Quis, ab enim.
            </p>
            
            <p className="text-gray-800 leading-relaxed border-t-1 border-gray-300 pt-12 mt-12">
              Nec vestibulum tincidunt ac pulvinar. <br/> Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Nec vestibulum tincidunt ac pulvinar. Ullamcorper euismod elit ultricies senectus tortor imperdiet. Velit arcu nunc nibh sed. <a href="#" className="text-blue-600 hover:underline">Text arcu nunc nibh sed</a>. Aliquam nibh dignissim in egestas eu. Nisl vel eu molestie vitae tortor massa arcu egestas. Mattis facilisis vel velit.
            </p>
            
          </div>

          {/* Sidebar - Right Side (1/3 width) - MODIFIED */}
          <div className="border-l-1 pl-8 border-gray-300 lg:col-span-1 space-y-8">
            {/* More to with... Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">More to with...</h3>
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  // The entire card is now an anchor tag
                  <a 
                    key={post.id} 
                    href={post.url} // Redirects on click
                    className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-400"
                  >
                    <div className="relative h-60 overflow-hidden"> {/* Adjusted height for consistency, if needed */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                        <span>By {post.author}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{post.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{post.date}</p>
                        {/* Icon for visual feedback on hover/click */}
                        <div className="text-gray-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                          <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M7 17L17 7M17 7H7M17 7v10" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="text-center border-b-1 border-gray-300 pb-4 mt-8">
                <button className="text-base font-serif italic text-gray-900 hover:text-blue-600 underline transition-colors">
                  See More
                </button>
              </div>
            </div>

            {/* Follow Us Section - UNCHANGED */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow Us</h3>
              <p className="text-sm text-gray-600 mb-6">Get the latest News & Inspiration</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-200 text-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-200 text-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2C5.6 4 4 5.6 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8c2 0 3.6-1.6 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25 1.25 1.25 0 01-1.25 1.25 1.25 1.25 0 01-1.25-1.25 1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-200 text-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-200 text-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription - UNCHANGED */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Subscribe to Our newsletter for for daily Insight
              </h3>
              <div className="mt-6 space-y-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}