import React, { useState } from "react";

function LoginPage({ onBack, onSwitchToSignup, onForgotPassword, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setMessage("❌ No account found. Please sign up first!");
      return;
    }
    if (savedUser.email === formData.email && savedUser.password === formData.password) {
      setMessage("✅ Login successful!");
      setTimeout(() => onLoginSuccess(), 1500);
    } else {
      setMessage("❌ Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white text-black p-10 rounded-2xl shadow-lg w-[500px]">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        {message && <p className="mb-3 text-center text-sm">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="email" name="email" placeholder="Email"
            value={formData.email} onChange={handleChange}
            className="p-3 border rounded-lg" />

          <input type="password" name="password" placeholder="Password"
            value={formData.password} onChange={handleChange}
            className="p-3 border rounded-lg" />

          <button type="submit"
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
            Login
          </button>
        </form>

        {/* Left-Right Layout */}
        <div className="flex justify-between mt-4 text-sm">
          <button onClick={onForgotPassword} className="text-red-500 hover:underline">
            Forgot Password?
          </button>
          <button onClick={onSwitchToSignup} className="text-blue-500 hover:underline">
            Create Account
          </button>
        </div>

        <button onClick={onBack} className="mt-4 text-gray-600 hover:underline block text-center">
          ← Back
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
