import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { TbSkateboard } from "react-icons/tb";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  return (
    <header className="bg-sky-900">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="text-white text-2xl font-bold flex items-center gap-x-4"
          >
            <TbSkateboard size={50} />
            Skaters
          </Link>
        </div>

        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <ul className="list-none flex space-x-4">
            <li>
              <Link
                to="/"
                className="md:flex gap-x-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <AiFillHome size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="register"
                className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-colors duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
