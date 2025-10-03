import React, { useState, useEffect } from "react";

function ForgotPasswordPage({ onBack, onSwitchToLogin }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  // ✅ Prevent background scrolling
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating Box */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-200 z-10">
        
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back Button */}
        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={onBack}
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-500 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
