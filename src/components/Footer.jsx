import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B7810] text-white px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo/Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Palladium Farms</h2>
          <p className="text-sm text-gray-200">
            Driving agricultural innovation and sustainability through modern
            farming practices and community partnerships.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/aboutus" className="hover:text-green-200">
              About Us
            </Link>
            <Link to="/services" className="hover:text-green-200">
              Services
            </Link>
            <Link to="/blog" className="hover:text-green-200">
              Our Blog
            </Link>
            <Link to="/contact" className="hover:text-green-200">
              Contact
            </Link>
          </div>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-green-200">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-green-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-green-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-6 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Palladium Farms. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
