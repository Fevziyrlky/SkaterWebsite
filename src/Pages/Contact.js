import React from "react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-gray-800 font-medium block mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              rows="5"
            ></textarea>
          </div>
          <div>
            <a class="button" href="mailto:noReply@skaters.nl">
              <button className="bg-blue-500 text-white rounded px-4 py-2 w-full hover:bg-blue-600">
                Send Message
              </button>
            </a>
          </div>
          <p className="text-red-500 text-sm mt-2"></p>
        </form>
      </div>
    </div>
  );
}
