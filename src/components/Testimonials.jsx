import React from 'react';

export default function Testimonials() {
  return (
    <section className="w-full px-6 py-32 relative overflow-hidden bg-white text-center min-h-[600px] font-sans">
      
      <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-16 text-gray-900 leading-tight">
        <span className="relative inline-block px-6">
          <span className="absolute inset-0 bg-[#E8F5E9] rounded-full -rotate-1"></span>
          <span className="relative">What</span>
        </span>{" "}
        our customer <br />
        says{" "}
        <span className="relative inline-block">
          About Us
          <span className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#FFD54F] rounded-full"></span>
        </span>
      </h2>

      <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[8%] top-[20%] w-16 h-16 rounded-full object-cover shadow-sm" alt="Customer" />
      <img src="https://images.unsplash.com/photo-1652781335326-b7e64b014c90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww" className="absolute left-[4%] top-[40%] w-10 h-10 rounded-full object-cover shadow-sm" alt="Customer" />
      <img src="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww" className="absolute left-[12%] top-[45%] w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white" alt="Featured Customer" />
      <img src="https://plus.unsplash.com/premium_photo-1731499365772-15a4edfe53c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww" className="absolute left-[3%] bottom-[20%] w-14 h-14 rounded-full object-cover shadow-sm" alt="Customer" />

      <img src="https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww" className="absolute right-[22%] top-[28%] w-12 h-12 rounded-full object-cover shadow-sm" alt="Customer" />
      <img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=" className="absolute right-[12%] top-[20%] w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white" alt="Customer" />
      <img src="https://media.istockphoto.com/id/1303206630/photo/portrait-of-smiling-caucasian-businesswoman-pose-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=vXQ6jnbUYRi4qn4GzRGJKDBH3PAezENQzM6b5_6FImI=" className="absolute right-[20%] top-[42%] w-14 h-14 rounded-full object-cover shadow-sm" alt="Customer" />
      <img src="https://images.unsplash.com/photo-1621731446690-91bdf5f9c70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww" className="absolute right-[5%] bottom-[15%] w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white" alt="Primary Customer" />

      <div className="max-w-2xl mx-auto bg-[#F1F8F6] rounded-[40px] p-10 md:p-16 relative mt-10">
        
        <div className="absolute top-8 left-8">
           <svg width="40" height="30" viewBox="0 0 40 30" fill="#CFD8DC">
              <path d="M0 30V15C0 6.7 6.7 0 15 0V7.5C10.8 7.5 7.5 10.8 7.5 15H15V30H0ZM22.5 30V15C22.5 6.7 29.2 0 37.5 0V7.5C33.3 7.5 30 10.8 30 15H37.5V30H22.5Z" />
           </svg>
        </div>

        <p className="text-gray-700 text-sm md:text-[17px] leading-relaxed font-normal">
          Elementum delivered the site with inthe timeline as they requested. 
          Inthe end, the client found a 50% increase in traffic with in days since its launch. 
          They also had an impressive ability to use technologies that the company hasnt used, 
          which have also proved to be easy to use and reliable
        </p>

        <div className="absolute bottom-8 right-8 rotate-180">
           <svg width="40" height="30" viewBox="0 0 40 30" fill="#CFD8DC">
              <path d="M0 30V15C0 6.7 6.7 0 15 0V7.5C10.8 7.5 7.5 10.8 7.5 15H15V30H0ZM22.5 30V15C22.5 6.7 29.2 0 37.5 0V7.5C33.3 7.5 30 10.8 30 15H37.5V30H22.5Z" />
           </svg>
        </div>
      </div>
    </section>
  );
}
