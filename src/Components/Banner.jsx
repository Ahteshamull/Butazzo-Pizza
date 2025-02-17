import React, { useEffect } from "react";
import Container from "../Layout/Container";
import Image1 from "../assets/burger.png";
import Image2 from "../assets/pizza.png";
import Image3 from "../assets/tortilla.png";
import Slider from "react-slick";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
const image = [
  {
    id: 1,
    image: Image1,
    discount: "20% Off",
    title: "Delicious Burger",
    description:
      "Enjoy the best burger with fresh ingredients and amazing taste.",
  },
  {
    id: 2,
    image: Image2,
    discount: "20% Off",
    title: "Tasty Pizza",
    description:
      "Crispy crust, melted cheese, and fresh toppings for a perfect slice.",
  },
  {
    id: 3,
    image: Image3,
    discount: "20% Off",
    title: "Mouthwatering Tortilla",
    description:
      "A classic favorite, served with your choice of cheese and sauce.",
  },
  // Add more images as needed.
];

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      id="banner"
      className="bg-primary min-h-screen flex items-center justify-between"
    >
      <Container>
        <Slider {...settings} >
          {image.map((item) => (
            <div className="flex flex-col md:flex-row sm:col-span-6 justify-between items-center px-4 md:px-8 lg:px-12">
              {/* Image Section */}
              <div className=" lg:flex gap-10 sm:flex-col-6 items-center">
                <div className="relative">
                  <img
                    src={item.image}
                    alt="Delicious Burger"
                    className="w-full  max-w-sm md:max-w-md lg:max-w-lg "
                    data-aos="fade-up"
                  />
                  <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-center rounded-full bg-yellow text-white"
                    data-aos="fade-right"
                  >
                    <span className="text-xl md:text-2xl font-bold">
                      {item.discount}
                    </span>
                  </div>
                </div>

                <div
                  className="text-center md:text-right mt-10 md:mt-0 md:ml-10 max-w-lg"
                  data-aos="slide-up"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-white">
                    {item.title}
                  </h2>
                  <hr className="hidden lg:block mt-3 mb-4 mr-1 mx-auto  h-1 bg-yellow w-20" />
                  <p className="text-base md:text-lg text-white">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <button className="bg-transparent text-white border border-yellow hover:bg-yellow hover:text-white rounded-full py-2 px-6 text-sm md:text-base">
                      Reservation Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Text Content */}
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Banner;
