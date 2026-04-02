export default function About() {
  return (
    <section className="w-full px-6 md:px-12 py-24 relative overflow-hidden space-y-32">
      
      {/* SECTION 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
        
        {/* Text */}
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl md:text-4xl font-medium leading-snug">
            <span className="relative inline-block">
              Tomorrow
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300 -z-10"></span>
            </span>{" "}
            should be{" "}
            <span className="bg-green-200 px-2 rounded-full">
              better
            </span>{" "}
            than{" "}
            <span className="bg-green-200 px-2 rounded-full">
              today
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>

          <button className="mt-6 text-sm flex items-center gap-2 group">
            Read more
            <span className="w-8 h-[1px] bg-black transition-all group-hover:w-12"></span>
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center relative">
          <img
            src="/images/about1.jpg"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
          />

          {/* Decorative shape */}
          <div className="absolute -right-6 top-10 w-16 h-16 bg-red-400 rotate-12"></div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 relative">
        
        {/* Text */}
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl md:text-4xl font-medium leading-snug">
            <span className="bg-green-200 px-3 rounded-full">
              See
            </span>{" "}
            how we can help you{" "}
            <span className="relative inline-block">
              progress
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300 -z-10"></span>
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms and social research.
          </p>

          <button className="mt-6 text-sm flex items-center gap-2 group">
            Read more
            <span className="w-8 h-[1px] bg-black transition-all group-hover:w-12"></span>
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center relative">
          <img
            src="/images/about2.jpg"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
          />

          {/* Triangle shape */}
          <div className="absolute -left-6 bottom-10 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-red-400"></div>
        </div>
      </div>

      {/* Optional curved line (simple version) */}
      <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-red-300 opacity-40"></div>

    </section>
  );
}