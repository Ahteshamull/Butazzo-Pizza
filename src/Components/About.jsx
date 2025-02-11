import React from "react";
import Container from "../Layout/Container";


const About = () => {
  return (
    <Container>
      <div
        id="about"
        className="relative bg-yellow mt-10  py-12 px-6 md:px-12 flex flex-col gap-5 md:flex-row items-center justify-between"
      >
        {/* Left Section - Text */}
        <div className="  text-white p-8 md:p-12 max-w-lg md:max-w-xl  lg:max-w-2xl shadow-lg relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT US</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full md:w-1/2 mt-6 md:mt-0">
          <div className="w-full max-w-md mx-auto md:ml-6 relative">
            <img
              src="assets/about-us.jpg"
              alt="Chef preparing food"
              className="w-full h-auto object-cover shadow-lg rounded-md"
            />
            <div className="absolute inset-0 border-4 border-orange-500 rounded-md"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
