import React from "react";

function LandingPage({ onSwitchToLogin }) {
  return (
    <div className="text-center pt-20">
      {/* Hero Section */}
      <section className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Connecting Volunteers with NGOs
        </h1>
        <p className="text-gray-600 mb-6">
          Explore opportunities that matter to you and create meaningful change.
        </p>
        <button
          onClick={onSwitchToLogin}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Get Started
        </button>
      </section>

      {/* Categories */}
      <section className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <span className="text-4xl">📚</span>
          <h3 className="text-lg font-semibold mt-2">Education</h3>
          <p className="text-sm text-gray-500">Teach & mentor students.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <span className="text-4xl">🌱</span>
          <h3 className="text-lg font-semibold mt-2">Environment</h3>
          <p className="text-sm text-gray-500">Work on eco-projects.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <span className="text-4xl">💊</span>
          <h3 className="text-lg font-semibold mt-2">Healthcare</h3>
          <p className="text-sm text-gray-500">Support health initiatives.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <span className="text-4xl">🤝</span>
          <h3 className="text-lg font-semibold mt-2">Community</h3>
          <p className="text-sm text-gray-500">Help local communities.</p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="mt-16 bg-green-50 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">50,000</h2>
            <p className="text-gray-600">Volunteers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-700">500</h2>
            <p className="text-gray-600">NGOs</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-700">5,150</h2>
            <p className="text-gray-600">Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-700">₹5,000,109</h2>
            <p className="text-gray-600">CSR Impact</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
