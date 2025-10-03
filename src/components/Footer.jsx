import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-sm">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Sign Up for Our Newsletter
          </h3>
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

        {/* Links + Copy */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex space-x-4 text-sm">
            <a href="/about" className="hover:text-green-400">
              About
            </a>
            <a href="/contact" className="hover:text-green-400">
              Contact
            </a>
            <a href="/privacy" className="hover:text-green-400">
              Privacy
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Volunteer-NGO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
