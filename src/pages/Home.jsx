import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import AboutUs from "../Components/About";
import Menu from "../Components/Menu";
import Chef from "../Components/Chiff";
import Gallery from "../Components/Gallery";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Map from "../Components/Map";
import Reservation from "../Components/Reservation";

export const Home = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Banner />
      <AboutUs />
      <Menu />
      <Chef />
      <Gallery />
      <Reservation />
      <Map />
      <Contact />
      <Footer />
    </>
  );
};
