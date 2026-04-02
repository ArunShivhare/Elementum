export default function Newsletter() {
  return (
    <section className="w-full px-6 md:px-12 py-24 bg-[#cfe3d4] text-center relative overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-medium leading-tight">
        Subscribe to <br /> our newsletter
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-gray-700 text-sm md:text-base">
        To make your stay special and even more memorable
      </p>

      {/* Button */}
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-full text-sm hover:opacity-80 transition">
        Subscribe Now
      </button>

      {/* Decorative shape */}
      <div className="absolute right-10 bottom-10 w-16 h-16 bg-purple-400 rounded-full hidden md:block"></div>
    </section>
  );
}