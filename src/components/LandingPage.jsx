import React from "react";
import { motion } from "framer-motion";

const LandingPage = ({ onGetStarted, onLogin }) => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/background_image.jpg')", // 🌄 background image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-green-400 mb-4"
        >
          Welcome to SkillBridge
        </motion.h1>

        <h2 className="text-3xl font-bold mb-6 text-green-300">SKILLBRIDGE</h2>

        {/* Description */}
        <p className="mb-8 max-w-2xl text-lg">
          “Whether you are a volunteer looking to contribute your expertise or
          an NGO seeking dedicated hands, SkillBridge makes it easy to connect,
          collaborate, and create meaningful change.”
        </p>

        {/* Buttons */}
        <div className="flex gap-6">
          
          <button
            onClick={onGetStarted}
            className="bg-blue-500 px-8 py-3 rounded-full text-white font-bold shadow-lg 
                       hover:shadow-xl hover:bg-blue-600 transition transform hover:scale-105"
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
