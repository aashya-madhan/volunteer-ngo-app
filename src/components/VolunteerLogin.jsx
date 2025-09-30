import React, { useState } from "react";

function VolunteerLogin({ onSwitch }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    alert("Volunteer Login Successful (Demo)");
    onSwitch("home");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Volunteer Login
        </h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Login
        </button>
        <div className="flex justify-between mt-4 text-sm">
          <button
            onClick={() => onSwitch("volunteer-signup")}
            className="text-blue-500 hover:underline"
          >
            Create Account
          </button>
          <button
            onClick={() => onSwitch("forgot-password")}
            className="text-red-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}

export default VolunteerLogin;
