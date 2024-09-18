"use client"; // This directive makes the component a Client Component

import { useState } from "react";
import { Transition } from "@headlessui/react"; // Optional for smooth transitions

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-300">
                SYNOPSE
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:space-x-8 md:ml-10 items-center">
              <a href="/" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
                Candidate Competitor
              </a>
              <a href="/win_predictor"
                className="text-gray-600 cursor-not-allowed opacity-50 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
                >
                  Win Predictor
              </a>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition-colors duration-200"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 transform scale-95"
        enterTo="opacity-100 transform scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 transform scale-100"
        leaveTo="opacity-0 transform scale-95"
      >
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <a
              href="/"
              className="block px-4 py-4 text-lg text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
            >
              Candidate Competitor
            </a>
            <a
              href="/about"
              className="block px-4 py-4 text-lg text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
            >
              Win Predictor
            </a>
          </div>
        )}
      </Transition>
    </nav>
  );
}
