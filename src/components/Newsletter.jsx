export default function Newsletter() {
  return (
    <section className="w-full px-6 py-32 bg-[#D1E7D6] text-center relative overflow-hidden font-sans">
      
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 opacity-70">
        <svg viewBox="0 0 100 40" fill="none" xmlns="http://w3.org">
          <path d="M20 35C25 15 35 5 45 25C55 45 65 35 70 15" stroke="#FF5F5F" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 35C45 15 55 5 65 25C75 45 85 35 90 15" stroke="#FF5F5F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <h2 className="text-6xl md:text-8xl font-normal tracking-tighter text-gray-900 leading-[0.95] mb-6">
        Subscribe to <br /> our newsletter
      </h2>

      <p className="text-gray-700 text-sm md:text-base font-normal mb-10">
        To make your stay special and even more memorable
      </p>

      <button className="px-10 py-4 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition-transform">
        Subscribe Now
      </button>

      <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-64 bg-[#8E44ED] rounded-l-full hidden md:block"></div>
    </section>
  );
}
