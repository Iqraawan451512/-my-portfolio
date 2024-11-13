"use client";

import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className="w-full">
      <div className="flex bg-[#023047] w-full h-16 items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <h1 className="logo font-serif text-[#adb5bd]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSkI_QAZH_h_Ur4dbhqJqeTn8BtndL8g4-my8_6_Jw6kKWn_fkHUewmxkPZxHY365llo&usqp=CAU"
            alt="Logo"
            className="w-[8rem] sm:w-[10rem] rounded-xl"
          />
        </h1>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#dee2ff] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden sm:flex gap-10 text-[#dee2ff] font-serif ml-auto">
          <Link href="/">
            <li className="hover:text-[#f4d35e] transition duration-300">Home</li>
          </Link>
          <Link href="./about">
            <li className="hover:text-[#f4d35e] transition duration-300">About</li>
          </Link>
          <Link href="./contact">
            <li className="hover:text-[#f4d35e] transition duration-300">Contact</li>
          </Link>
          <Link href="./project">
            <li className="hover:text-[#f4d35e] transition duration-300">Project</li>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu (Toggle when clicked) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#023047] w-full py-4">
          <ul className="flex flex-col items-center text-[#dee2ff] font-serif">
            <Link href="/">
              <li className="py-2 hover:text-[#f4d35e] transition duration-300">
                Home
              </li>
            </Link>
            <Link href="./about">
              <li className="py-2 hover:text-[#f4d35e] transition duration-300">
                About
              </li>
            </Link>
            <Link href="./contact">
              <li className="py-2 hover:text-[#f4d35e] transition duration-300">
                Contact
              </li>
            </Link>
            <Link href="./project">
              <li className="py-2 hover:text-[#f4d35e] transition duration-300">
                Project
              </li>
            </Link>
          </ul>
        </div>
      )}
    </main>
  );
}

export default Header;
