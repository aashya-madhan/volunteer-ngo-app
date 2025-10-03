import React, { useState } from "react";
import InputField from "./InputField";

const ForgotPasswordPage = ({ onBack }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-[#2F4858]/95 p-8 rounded-2xl shadow-lg w-full max-w-sm text-black">
        
        {/* App Title */}
        <h1 className="text-2xl font-bold text-center mb-2 text-green-400">
          SKILLBRIDGE
        </h1>
        <p className="text-gray-300 text-sm text-center mb-6">
          Enter your email to reset your password
        </p>

        {/* Email Input */}
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Reset Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-green-400 text-black font-semibold py-2 rounded-md hover:bg-green-500 transition"
        >
          Send Reset Link
        </button>

        {/* Back Button */}
      
      <div className="mt-4 text-center">
      <button
          onClick={onBack}
          className="w-full bg-gray-200 text-black font-bold text-lg py-2 rounded-md hover:bg-gray-300 transition"
  >
    ← Back to Login
      </button>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
