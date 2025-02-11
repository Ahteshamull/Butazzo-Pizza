import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // Icons for the plus and close buttons

const initialImages = [
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
];

const moreImages = [
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
  "assets/wings-xs.jpg",
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState(initialImages);

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
    <div className="max-w-6xl mx-auto text-center p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">GALLERY</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            {/* Image with hover zoom effect */}
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              // Click to open modal
            />
            {/* Plus icon that appears on hover */}
            <div
              onClick={() => openModal(img)}
              className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50"
            >
              <FaPlus className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for the image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={currentImage}
              alt="Selected Image"
              className="max-w-full max-h-full object-contain"
            />
            {/* Close button for the modal */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Show More Button */}
      <div className="mt-6">
        <button
          onClick={handleShowMore}
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600"
        >
          SHOW MORE IMAGES
        </button>
      </div>
    </div>
  );
};

export default Gallery;
