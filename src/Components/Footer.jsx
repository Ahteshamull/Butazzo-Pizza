import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import Container from "./../Layout/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      easing: "ease-out-back", // Easing function for the animation
      once: true, // Ensures that the animations occur only once when scrolled into view
    });
  }, []);

  return (
    <div className="bg-primary">
      <Container>
        <footer className="text-white py-3 px-5 md:px-20 flex justify-between items-center text-sm">
          {/* Copyright Text with AOS Animation */}
          <div data-aos="fade-up">
            <p>COPYRIGHT © 2018 AGENCY | ALL RIGHTS RESERVED</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white text-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-white text-lg"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white text-lg"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <FaPinterest />
            </a>
            <a
              href="#"
              className="text-white text-lg"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <FaLinkedin />
            </a>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
