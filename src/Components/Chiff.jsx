import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const chefs = [
  {
    name: "Chef Anna",
    img: "/public/assets/chef_1.jpg",
  },
  {
    name: "Chef Anna",
    img: "/public/assets/chef_1.jpg",
  },
  {
    name: "Chef Anna",
    img: "/public/assets/chef_1.jpg",
  },
  {
    name: "Chef Anna",
    img: "/public/assets/chef_1.jpg",
  },
  {
    name: "Chef Anna",
    img: "/public/assets/chef_1.jpg",
  },
  {
    name: "Chef Anna",
    img: "/public/assets/chef_1.jpg",
  },
 
];

const Chef = () => {
  return (
    <div className="max-w-4xl mx-auto text-center p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-4">OUR CHEF</h2>
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
          <SwiperSlide key={index} className="flex justify-center">
            <div className="shadow-lg rounded-lg overflow-hidden w-64">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-80 object-cover"
              />
              <h3 className="text-lg font-bold text-green-700 py-2">
                {chef.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Chef;
