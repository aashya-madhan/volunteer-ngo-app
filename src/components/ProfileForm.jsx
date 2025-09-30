import React, { useState } from "react";

function ProfileForm({ role, onProfileComplete, onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    skills: "",
    availability: "",
    orgName: "",
    orgDescription: "",
    website: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    onProfileComplete();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          {role === "Volunteer" ? "Volunteer Profile" : "NGO Profile"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Common fields */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          {/* ✅ Contact No for Volunteers */}
          {role === "Volunteer" && (
            <input
              type="text"
              name="contactNo"
              placeholder="Contact Number"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          )}

          {/* Role-specific fields */}
          {role === "Volunteer" && (
            <>
              <input
                type="text"
                name="skills"
                placeholder="Skills (e.g., Teaching, Design)"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />

              <input
                type="text"
                name="availability"
                placeholder="Availability (e.g., Weekends, Evening)"
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </>
          )}

          {role === "NGO" && (
            <>
              <input
                type="text"
                name="orgName"
                placeholder="Organization Name"
                value={formData.orgName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              <textarea
                name="orgDescription"
                placeholder="Organization Description"
                value={formData.orgDescription}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />

              <input
                type="url"
                name="website"
                placeholder="Website URL"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </>
          )}

          {/* Location for both */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
               ← Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
