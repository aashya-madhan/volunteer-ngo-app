import React from "react";
import logo from "../assets/logo.png"; // ✅ Import the logo from assets

function Navbar({ onNavigate }) {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => onNavigate("landing")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-lg text-green-600">
            Volunteer-NGO
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <button onClick={() => onNavigate("landing")} className="hover:text-green-600">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("volunteerSignup")} className="hover:text-green-600">
              Volunteers
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("ngoSignup")} className="hover:text-green-600">
              NGOs
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("home")} className="hover:text-green-600">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("about")} className="hover:text-green-600">
              About Us
            </button>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate("login")}
            className="border border-green-600 px-4 py-2 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition"
          >
            Log In
          </button>
          <button
            onClick={() => onNavigate("signup")}
            className="bg-green-600 px-4 py-2 rounded-full text-white hover:bg-green-700 transition"
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
