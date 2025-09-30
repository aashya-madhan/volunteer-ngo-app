import React, { useState } from "react";
import InputField from "./InputField";

function VolunteerSignup({ onBack, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    contact: "",
    location: "",
    skills: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("volunteerUser", JSON.stringify(formData));
    alert("Volunteer account created successfully!");
    onSwitchToLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Volunteer Signup</h2>
        <p className="text-gray-500 text-center mb-6">
          Join SkillBridge to connect with NGOs and volunteering opportunities
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField label="Username" name="username" type="text" placeholder="Choose a username" value={formData.username} onChange={handleChange} required />
          <InputField label="Email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          <InputField label="Password" name="password" type="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />
          <InputField label="Full Name" name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
          <InputField label="Contact Number" name="contact" type="tel" placeholder="Enter your phone number" value={formData.contact} onChange={handleChange} required />

          <hr className="my-4" />
          <p className="text-sm font-semibold text-gray-600">Additional Information (Optional)</p>
          <InputField label="Location" name="location" type="text" placeholder="e.g. New York, NY" value={formData.location} onChange={handleChange} />
          <InputField label="Skills" name="skills" type="text" placeholder="e.g. web development, teaching, design" value={formData.skills} onChange={handleChange} />
          <InputField label="Availability" name="availability" type="text" placeholder="e.g. weekends, evenings, 10 hrs/week" value={formData.availability} onChange={handleChange} />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Create Account
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button onClick={onSwitchToLogin} className="text-blue-600 hover:underline">
              Sign in
            </button>
          </p>
          <button onClick={onBack} className="mt-2 text-sm text-gray-500 hover:underline">
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default VolunteerSignup;
