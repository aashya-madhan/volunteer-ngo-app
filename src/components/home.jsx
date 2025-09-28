import React from "react";

function HomePage({ onLogout }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page 🎉</h1>
      <p className="mb-6 text-lg">You are successfully logged in.</p>

      <button
        onClick={onLogout}
        className="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default HomePage;
