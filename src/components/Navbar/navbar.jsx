
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
      
      {/* Glass container */}
      <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 shadow-2xl rounded-2xl px-5">
        
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="text-lg md:text-xl font-extrabold tracking-wide flex items-center gap-1"
          >
            <span className="text-white">My</span>
            <span className="text-yellow-400">Portfolio</span>
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-800"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            <div className="text-white text-xl">
              {isOpen ? "✕" : "☰"}
            </div>
          </button>
        </div>

        {/* Mobile Menu (Animated feel) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition flex justify-between items-center"
              >
                {link.name}
                <span className="text-gray-500">→</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}