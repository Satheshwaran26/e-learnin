import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 py-4">
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center font-light text-xl">
          <a href="/" className="flex items-center">
            <img
              src="/images/divineinfotech.png"
              alt="Logo"
              width={55}
              height={55}
              className="cursor-pointer"
            />
            <span className="ml-2 text-black font-light">Divine Infotech</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-lg py-3 px-5 text-gray-800 font-light bg-white rounded-full ml-16 border border-[#212020]">
          <a href="/" className="hover:text-orange-400 transition">Home</a>
          <a href="/about" className="hover:text-orange-400 transition">About</a>
          <a href="/contact" className="hover:text-orange-400 transition">Contact</a>
          <a href="/features" className="hover:text-orange-400 transition">Feature</a>

          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              className="flex items-center hover:text-orange-400 transition"
            >
              Products <ChevronDown className="ml-1 w-5 h-5" />
            </button>
            {isProductDropdownOpen && (
              <div className="absolute left-0 mt-4 w-48 text-gray-800 border border-[#252525] shadow-lg rounded-lg py-2 bg-white">
                <a href="/products/billingpage" className="block px-4 py-2">Billing Software</a>
                <a href="/products/ai-model" className="block px-4 py-2">AI Model</a>
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/signin">  {/* Use Link to navigate to the Sign In page */}
            <button className="px-6 py-2 border text-lg font-light border-[#212020] text-gray-800 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Login
            </button>
          </Link>
          <a href="/get-started">
            <button className="px-6 py-2 text-lg border-[#212020] font-normal border bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300">
              Get Started
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-black py-4 px-6 space-y-4">
          <a href="/" className="block hover:text-orange-400">Home</a>
          <a href="/about" className="block hover:text-orange-400">About</a>
          <a href="/contact" className="block hover:text-orange-400">Contact</a>
          <a href="/features" className="block hover:text-orange-400">Feature</a>
          <Link to="/signin" className="block hover:text-orange-400">Login</Link>  {/* Use Link here as well */}
          <a href="/get-started" className="block hover:text-orange-400">Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
