import React, { useState } from "react";
import InputField from "./InputField";
import logo from "../assets/NGO.jpg";

function NGOSignup({ onBack, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    ngoName: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    cause: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("NGO signup successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/background.jpg')" }}>
      <div className="bg-white/95 rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3 flex flex-col md:flex-row overflow-hidden">

        {/* Left Section - Info */}
        <div className="md:w-1/2 bg-green-600 text-white flex flex-col justify-center items-center p-8">
          <img src={logo} alt="logo" className="h-16 w-16 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Register Your NGO</h2>
          <p className="text-center text-sm">
            Connect with volunteers who care about your cause.  
            Register now and grow your impact.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-xl font-bold text-center text-green-600 mb-6">
            NGO Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField label="NGO Name" name="ngoName" value={formData.ngoName} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
            <InputField label="Contact Number" name="contact" value={formData.contact} onChange={handleChange} />
            <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
            <InputField label="Cause / Mission" name="cause" value={formData.cause} onChange={handleChange} />

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
              Register NGO
            </button>
          </form>

          {/* Back + Login */}
          <div className="mt-6 flex flex-col space-y-3">
            <button onClick={onBack} className="w-full border border-green-600 text-green-600 font-semibold py-2 rounded-md hover:bg-green-50 transition">
              ← Back
            </button>
            <button onClick={onSwitchToLogin} className="w-full text-sm text-gray-500 hover:text-green-600">
              Already have an account? Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NGOSignup;
