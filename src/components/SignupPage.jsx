import React, { useState } from "react";

function SignupPage({ onBack, onSignupSuccess }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    role: "Volunteer",
    location: "",
    skills: "",
    orgName: "",
    orgDescription: "",
    website: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.fullName) {
      setMessage("⚠️ Please fill all required fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    setMessage("✅ Account created successfully!");
    setTimeout(() => onSignupSuccess(), 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white text-black p-10 rounded-2xl shadow-lg w-[500px]">
        <h2 className="text-3xl font-bold mb-2 text-center">Create an Account</h2>
        <p className="text-gray-500 mb-6 text-center">
          Join SkillBridge to connect with NGOs and volunteering opportunities
        </p>

        {message && <p className="mb-3 text-center text-sm">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="username" placeholder="Username"
            value={formData.username} onChange={handleChange}
            className="p-3 border rounded-lg" required />

          <input type="email" name="email" placeholder="Email"
            value={formData.email} onChange={handleChange}
            className="p-3 border rounded-lg" required />

          <input type="password" name="password" placeholder="Password"
            value={formData.password} onChange={handleChange}
            className="p-3 border rounded-lg" required />

          <input type="text" name="fullName" placeholder="Full Name"
            value={formData.fullName} onChange={handleChange}
            className="p-3 border rounded-lg" required />

          <select name="role" value={formData.role} onChange={handleChange}
            className="p-3 border rounded-lg">
            <option value="Volunteer">Volunteer</option>
            <option value="NGO">NGO / Organization</option>
          </select>

          <input type="text" name="location" placeholder="Location (Optional)"
            value={formData.location} onChange={handleChange}
            className="p-3 border rounded-lg" />

          {formData.role === "Volunteer" && (
            <input type="text" name="skills" placeholder="Skills (Optional)"
              value={formData.skills} onChange={handleChange}
              className="p-3 border rounded-lg" />
          )}

          {formData.role === "NGO" && (
            <>
              <input type="text" name="orgName" placeholder="Organization Name"
                value={formData.orgName} onChange={handleChange}
                className="p-3 border rounded-lg" />

              <textarea name="orgDescription" placeholder="Organization Description"
                value={formData.orgDescription} onChange={handleChange}
                className="p-3 border rounded-lg" />

              <input type="url" name="website" placeholder="Website URL (Optional)"
                value={formData.website} onChange={handleChange}
                className="p-3 border rounded-lg" />
            </>
          )}

          <button type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
            Create Account
          </button>
        </form>

        <button onClick={onBack} className="mt-4 text-gray-600 hover:underline block text-center">
          ← Back
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
