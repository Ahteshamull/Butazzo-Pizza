import { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md"; // Icons for the plus and close buttons
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const initialImages = [
  "assets/wings-xs.jpg",
  "assets/spare-ribs-xs.jpg",
  "assets/spaghetti-xs.jpg",
  "assets/salmon-xs.jpg",
  "assets/salad-xs.jpg",
  "assets/pizza-xs.jpg",
];

const moreImages = [
  "assets/wings-xs.jpg",
  "assets/spare-ribs-xs.jpg",
  "assets/spaghetti-xs.jpg",
  "assets/salmon-xs.jpg",
  "assets/salad-xs.jpg",
  "assets/pizza-xs.jpg",
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const openModal = (img) => {
    setCurrentImage(img);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentImage(null); // Reset the current image
  };

  const handleShowMore = () => {
    setImages([...images, ...moreImages]); // Add more images to the gallery
  };

  return (
    <div
      id="gallery"
      className="max-w-6xl mx-auto text-center p-6"
      data-aos="zoom-in"
    >
      <h2 className="text-2xl font-bold text-green-700 mb-4">GALLERY</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div data-aos="fade-up" key={index} className="relative group">
            {/* Image with hover zoom effect */}
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover transition-transform duration-700 rounded-lg shadow-md cursor-pointer"
              data-aos="flip-right"
              onClick={() => openModal(img)} // Open modal on image click
            />
            {/* Zoom Icon that appears on hover */}
            <div
              onClick={() => openModal(img)}
              className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 bg-black bg-opacity-50"
            >
              <MdOutlineZoomOutMap className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for the image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-4xl">
            <img
              src={currentImage}
              alt="Zoomed Image"
              className="w-full h-full object-contain"
              data-aos="zoom-out" // Zoom-in animation on modal image
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

      {/* Show More Button */}
      <div className="mt-6" data-aos="fade-up">
        <button
          onClick={handleShowMore}
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition"
          data-aos="fade-up"
        >
          SHOW MORE IMAGES
        </button>
      </div>
    </div>
  );
};

export default Gallery;
