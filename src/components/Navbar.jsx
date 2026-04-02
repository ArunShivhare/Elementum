import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav className="w-full px-6 md:px-24 py-8 flex items-center justify-between bg-white relative z-50">
      
      <h1 className="text-2xl font-light tracking-tight text-gray-900 cursor-pointer">
        Elementum
      </h1>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="text-[13px] font-normal text-gray-800 hover:text-gray-500 transition-colors tracking-tight"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className="group flex flex-col gap-[6px] items-end"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="w-8 h-[1px] bg-black transition-all group-hover:w-10"></span>
        <span className="w-8 h-[1px] bg-black transition-all group-hover:w-6"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col items-center py-10 gap-6 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {navItems.map((item, index) => (
            <button key={index} className="text-lg font-light tracking-wide text-gray-800">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
