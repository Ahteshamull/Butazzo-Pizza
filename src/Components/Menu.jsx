import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const categories = ["Burger", "Pizza", "Salad", "Soup", "Drinks"];

const menuItems = [
  {
    name: "Beef Burger",
    description: "Stack your buns with cheese, bacon, lettuce and more.",
    price: "$12.95",
    img: "/public/assets/beef-burger-xs.jpg",
  },
  {
    name: "Bison Burger",
    description:
      "In a large bowl, combine bison, coriander, and ground mustard.",
    price: "$13.50",
    img: "/public/assets/beef-burger-xs.jpg",
  },
  {
    name: "Black Bean Burger",
    description: "Spiced up with chili sauce, cumin, garlic and chili powder.",
    price: "$9.27",
    img: "/public/assets/beef-burger-xs.jpg",
  },
  {
    name: "Elk Burger",
    description: "Ground elk meat, red onion, cayenne pepper, black pepper.",
    price: "$18.90",
    img: "/public/assets/beef-burger-xs.jpg",
  },
  {
    name: "Elk Burger",
    description: "Ground elk meat, red onion, cayenne pepper, black pepper.",
    price: "$18.90",
    img: "/public/assets/beef-burger-xs.jpg",
  },
  {
    name: "Elk Burger",
    description: "Ground elk meat, red onion, cayenne pepper, black pepper.",
    price: "$18.90",
    img: "/public/assets/beef-burger-xs.jpg",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Burger");

  return (
    <div className="max-w-4xl mx-auto text-center p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-4">OUR MENUS</h2>
      <div className="flex justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              activeCategory === category
                ? "bg-green-600 text-white"
                : "border-orange-400 text-orange-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

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
        {menuItems.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="border rounded-lg p-4 text-center shadow-md w-64">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-orange-600">{item.name}</h3>
              <p className="text-gray-600 text-sm my-2">{item.description}</p>
              <p className="text-green-600 font-semibold">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menu;
