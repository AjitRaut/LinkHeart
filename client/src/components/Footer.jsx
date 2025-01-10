import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Tagline */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-white text-xl font-bold">LinkHeart</h1>
          <p className="text-sm mt-2">Connecting hearts, one swipe at a time.</p>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 text-sm">
          <Link to="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/help" className="hover:text-white transition">
            Help Center
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>&copy; 2025 LinkHeart - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
