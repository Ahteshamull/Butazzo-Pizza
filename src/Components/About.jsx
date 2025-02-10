import React from "react";
import Container from "../Layout/Container";

const AboutUs = () => {
  return (
    <Container>

    <div className="relative bg-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center">
      {/* Left Section - Text */}
      <div className="bg-orange-500 text-white p-8 md:p-12 max-w-lg md:max-w-xl lg:max-w-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT US</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:ml-6 mt-6 md:mt-0">
        <div className="relative">
          <img
            src="/public/assets/about-us.jpg"
            alt="Chef preparing food"
            className="w-full h-auto object-cover shadow-lg"
          />
          <div className="absolute inset-2 border-2 border-orange-500"></div>
        </div>
      </div>
    </div>

    </Container>
  );
};

export default AboutUs;
