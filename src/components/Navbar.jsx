import React from "react";

function Navbar({ onSwitch }) {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => onSwitch("landing")}
      >
        Volunteer-NGO Connect
      </h1>
      <div className="space-x-4">
        <button
          onClick={() => onSwitch("volunteer-login")}
          className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Volunteer Login
        </button>
        <button
          onClick={() => onSwitch("ngo-login")}
          className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          NGO Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
