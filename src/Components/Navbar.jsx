import React from "react";
import Container from "../Layout/Container";
import { IoSearch } from "react-icons/io5";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-primary  z-50 fixed top-0 left-0 right-0">
      <Container>
        <div className=" text-white">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-2 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>YOUR COUNTRY, YOUR CITY, 12345</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>11:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Navigation bar */}
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-green-500">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-wrap justify-center md:flex-nowrap gap-6 uppercase text-sm font-semibold">
              <a href="#" className="text-orange-400">
                Home
              </a>
              <a href="#">About</a>
              <a href="#">Chef</a>
              <a href="#">Menus</a>
              <a href="#">Gallery</a>
              <a href="#">Reservation</a>
              <a href="#">Contact</a>
            </div>
            <div className="mt-2 md:mt-0">
              <IoSearch size={20} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
