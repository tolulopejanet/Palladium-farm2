import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/logo3.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2B7810] text-white fixed top-0 left-0 right-0 border-b border-white/10 z-50">
      <div className="container mx-auto py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* logo */}
          <div>
            <Link to="/" className="text-xl ">
              <img src={Logo} alt="logo" className="w-25 h-20 object-contain" />
            </Link>
          </div>

          {/* desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300 text-sm font-bold px-3">
              {" "}
              Home
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-gray-300 text-sm font-bold px-3"
            >
              {" "}
              About Us
            </Link>

            <Link
              to="/services"
              className="hover:text-gray-300 text-sm font-bold"
            >
              {" "}
              Services
            </Link>

            <Link to="/blog" className="hover:text-gray-300 text-sm font-bold">
              {" "}
              Blog
            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-300 text-sm font-bold"
            >
              {" "}
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="hover:text-gray-300 hidden border  px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-900 xl:block"
            >
              Orders
            </Link>
          </div>

          {/* mobile menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover-bg gray-700"
            >
              {!isMenuOpen ? (
                <MdMenu className="block w-6 h-6" />
              ) : (
                <MdClose className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 text-center">
            <Link
              to="/"
              className="block px-3 py-2 hover:bg-green-800 bg:text-green-100"
            >
              Home{" "}
            </Link>
            <Link
              to="/aboutus"
              className="block px-3 py-2 hover:bg-green-800 bg:text-green-100"
            >
              About Us{" "}
            </Link>

            <Link
              to="/services"
              className="block px-3 py-2 hover:bg-green-800 bg:text-green-100"
            >
              Services{" "}
            </Link>

            <Link
              to="/blog"
              className="block px-3 py-2 bg:text-green-100 bg-green-900 px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-900"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 hover:bg-green-800 bg:text-green-100"
            >
              Contact Us
            </Link>

            <div className="flex justify-center space-x-4">
              <Link
                to="/"
                className="hover:text-gray-300 border px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-900 block"
              >
                Orders
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
