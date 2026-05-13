import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">
            <span className="text-white">My</span>
            <span className="text-yellow-300">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="hover:text-yellow-300 transition duration-200">Home</a>
            <a href="#about" className="hover:text-yellow-300 transition duration-200">About</a>
            <a href="#skills" className="hover:text-yellow-300 transition duration-200">Skills</a>
            <a href="#projects" className="hover:text-yellow-300 transition duration-200">Projects</a>
            <a href="#contact" className="hover:text-yellow-300 transition duration-200">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4 font-medium bg-white text-gray-800 rounded-b-lg px-4 py-3 shadow-md">
            <a href="#home" className="hover:text-purple-600">Home</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#skills" className="hover:text-purple-600">Skills</a>
            <a href="#projects" className="hover:text-purple-600">Projects</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}