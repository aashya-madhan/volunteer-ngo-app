import React, { useState, useEffect } from "react";

function VolunteerSignup({ onBack }) {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    availability: "",
    skills: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Signup Data:", formData);
    alert("Account created successfully!");
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
          Volunteer Signup
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join{" "}
          <span className="font-semibold text-green-700">SkillBridge</span> to
          connect with NGOs and showcase your skills.
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
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Contact + Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Availability + Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="availability"
              placeholder="Availability (e.g. Weekends)"
              value={formData.availability}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="skills"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
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

          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="w-full border border-green-600 text-green-600 font-semibold py-2 rounded-md hover:bg-green-50 transition"
          >
            ← Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerSignup;
