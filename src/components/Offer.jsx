export default function Offer() {
  const offers = [
    {
      title: "Collaborative & partnership",
      desc: "Office of multiple interest content",
    },
    {
      title: "We talk about our weight",
      desc: "The hanger US Air force digital experimental",
    },
    {
      title: "Piloting digital confidence",
      desc: "Delta faucet content, social, digital",
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-24 relative overflow-hidden">
      
      {/* Top decorative curve */}
      <div className="hidden md:block absolute right-0 top-0 w-[300px] h-[150px] border-t-2 border-red-300 rounded-[100%]"></div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-2xl">
        What we{" "}
        <span className="bg-green-200 px-3 rounded-full">can</span>{" "}
        <span className="relative inline-block">
          offer
          <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 -z-10"></span>
        </span>{" "}
        you!
      </h2>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-300"></div>

      {/* List */}
      <div className="mt-6">
        {offers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 group cursor-pointer"
          >
            
            {/* Left text */}
            <p className="text-gray-500 text-sm md:w-1/3">
              {item.desc}
            </p>

            {/* Right content */}
            <div className="flex items-center justify-between md:w-2/3 mt-3 md:mt-0">
              <h3 className="text-lg md:text-xl font-normal group-hover:text-black transition">
                {item.title}
              </h3>

              {/* Minimal arrow line */}
              <div className="flex items-center gap-2">
                <span className="w-10 h-[1px] bg-black transition-all group-hover:w-16"></span>
                <span className="text-sm">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}