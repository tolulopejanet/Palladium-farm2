import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/logo3.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#2B7810] text-white fixed top-0 left-0 right-0 border-b border-white/10 z-50"
    >
      <div className="mx-auto py-2 px-12">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <div>
            <Link to="/" className="text-xl ">
              <img src={Logo} alt="logo" className="w-25 h-20 object-contain" />
            </Link>
          </div>

          {/* desktop menu */}
          <div className="hidden lg:flex items-center space-x-12 ">
            <Link to="/" className="hover:text-gray-300 text-md font-bold px-3">
              Home
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-gray-300 text-md font-bold px-3"
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="hover:text-gray-300 text-md font-bold"
            >
              Services
            </Link>

            <Link to="/blog" className="hover:text-gray-300 text-md font-bold">
              Blog
            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-300 text-sm font-bold"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:flex items-center space-x-4">
            <Link
              to="/order"
              className="hover:text-gray-300 hidden border  px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-900 xl:block"
            >
              Orders
            </Link>
          </div>

          {/* mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:green-300"
            >
              {!isMenuOpen ? (
                <MdMenu className=" w-6 h-6" />
              ) : (
                <MdClose className=" w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* animated mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            <div className="pt-2 pb-8 space-y-4 text-center bg-[#2B7810] text-white">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 hover:bg-green-700 rounded"
              >
                Home
              </Link>

              <Link
                to="/aboutus"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 hover:bg-green-700 rounded"
              >
                About Us
              </Link>

              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 hover:bg-green-700 rounded"
              >
                Services
              </Link>

              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 hover:bg-green-700 rounded"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 pb-2 hover:bg-green-700 rounded"
              >
                Contact Us
              </Link>

              <Link
                to="/order"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 mt-6 border border-white rounded hover:bg-green-700"
              >
                Orders
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
