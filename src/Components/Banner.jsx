import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Container from "../Layout/Container";

const slides = [
  {
    id: 1,
    image: "/assets/pizza.png",
    discount: "20% OFF",
    title: "Delicious Burger",
    description:
      "Enjoy the best burger with fresh ingredients and amazing taste.",
  },
  {
    id: 2,
    image: "/assets/tortilla.png",
    discount: "15% OFF",
    title: "Tasty Pizza",
    description:
      "Crispy crust, melted cheese, and fresh toppings for a perfect slice.",
  },
  {
    id: 3,
    image: "/assets/burger.png",
    discount: "10% OFF",
    title: "Creamy Pasta",
    description:
      "Indulge in our rich and creamy pasta dishes, made to perfection.",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-primary w-full h-[100vh]">
      <Container>
        <div className="relative text-white py-12 flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 bg-white text-black p-2 rounded-full"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto text-center md:text-left">
            {/* Image Section */}
            <div className="relative">
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-64 h-64 object-contain"
              />
              <div className="absolute top-10 right-0 bg-orange-500 text-white p-4 rounded-full text-xl font-bold">
                {slides[current].discount}
              </div>
            </div>

            {/* Text Content */}
            <div className="md:ml-8">
              <h2 className="text-4xl font-bold">{slides[current].title}</h2>
              <p className="mt-4 text-lg">{slides[current].description}</p>
              <button className="mt-6 px-6 py-2 border border-orange-400 text-orange-400 rounded-full uppercase font-bold">
                Make Reservation
              </button>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 bg-white text-black p-2 rounded-full"
          >
            <FaArrowRight size={20} />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 flex gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
