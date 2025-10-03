import React, { useState } from "react";

function VolunteerSignup() {
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
    alert("Account created successfully!"); // ✅ replace later with backend call
  };

  return (
    <div className="app-background flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        
        <h2 className="text-2xl font-bold text-center mb-6">Volunteer Signup</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username + Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
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
            className="w-full border p-2 rounded"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
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
              className="w-full border p-2 rounded"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border p-2 rounded"
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
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="skills"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Location (full row) */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
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
  onClick={() => window.location.href = "/login"}
  className="mb-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
>
  ← Back
</button>

        </form>
      </div>
    </div>
  );
}

export default VolunteerSignup;
