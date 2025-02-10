import { useState } from "react";

const initialImages = [
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  
];

const moreImages = [
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
  "/public/assets/wings-xs.jpg",
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setImages([...initialImages, ...moreImages]);
  };

  return (
    <div className="max-w-6xl mx-auto text-center p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      {!showMore && (
        <button
          onClick={handleShowMore}
          className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600"
        >
          MORE IMAGES
        </button>
      )}
    </div>
  );
};

export default Gallery;
