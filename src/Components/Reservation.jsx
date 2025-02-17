import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from './../Layout/Container';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., API call or form validation)
    console.log(formData);
  };

 

  return (
    <div
      id="reservation"
      style={{
        backgroundImage: `url('assets/reservation.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <div className="flex justify-end items-center py-10 px-5 ">
          <div
            className="w-full  max-w-lg bg-yellow p-8 rounded-lg shadow-md"
            data-aos="fade-up" // Applying fade-up animation to the form container
          >
            <h2
              className="text-3xl font-bold text-center text-white mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Online Reservation
            </h2>
            <p
              className="text-center text-white mb-6"
              data-aos="fade-up-right"
              data-aos-delay="200"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="lg:flex sm:inline-block gap-4">
                <div
                  className="flex-1"
                  data-aos="fade-up-left"
                  data-aos-delay="300"
                >
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-white rounded-lg"
                    required
                  />
                </div>
                <div
                  className="flex-1"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-white rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className=" lg:flex gap-4">
                <div className="flex-1" data-aos="fade-up" data-aos-delay="500">
                  <label
                    htmlFor="phone"
                    className="block text-white font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="flex-1" data-aos="fade-up" data-aos-delay="600">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="flex-1"
                  data-aos="fade-right"
                  data-aos-delay="700"
                >
                  <label
                    htmlFor="time"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="800">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 transition duration-300"
                data-aos="fade-down-right"
                data-aos-delay="900"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reservation;
