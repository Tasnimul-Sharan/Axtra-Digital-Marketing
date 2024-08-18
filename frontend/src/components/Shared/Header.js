import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=256&q=75"
              alt="Logo"
              className="h-8 mr-2"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 hover:text-black">
            HOME
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            ABOUT
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            PAGES
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            SERVICES
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            TEAM
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            BLOG
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            CONTACT
          </a>
          <Link to="/products" className="text-gray-600 hover:text-black">
            PRODUCTS
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <AiOutlineSearch className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer" />
          <FaBars
            className="h-6 w-6 text-gray-600 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-90 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src="path/to/logo.png" alt="Logo" className="h-8 mr-2" />
            <span className="font-bold text-lg text-white">Axtra</span>
          </div>
          <FaTimes
            className="h-6 w-6 text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="p-4">
          <nav className="space-y-4 text-white">
            <a href="/" className="block text-2xl">
              HOME
            </a>
            <a href="/" className="block text-2xl">
              ABOUT
            </a>
            <a href="/" className="block text-2xl">
              SERVICE
            </a>
            <a href="/" className="block text-2xl">
              PAGES
            </a>
            <a href="/" className="block text-2xl">
              BLOG
            </a>
            <a href="/" className="block text-2xl">
              CONTACT
            </a>
          </nav>

          <div className="mt-8">
            <h3 className="text-lg text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-white">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="mt-8 text-white">
            <h3 className="text-lg mb-4">Get in touch</h3>
            <p>+02 - 094 980 547</p>
            <p>info@extradesign.com</p>
            <p>230 Norman Street New York, QC (USA) H8R 1A1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
