import React from 'react';

export default function About() {
  return (
    <section className="w-full px-6 md:px-24 py-32 relative overflow-hidden bg-white font-sans">
      
      <div className="absolute top-[45%] left-0 w-full z-0 pointer-events-none opacity-60">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://w3.org" className="w-full">
          <path d="M0,160 C320,300 420,50 720,160 C1020,270 1120,20 1440,160" stroke="#FF8A8A" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-16 relative z-10 mb-40">
        <div className="flex-1 pt-12">
          <h2 className="text-4xl md:text-6xl font-normal leading-tight text-gray-900 tracking-tight">
            Tomorrow should <br />
            be better than <span className="relative inline-block">
              today
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 rounded-full"></span>
            </span>
          </h2>

          <p className="mt-8 text-gray-700 text-sm md:text-base max-w-sm leading-relaxed">
            We are a team of strategists, designers communicators, researchers. 
            Togeather, we belive that progress only happens when you refuse to play things safe.
          </p>

          <div className="mt-8 flex items-center gap-4 group cursor-pointer">
            <span className="text-xs font-bold uppercase tracking-widest">Read more</span>
            <div className="h-[1px] w-20 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-end">
          <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[16px] border-white shadow-2xl">
            <img src="https://media.istockphoto.com/id/2148703154/photo/business-persons-on-meeting-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=fVLJpgh_1qG4fB1jxhaGYPXJVK54UMky1wmaIngjqF0=" alt="Team meeting" className="w-full h-full object-cover" />
          </div>
          {/* Red Rectangle Accent */}
          <div className="absolute top-10 -right-4 w-24 h-32 bg-[#FF5F5F] -rotate-12 -z-10 rounded-sm"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-16 relative z-10">
        <div className="flex-1 pt-12 md:pl-20">
          <h2 className="text-4xl md:text-6xl font-normal leading-tight text-gray-900 tracking-tight">
            See how we can <br />
            help you <span className="relative inline-block">
              progress
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 rounded-full"></span>
            </span>
          </h2>

          <p className="mt-8 text-gray-700 text-sm md:text-base max-w-sm leading-relaxed">
            We add a layer of fearless insights and action that allows change makers 
            to accelerate their progress in areas such as brand, design, digital, comms and social research.
          </p>

          <div className="mt-8 flex items-center gap-4 group cursor-pointer">
            <span className="text-xs font-bold uppercase tracking-widest">Read more</span>
            <div className="h-[1px] w-20 bg-gray-300 relative"></div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-start">
          <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[16px] border-white shadow-2xl">
            <img src="https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.webp?a=1&b=1&s=612x612&w=0&k=20&c=P3p7QksVY2syzlJnEKZYy-AUcnD5hym97liMskfriaE=" alt="Working together" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 right-12 w-0 h-0 
            border-l-[40px] border-l-transparent 
            border-r-[40px] border-r-transparent 
            border-b-[70px] border-b-[#FF5F5F] -rotate-12"></div>
        </div>
      </div>

    </section>
  );
}
