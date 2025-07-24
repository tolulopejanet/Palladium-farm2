import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <motion.div
      className="bg-[#2B7810] text-white pt-16 px-6 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* CTA Order Section */}
      <motion.div
        className="bg-white opacity-80 text-[#2B7810] rounded-xl p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Need fresh produce?
          </h2>
          <p className="text-lg">Place your order today with Palladium Farms</p>
        </div>

        <a
          href="https://wa.me/2349125437125"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2B7810] text-white font-semibold px-6 py-3 mt-6 md:mt-0 rounded hover:bg-green-800 transition cursor-pointer"
        >
          Order Now
        </a>

        {/* Decorative shape */}
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-green-800 opacity-30 rounded-full -mb-20 -mr-20"></div>
      </motion.div>

      {/* Footer Content */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* About Palladium */}
        <div className="md:col-span-2 text-white opacity-80">
          <h3 className="text-2xl font-bold mb-4">Palladium Farms</h3>
          <p>
            At Palladium Farms, we’re redefining agriculture through smart
            farming practices, community support, and quality produce. Our
            commitment is to provide fresh, healthy, and sustainable food
            straight from our fields to your table.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-white opacity-80 text-center">
          <h4 className="text-2xl font-bold mb-4">Explore</h4>
          <div className="flex flex-col space-y-2 text-white">
            <Link to="/aboutus" className="hover:font-bold">
              About Us
            </Link>
            <Link to="/services" className="hover:font-bold">
              Services
            </Link>
            <Link to="/blog" className="hover:font-bold">
              Our Blog
            </Link>
            <Link to="/contact" className="hover:font-bold">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-white opacity-80 text-center">
          <h4 className="text-2xl font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:info@palladiumfarm.com"
              className="hover:text-green-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="text-center text-sm text-white opacity-80 border-t border-white pt-6 pb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Palladium Farms. All rights reserved.
      </motion.div>
    </motion.div>
  );
};

export default FooterSection;
