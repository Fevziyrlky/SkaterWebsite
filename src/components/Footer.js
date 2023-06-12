import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-sky-900 py-2  bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2023 Skaters World. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="list-none inline-flex justify-center">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white px-3 py-2 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white px-3 py-2 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white px-3 py-2 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <ul className="list-none inline-flex justify-center md:justify-end">
              <li className="ml-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white px-3 py-2 transition-colors duration-300"
                >
                  <BsFacebook size={25} />
                </a>
              </li>
              <li className="ml-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white px-3 py-2 transition-colors duration-300"
                >
                  <FiTwitter size={25} />
                </a>
              </li>
              <li className="ml-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white px-3 py-2 transition-colors duration-300"
                >
                  <BsInstagram size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
