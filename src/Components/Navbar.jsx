import React, { useState, useEffect } from "react";
import Container from "../Layout/Container";
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch, FaRegClock, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const menu = [
  { id: 1, name: "Home", link: "/#banner" },
  
  { id: 2, name: "About", link: "/#about" },

  { id: 3, name: "Chef", link: "/#chef" },

  { id: 4, name: "Menus", link: "/#menus" },

  { id: 5, name: "Gallery", link: "/#gallery" },

  { id: 6, name: "Reservation", link: "/#reservation" },

  { id: 7, name: "Contact", link: "/#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/");

  // Initialize AOS on component mount

  const toggleMenu = () => {
    setIsSearchOpen(false); 
  };

  const toggleSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(!isSearchOpen); 
  };

  const handleMenuClick = (link) => {
    setActiveMenu(link);
    setIsMenuOpen(false); 
  };

  return (
    <div className="bg-primary/90 fixed top-0 left-0 right-0 z-50">
      <Container>
        <div className="flex flex-wrap items-center justify-between py-3 px-4 md:px-0">
          {/* Logo on Desktop and Mobile */}
          <a className="lg:hidden md:block" href="/" data-aos="fade-down">
            <img src="/assets/logo.png" alt="Logo" className="h-10" />
          </a>

          {/* Desktop Info (Location, Phone, Hours) */}
          <div className="hidden md:flex items-center gap-6" data-aos="fade-up">
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-yellow text-xl" />
              <h1 className="text-white uppercase text-sm">Your City, 12345</h1>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-yellow text-xl" />
              <h1 className="text-white uppercase text-sm">123 456 789</h1>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-yellow text-xl" />
              <h1 className="text-white uppercase text-sm">11:00 - 21:00</h1>
            </div>
          </div>

          {/* Search Icon for Desktop */}
          <div className="relative" data-aos="fade-left">
            <div
              className="text-yellow cursor-pointer hidden md:block"
              onClick={toggleSearch}
            >
              <FaSearch className="text-xl" />
            </div>

            {/* Search Bar for Desktop */}
            {isSearchOpen && (
              <div className="absolute top-[-5px] right-0 flex items-center">
                <input
                  type="search"
                  placeholder="Search..."
                  className="text-lg w-[300px] bg-primary outline-none rounded-md focus:outline-none placeholder:text-white"
                />
                <button
                  className="text-2xl text-yellow bg-primary ml-3"
                  onClick={() => setIsSearchOpen(false)} // Close search when clicked
                >
                  <FaTimes />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMenu}
            data-aos="fade-right"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <hr className="hidden md:block" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center py-3 px-4 md:px-0">
          <div>
            <a href="/" data-aos="fade-down">
              <img src="/assets/logo.png" alt="Logo" className="h-10" />
            </a>
          </div>

          <ul className="hidden md:flex gap-8">
            {menu.map((item) => (
              <li key={item.id}>
                <HashLink
                  to={item.link} // Use HashLink instead of <a>
                  className={`text-white text-sm font-semibold uppercase hover:text-yellow transition ${
                    activeMenu === item.link
                      ? "underline decoration-yellow mt-[-2px]"
                      : ""
                  }`}
                  onClick={() => handleMenuClick(item.link)} // Set active menu when clicked
                  data-aos="fade-up"
                >
                  {/* Conditionally render the dot, exclude for "Home" */}
                  {item.link !== "/" && (
                    <span
                      className={`inline-block mr-2 ${
                        activeMenu === item.link ? "text-yellow" : ""
                      }`}
                    >
                      •
                    </span>
                  )}
                  {item.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
        )}

        {/* Mobile Menu (Slide-in from Right & Closes on Button Click) */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-primary text-white transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:hidden shadow-lg`}
        >
          <button
            className="absolute top-4 cursor-pointer right-4 text-2xl"
            onClick={() => setIsMenuOpen(false)} // Close the menu when clicking the close button
          >
            <FaTimes />
          </button>

          {/* Logo inside mobile menu */}
          <div className="flex justify-center mb-8 mt-16">
            <a href="/">
              <img src="/assets/logo.png" alt="Logo" className="h-10" />
            </a>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center mt-4 space-y-6">
            {menu.map((item) => (
              <li key={item.id}>
                <HashLink
                  to={item.link} // Use HashLink instead of <a>
                  className={`text-lg font-semibold uppercase hover:text-yellow transition ${
                    activeMenu === item.link
                      ? "underline decoration-yellow mt-[-2px]"
                      : ""
                  }`}
                  onClick={() => handleMenuClick(item.link)} // Set active menu when clicked
                  data-aos="fade-up"
                >
                  {/* Conditionally render the dot, exclude for "Home" */}
                  {item.link !== "/" && (
                    <span
                      className={`inline-block mr-2 ${
                        activeMenu === item.link ? "text-yellow" : ""
                      }`}
                    >
                      •
                    </span>
                  )}
                  {item.name}
                </HashLink>
              </li>
            ))}

            {/* Search Icon Inside Mobile Menu */}
            <div className="flex justify-center mt-6" data-aos="fade-left">
              <div
                className="text-yellow cursor-pointer"
                onClick={toggleSearch}
              >
                <FaSearch className="text-xl" />
              </div>
            </div>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
