import React from 'react';

export default function Offer() {
  const offers = [
    {
      desc: "Office of multiple interest content",
      title: "Colaborative & partnership",
    },
    {
      desc: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      desc: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
      hasSticker: true,
    },
  ];

  return (
    <section className="w-full px-6 md:px-20 py-24 bg-white relative overflow-hidden font-sans">
      
      <div className="absolute top-0 right-0 w-1/3 opacity-80 pointer-events-none">
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://w3.org">
          <path d="M400,20 C300,20 250,150 150,150 C50,150 0,80 0,80" stroke="#FF8A8A" strokeWidth="3" />
        </svg>
      </div>

      <div className="mb-20">
        <h2 className="text-6xl md:text-8xl font-normal tracking-tight text-gray-900 leading-tight">
          What we{" "}
          <span className="relative inline-block px-6">
            <span className="absolute inset-0 bg-green-100 rounded-full -rotate-2"></span>
            <span className="relative">can</span>
          </span>
          <br />
          <span className="relative inline-block mt-2">
            offer
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-400 rounded-full"></span>
            <span className="absolute left-0 -bottom-4 w-3/4 h-1 bg-yellow-200 rounded-full opacity-50"></span>
          </span>{" "}
          you!
        </h2>
      </div>

      <div className="border-t border-gray-100">
        {offers.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 items-center py-10 border-b border-gray-100 group cursor-pointer hover:bg-gray-50/50 transition-colors"
          >
            <div className="md:col-span-3">
              <p className="text-gray-500 text-xs md:text-sm max-w-[180px] leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="md:col-span-7 relative">
              <h3 className="text-2xl md:text-4xl font-normal text-gray-800 tracking-tight">
                {item.title}
              </h3>

              {item.hasSticker && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center rotate-12 shadow-sm overflow-hidden border-2 border-white">
                   <span className="text-[8px] font-bold text-center leading-none uppercase">Confid-ence <br/>Verified</span>
                </div>
              )}
            </div>

            <div className="md:col-span-2 flex justify-end items-center gap-4">
              <div className="h-[1px] w-12 bg-gray-300 group-hover:w-16 group-hover:bg-black transition-all duration-300"></div>
              <span className="text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
