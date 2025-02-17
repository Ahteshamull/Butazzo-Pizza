import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Categories
const categories = ["Burger", "Pizza", "Salad", "Soup"];

// Menu items with a category field
const menuItems = [
  {
    name: "Beef Burger",
    description: "Stack your buns with cheese, bacon, lettuce and more.",
    price: "$12.95",
    img: "assets/beef-burger-xs.jpg",
    category: "Burger",
  },
  {
    name: "Beef Burger",
    description: "Stack your buns with cheese, bacon, lettuce and more.",
    price: "$12.95",
    img: "assets/beef-burger-xs.jpg",
    category: "Burger",
  },
  {
    name: "Beef Burger",
    description: "Stack your buns with cheese, bacon, lettuce and more.",
    price: "$12.95",
    img: "assets/beef-burger-xs.jpg",
    category: "Burger",
  },
  {
    name: "Bison Burger",
    description:
      "In a large bowl, combine bison, coriander, and ground mustard.",
    price: "$13.50",
    img: "assets/bison-burger-xs.jpg",
    category: "Burger",
  },
  {
    name: "Black Bean Burger",
    description: "Spiced up with chili sauce, cumin, garlic and chili powder.",
    price: "$9.27",
    img: "assets/black-bean-burger-xs.jpg",
    category: "Burger",
  },

  {
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and fresh basil.",
    price: "$15.00",
    img: "assets/pizza-kebab-lg.jpg",
    category: "Pizza",
  },
  {
    name: "Pepperoni Pizza",
    description: "Pepperoni, mozzarella cheese, and marinara sauce.",
    price: "$16.00",
    img: "assets/pizza-kebab-lg.jpg",
    category: "Pizza",
  },
  {
    name: "Veggie Pizza",
    description: "Loaded with bell peppers, olives, mushrooms, and onions.",
    price: "$14.50",
    img: "assets/pizza-kebab-lg.jpg",
    category: "Pizza",
  },
  {
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, Caesar dressing, croutons, and parmesan.",
    price: "$8.99",
    img: "assets/ambrosia-salad-lg.jpg",
    category: "Salad",
  },
  {
    name: "Tomato Soup",
    description: "A warm and comforting tomato soup with a creamy finish.",
    price: "$7.50",
    img: "assets/chicken-noodle-soup-xs.jpg",
    category: "Soup",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Burger");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Filter menu items based on the selected category
  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  // Open the modal with the clicked image
  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="menus" className="max-w-4xl mx-auto text-center p-4">
      <h2
        className="text-2xl font-bold text-green-700 mb-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        OUR MENUS
      </h2>

      {/* Category Buttons */}
      <div
        className="flex justify-center gap-3 mb-6"
        data-aos="fade-down-right"
        data-aos-delay="200"
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              activeCategory === category
                ? "bg-green-600 text-white"
                : "border-orange-400 text-orange-500"
            }`}
            onClick={() => setActiveCategory(category)} // Set active category
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid Layout */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 mt-20 lg:grid-cols-3 gap-[80px] p-6 bg-gray-100 ">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className=" bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:bg-yellow hover:text-gray-100 cursor-pointer"
            data-aos="zoom-in-up" // Unique animation for menu item
            data-aos-delay={`${index * 100}`} // Stagger animation delays
          >
            <div className="relative  ">
              <img
                src={item.img}
                alt={item.name}
                className="w-32 mx-auto absolute top-[-90px] lg:right-[20px] sm:right-[45px] h-32 rounded-full object-cover  mb-[300px] cursor-pointer transition-transform  ease-in-out transform hover:scale-110"
                data-aos="ease-in-quart"
                onClick={() => openModal(item.img)} // Open modal on image click
              />
            </div>
            <div className="mt-[100px] ">
              <h3 className="text-lg font-bold text-orange-600">{item.name}</h3>
              <p className="text-gray-600 text-sm my-2">{item.description}</p>
              <p className="text-green-600 font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-4xl">
            <img
              src={selectedImage}
              alt="Zoomed Image"
              className="w-full h-full object-contain "
              data-aos="zoom-in" // Zoom-in animation on modal image
              data-aos-duration="600"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
