import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav className="w-full px-6 md:px-12 py-5 flex items-center justify-between relative">
      
      {/* Logo */}
      <h1 className="text-lg font-medium tracking-wide">
        Elementum
      </h1>

      {/* Center Menu (Desktop) */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10 text-sm font-normal">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Hamburger (always visible like Figma) */}
      <div
        className="cursor-pointer flex flex-col gap-[4px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-[1.5px] bg-black"></span>
        <span className="w-6 h-[1.5px] bg-black"></span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden z-50">
          {navItems.map((item, index) => (
            <p key={index} className="cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
}