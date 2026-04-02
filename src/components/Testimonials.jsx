export default function Testimonials() {
  return (
    <section className="w-full px-6 md:px-12 py-28 relative overflow-hidden text-center">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium mb-16">
        <span className="bg-green-200 px-3 rounded-full">
          What
        </span>{" "}
        our customer says{" "}
        <span className="relative inline-block">
          About Us
          <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 -z-10"></span>
        </span>
      </h2>

      {/* Floating avatars LEFT */}
      <img src="/images/user1.jpg" className="w-10 h-10 rounded-full absolute top-20 left-10 hidden md:block" />
      <img src="/images/user2.jpg" className="w-14 h-14 rounded-full absolute top-40 left-20 hidden md:block" />
      <img src="/images/user3.jpg" className="w-12 h-12 rounded-full absolute bottom-20 left-16 hidden md:block" />

      {/* Floating avatars RIGHT */}
      <img src="/images/user4.jpg" className="w-12 h-12 rounded-full absolute top-24 right-16 hidden md:block" />
      <img src="/images/user5.jpg" className="w-16 h-16 rounded-full absolute top-44 right-10 hidden md:block" />
      <img src="/images/user6.jpg" className="w-24 h-24 rounded-full absolute bottom-10 right-12 hidden md:block" />

      {/* Card */}
      <div className="max-w-2xl mx-auto bg-green-100 rounded-3xl p-8 md:p-12 relative">
        
        {/* Quote Icon */}
        <span className="absolute top-4 left-6 text-5xl text-gray-300">“</span>

        {/* Text */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed px-4">
          Elementum delivered the site within the timeline as they requested. 
          In the end, the client found a 50% increase in traffic within days since its launch. 
          They also had an impressive ability to use technologies that the company hasn’t used, 
          which have also proved to be easy to use and reliable.
        </p>

        {/* Closing Quote */}
        <span className="absolute bottom-4 right-6 text-5xl text-gray-300">”</span>
      </div>
    </section>
  );
}