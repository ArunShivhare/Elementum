import React from 'react';

export default function Hero() {
  return (
    <section className="w-full px-6 py-24 text-center relative overflow-hidden bg-white min-h-[700px] font-sans">
      
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-80 pointer-events-none">
         <svg width="100" height="200" viewBox="0 0 100 200" fill="none">
            <path d="M10 20C40 40 10 80 40 100C70 120 40 160 70 180" stroke="#FF8A8A" strokeWidth="3" />
            <path d="M40 20C70 40 40 80 70 100C100 120 70 160 100 180" stroke="black" strokeWidth="3" />
         </svg>
      </div>
      <div className="absolute top-1/4 right-[10%] w-16 h-24 bg-purple-500 rounded-l-full rotate-[15deg] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-gray-900 leading-[1.1]">
          The{" "}
          <span className="relative inline-block">
            thinkers
            <span className="absolute left-0 bottom-4 w-full h-1 bg-yellow-400 -z-10"></span>
          </span>{" "}
          and <br />
          doers were{" "}
          <span className="relative inline-block px-8">
            <span className="absolute inset-0 bg-pink-100 rounded-full -rotate-1"></span>
            <span className="relative">changing</span>
          </span> <br />
          the{" "}
          <span className="relative inline-block px-8 mr-2">
            <span className="absolute inset-0 bg-green-100 rounded-full rotate-1"></span>
            <span className="relative">status</span>
          </span>
          Quo with
        </h1>
      </div>

      <div className="max-w-2xl mx-auto text-gray-800 text-sm md:text-base leading-relaxed mb-16">
        <p>
          We are a team of strategists, designers communicators, researchers. Togeather, <br />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto h-[400px]">
        <img src="https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[2%] top-[30%] w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[10%] top-[45%] w-28 h-28 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
        
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[28%] top-[-5%] w-32 h-32 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[35%] top-[50%] w-28 h-28 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
        
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[50%] top-[10%] w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
        <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[60%] top-[40%] w-28 h-28 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
        
        <img src="https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D" className="absolute left-[75%] top-[-10%] w-32 h-32 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
        <img src="https://images.unsplash.com/photo-1652781269535-f13e466904a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww" className="absolute left-[88%] top-[55%] w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" alt="Team member" />
      </div>
    </section>
  );
}
