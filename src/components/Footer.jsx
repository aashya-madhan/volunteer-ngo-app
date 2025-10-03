import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-sm">
            <a href="#" className="hover:text-green-400"> Facebook</a>
            <a href="#" className="hover:text-green-400">Twitter</a>
            <a href="#" className="hover:text-green-400">Instagram</a>
            <a href="#" className="hover:text-green-400">LinkedIn</a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sign Up for Our Newsletter</h3>
          <form className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Copy */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-gray-400">
            © 2025 Volunteer-NGO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
