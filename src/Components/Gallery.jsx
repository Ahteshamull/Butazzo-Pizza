import { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";// Icons for the plus and close buttons
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
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set the duration of animations
      easing: "ease-in-out", // Optional: Set easing for the animations
      once: true, // Optional: Only animate once
    });
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
    <div id="gallery" className="max-w-6xl mx-auto text-center p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">GALLERY</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={img.delay}
            key={index}
            className="relative group"
          >
            {/* Image with hover zoom effect */}
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover group-hover:w-[400px] group-hover:h-[300px] rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              data-aos="fade-up"
              // Click to open modal
            />
            {/* Plus icon that appears on hover */}
            <div
              onClick={() => openModal(img)}
              className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 bg-black bg-opacity-50"
            >
              <MdOutlineZoomOutMap
                className="text-white text-3xl "
                data-aos="fade-up"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for the image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 "
          data-aos="fade-up"
        >
          <div className="relative max-w-[600px] max-h-[600px]">
            <img
              src={currentImage}
              alt="Selected Image"
              className="max-w-full max-h-full  object-contain"
              data-aos="fade-up"
            />
            {/* Close button for the modal */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              data-aos="fade-up"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Show More Button */}
      <div className="mt-6" data-aos="fade-up">
        <button
          onClick={handleShowMore}
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600"
          data-aos="fade-up"
        >
          SHOW MORE IMAGES
        </button>
      </div>
    </div>
  );
};

export default Gallery;
