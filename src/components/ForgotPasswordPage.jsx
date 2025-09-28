import React, { useState } from "react";
import InputField from "./InputField";

const ForgotPasswordPage = ({ onBack }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2F4858] text-white p-6">
      <div className="bg-[#2F4858] p-6 rounded-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-green-400">SKILLBRIDGE</h1>

        <p className="mb-4 text-gray-200 text-sm">
          Enter your email to reset your password
        </p>

        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-400 text-black font-semibold py-2 rounded-md hover:bg-green-500"
        >
          Send Reset Link
        </button>

        <button
          onClick={onBack}
          className="mt-4 text-xs text-gray-400 hover:underline"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
