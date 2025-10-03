import React, { useState, useEffect } from "react";

function NGOSignup({ onBack }) {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    contact: "",
    location: "",
    organizationName: "",
    description: "",
    website: "",
    availability: "",
    cause: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("NGO Signup Successful!");
    console.log("NGO Signup Data:", formData);
  };

  // Prevent background scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Floating Box */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-3xl p-8 border border-gray-200 z-10">
        <h2 className="text-2xl font-bold text-center mb-2 text-green-700">
          NGO Signup
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join <span className="font-semibold text-green-700">SkillBridge</span>{" "}
          to connect with volunteers and grow your impact.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username + Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email + Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Contact + Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Organization Name */}
          <input
            type="text"
            name="organizationName"
            placeholder="Organization Name"
            value={formData.organizationName}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Organization Description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
          />

          {/* Website + Cause */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="url"
              name="website"
              placeholder="Website URL (Optional)"
              value={formData.website}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
            <select
              name="cause"
              value={formData.cause}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select Cause / Focus Area</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="environment">Environment</option>
              <option value="animal">Animal Welfare</option>
              <option value="women">Women Empowerment</option>
              <option value="community">Community Development</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Availability */}
          <input
            type="text"
            name="availability"
            placeholder="Availability (e.g. Weekdays 9am-6pm)"
            value={formData.availability}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Create Account
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default NGOSignup;
