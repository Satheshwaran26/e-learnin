import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["AI Tools", "Solutions", "Automation", "Innovation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleGoClick = () => {
    if (selectedOption) {
      setIsLoading(true);
      setTimeout(() => {
        alert(`You selected: ${selectedOption}`);
        setIsLoading(false);
      }, 1500);
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  return (
    <div className="relative bg-white">
      <div className="container mx-auto text-center pt-[120px] px-4 relative z-10">
        <h3 className="mb-4 text-gray-900 font-light text-sm border border-[#343434] px-4 py-2 rounded-full inline-block">
          ✨ Explore the Capital Product
        </h3>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 w-11/12 sm:w-10/12 mb-6 mx-auto text-center">
          Next-Generation
          <span className="text-orange-400 font-light ml-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          for Smarter Business
        </h1>
        <p className="sm:text-md text-[#767676] font-light mb-2 w-11/12 sm:w-9/12 mx-auto">
          Transform the way you do business with our <br />
          AI-powered SaaS platform. Our cutting-edge technology.
        </p>

        {/* Product Selector and Go Button */}
        <div className="flex flex-wrap justify-center gap-4 py-6">
          {/* Get Started Button */}
          <button
            onClick={() => alert('Get Started clicked!')}
            className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text text-black px-4 py text-base sm:text-lg flex items-center transition-colors border-[#212020] border rounded-lg"
          >
            Get Started
          </button>

          {/* View More Button */}
          <button
            onClick={() => alert('View More clicked!')}
            className="font-extralight border-[#212020] border text-black px-6 py-2 text-base sm:text-lg rounded-lg flex items-center transition-colors"
          >
            View More
          </button>
        </div>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-4 text-[#767676] text-sm sm:text-base mb-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-orange-500 " />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-orange-500" />
            14-days free trial
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-orange-500" />
            Generate in seconds using AI
          </div>
        </div>
      </div>

      {/* Floating 3D Images */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Floating 3D cube"
          height={50}
          src="../assets/ss.png"
          width={80}
          className="absolute animate-float top-10 sm:top-20 left-10 sm:left-40"
        />
        <img
          alt="Floating 3D oval"
          height={70}
          src="../assets/sc.png"
          width={70}
          className="absolute animate-rotate top-5 sm:top-10 right-10 sm:right-40"
        />
        <img
          alt="Floating 3D sphere"
          height={50}
          src="../assets/scc.png"
          width={50}
          className="absolute animate-float bottom-2 sm:bottom-5 left-10 sm:left-60"
        />
        <img
          alt="Floating 3D cube"
          height={70}
          src="../assets/ss.png"
          width={70}
          className="absolute animate-float bottom-2 sm:bottom-5 right-10 sm:right-60"
        />
      </div>
    </div>
  );
};

export default HeroSection;
