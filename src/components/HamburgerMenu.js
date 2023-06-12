import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative  z-30">
      <button
        ref={buttonRef}
        className="md:flex gap-x-2 text-gray-300 fa-6x hover:text-white transition-colors  duration-300"
        onClick={toggleMenu}
      >
        <FaHamburger size={30} />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute bg-gray-200 right-0 mt-4 py-2 w-48 text-align-center bg-white rounded shadow-lg"
        >
          <Link
            to="/"
            className="block px-4 py-2 flex content-center mx-auto text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
