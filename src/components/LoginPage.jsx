import React, { useState } from "react";

function LoginPage({ onBack, onSwitchToSignup, onForgotPassword, onLoginSuccess, onNavigate }) {
  const [role, setRole] = useState("volunteer");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      // ✅ pass role info back to App.js
      onLoginSuccess(role);

      // ✅ navigate to dashboard after login
      if (onNavigate) {
        onNavigate(role === "volunteer" ? "volunteerDashboard" : "ngoDashboard");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }} // ✅ background image from public folder
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          {role === "volunteer" ? "Volunteer Login" : "NGO Login"}
        </h2>

        {/* Role Selection */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setRole("volunteer")}
            className={`px-4 py-2 rounded-lg transition ${
              role === "volunteer"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Volunteer
          </button>
          <button
            onClick={() => setRole("ngo")}
            className={`px-4 py-2 rounded-lg transition ${
              role === "ngo"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            NGO
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-green-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-green-300"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm font-medium">
          <button
            onClick={onSwitchToSignup}
            className="text-green-700 hover:underline"
          >
            Don&apos;t have an account? Join us now!
          </button>
          <button
            onClick={onForgotPassword}
            className="text-green-700 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mt-6 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
