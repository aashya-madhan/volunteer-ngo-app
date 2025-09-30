import React, { useState } from "react";
import InputField from "./InputField";

function NGOSignup({ onBack, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    contact: "",
    location: "",
    orgName: "",
    orgDescription: "",
    website: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save NGO data in localStorage
    localStorage.setItem("ngoUser", JSON.stringify(formData));

    console.log("NGO Signup Data:", formData);
    alert("NGO account created successfully!");
    onSwitchToLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">NGO Signup</h2>
        <p className="text-gray-500 text-center mb-6">
          Join SkillBridge to connect with volunteers and showcase your organization
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField label="Username" name="username" type="text"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <InputField label="Email" name="email" type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField label="Password" name="password" type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <InputField label="Full Name" name="fullName" type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <InputField label="Contact Number" name="contact" type="tel"
            placeholder="Enter contact number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <InputField label="Location (Optional)" name="location" type="text"
            placeholder="e.g. New York, NY"
            value={formData.location}
            onChange={handleChange}
          />
          <InputField label="Organization Name" name="orgName" type="text"
            placeholder="Enter your organization's name"
            value={formData.orgName}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-gray-700 mb-1">Organization Description</label>
            <textarea
              name="orgDescription"
              placeholder="Tell us about your organization's mission and goals"
              value={formData.orgDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <InputField label="Website URL (Optional)" name="website" type="url"
            placeholder="https://www.yourorganization.org"
            value={formData.website}
            onChange={handleChange}
          />
          <InputField label="Availability (Optional)" name="availability" type="text"
            placeholder="e.g. Weekdays 9am - 6pm"
            value={formData.availability}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-blue-600 hover:underline"
            >
              Sign in
            </button>
          </p>
          <button
            onClick={onBack}
            className="mt-2 text-sm text-gray-500 hover:underline"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NGOSignup;
