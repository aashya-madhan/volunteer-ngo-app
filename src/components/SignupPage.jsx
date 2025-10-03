import React, { useState, useEffect } from "react";

function SignupPage({ onBack, onSwitchToLogin, onSwitchToVolunteer, onSwitchToNGO }) {
  const [role, setRole] = useState("Volunteer");

  const handleNext = () => {
    if (role === "Volunteer") {
      onSwitchToVolunteer();
    } else {
      onSwitchToNGO();
    }
  };

  // ✅ Prevent background scrolling
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating Box */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-200 z-10">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Join <span className="font-semibold text-green-700">SkillBridge</span> to connect with NGOs and volunteering opportunities.
        </p>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-black mb-2">I am a</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="Volunteer">Volunteer</option>
            <option value="NGO">NGO / Organization</option>
          </select>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full px-3 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Next
        </button>

        {/* Links */}
        <div className="text-center mt-6 space-y-3">
          <p className="text-sm text-black">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-green-700 hover:underline font-medium"
            >
              Sign in
            </button>
          </p>

          <button
            onClick={onBack}
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
