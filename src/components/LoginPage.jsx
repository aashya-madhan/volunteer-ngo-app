import React, { useState, useEffect } from "react";

function LoginPage({ onBack, onSwitchToSignup, onForgotPassword, onLoginSuccess, onNavigate }) {
  const [role, setRole] = useState("volunteer");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onLoginSuccess(role);
      if (onNavigate) {
        onNavigate(role === "volunteer" ? "volunteerDashboard" : "ngoDashboard");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  // ✅ Prevent background scroll
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
        
        {/* Title */}
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

          {/* Links */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-green-700 font-medium hover:underline"
            >
              Don’t have an account? Sign up
            </button>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-green-700 font-medium hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mt-6 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
