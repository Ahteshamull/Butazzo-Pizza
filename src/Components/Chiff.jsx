import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// Importing social media icons from react-icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Example chefs data (replace image paths and social media links as needed)
const chefs = [
  {
    name: "Chef Anna",
    img: "assets/chef_1.jpg",
    socialLinks: {
      instagram: "https://instagram.com/chef_anna",
      twitter: "https://twitter.com/chef_anna",
      facebook: "https://facebook.com/chef_anna",
    },
  },
  {
    name: "Chef John",
    img: "assets/chef_2.jpg",
    socialLinks: {
      instagram: "https://instagram.com/chef_john",
      twitter: "https://twitter.com/chef_john",
      facebook: "https://facebook.com/chef_john",
    },
  },
  {
    name: "Chef Anna",
    img: "assets/chef_1.jpg",
    socialLinks: {
      instagram: "https://instagram.com/chef_anna",
      twitter: "https://twitter.com/chef_anna",
      facebook: "https://facebook.com/chef_anna",
    },
  },
  {
    name: "Chef John",
    img: "assets/chef_2.jpg",
    socialLinks: {
      instagram: "https://instagram.com/chef_john",
      twitter: "https://twitter.com/chef_john",
      facebook: "https://facebook.com/chef_john",
    },
  },
  // Add more chefs as needed
];

const Chef = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out-back", // Easing for animation
      once: true, // Animations trigger once when the element is in view
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto text-center p-4">
      <h2
        className="text-2xl font-bold text-green-700 mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        OUR CHEFS
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-10"
      >
        {chefs.map((chef, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay={`${index * 150}`} // Add staggered effect
          >
            <div className="relative shadow-lg rounded-lg overflow-hidden w-64 group">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-80 object-cover"
                data-aos="fade-in"
                data-aos-delay={`${index * 200}`} // Add different delay for the image
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-lg font-bold">{chef.name}</h3>
                <div className="flex justify-center space-x-4 mt-2">
                  <a
                    href={chef.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-2xl hover:text-blue-600 transition duration-300" />
                  </a>
                  <a
                    href={chef.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl hover:text-pink-600 transition duration-300" />
                  </a>
                  <a
                    href={chef.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Chef;
