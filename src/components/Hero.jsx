export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 py-20 text-center relative overflow-hidden">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl mx-auto">
        The{" "}
        <span className="relative inline-block">
          thinkers
          <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300 -z-10 rounded"></span>
        </span>{" "}
        and doers were{" "}
        <span className="bg-pink-200 px-3 py-1 rounded-full">
          changing
        </span>{" "}
        the{" "}
        <span className="bg-green-200 px-3 py-1 rounded-full">
          status
        </span>{" "}
        Quo with
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
        We are a team of strategists, designers communicators, researchers.
        Together, we believe that progress only happens when you refuse to play things safe.
      </p>

      {/* Floating Avatars */}
      <div className="relative mt-16 h-[200px] md:h-[250px]">
        
        <img
          src="/images/user1.jpg"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full absolute left-[10%] top-[40%]"
        />

        <img
          src="/images/user2.jpg"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full absolute left-[25%] top-[10%]"
        />

        <img
          src="/images/user3.jpg"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full absolute left-[40%] top-[60%]"
        />

        <img
          src="/images/user4.jpg"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full absolute left-[55%] top-[20%]"
        />

        <img
          src="/images/user5.jpg"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full absolute left-[70%] top-[50%]"
        />

        <img
          src="/images/user6.jpg"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full absolute left-[85%] top-[30%]"
        />

      </div>
    </section>
  );
}