import React, { useState } from "react";
import AuthLayout from "./AuthLayout";

function SignupPage({ onBack, onSwitchToLogin, onSwitchToVolunteer, onSwitchToNGO }) {
  const [role, setRole] = useState("Volunteer");

  const handleNext = () => {
    if (role === "Volunteer") {
      onSwitchToVolunteer();
    } else {
      onSwitchToNGO();
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Create an Account</h2>
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

      <button
        onClick={handleNext}
        className="btn-primary w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-green-600 text-white shadow hover:bg-green-700 transition"
      >
        Next
      </button>

      <div className="text-center mt-4">
        <p className="text-sm text-black">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-black hover:underline font-medium px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-green-600  shadow hover:bg-green-700 transition"
          >
            Sign in
          </button>
        </p>
        <button
          onClick={onBack}
          className="mt-3 text-sm text-black hover:underline px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-green-600 shadow hover:bg-green-700 transition"
        >
          ← Back
        </button>
      </div>
    </AuthLayout>
  );
}

export default SignupPage;
