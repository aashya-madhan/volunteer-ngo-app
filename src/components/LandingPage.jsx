import React from "react";

function LandingPage({ onSwitchToLogin }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200 text-center p-6">
      <h1 className="text-4xl font-extrabold text-green-800 mb-4">
        Welcome to SkillBridge
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md">
        Connecting volunteers and NGOs to create real impact together.
      </p>

      <button
        onClick={onSwitchToLogin} // ✅ fixed (no onNavigate)
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
