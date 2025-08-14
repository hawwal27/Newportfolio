import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import Contacting from "../assets/contact.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-[70px] bg-white shadow-md flex items-center justify-between px-6 md:px-8 z-50 font-inter">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10 cursor-pointer" />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <Link
          className="cursor-pointer text-gray-700 relative hover:text-gray-900 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
          activeClass="text-gray-900"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer text-gray-700 relative hover:text-gray-900 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
        <Link
          className="cursor-pointer text-gray-700 relative hover:text-gray-900 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="cursor-pointer text-gray-700 relative hover:text-gray-900 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Clients
        </Link>
      </div>

      {/* Desktop Button */}
      <button
        className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-[0.95rem] hover:bg-gray-700 transition"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={Contacting} alt="" className="h-4" />
        Contact Me
      </button>

      {/* Mobile Menu Icon */}
      <img
        src={menu}
        alt="menu"
        className="block md:hidden h-6 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Mobile Dropdown */}
      {showMenu && (
        <div className="absolute top-[70px] right-5 bg-white flex flex-col items-start p-5 rounded-lg shadow-lg gap-4">
          <Link
            className="cursor-pointer text-gray-700 hover:text-black"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer text-gray-700 hover:text-black"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            className="cursor-pointer text-gray-700 hover:text-black"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            className="cursor-pointer text-gray-700 hover:text-black"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Clients
          </Link>
          <Link
            className="cursor-pointer text-gray-700 hover:text-black"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
