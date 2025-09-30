import React from "react";

function HomePage({ onLogout }) {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/your-background.jpg')", // replace with your actual image path
      }}
    >
      {/* Dark Overlay Box */}
      <div className="bg-black/70 p-8 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to the Home Page 🎉
        </h1>
        <p className="text-gray-200 mb-6">You are successfully logged in.</p>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomePage;
