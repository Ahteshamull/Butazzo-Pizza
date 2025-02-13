import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Banner from "./../Components/Banner";
import About from "./../Components/About";
import Menu from "../Components/Menu";
import Chef from "../Components/Chiff";
import Reservation from "../Components/Reservation";
import Gallery from "../Components/Gallery";
import Map from "../Components/Map";
import Contact from "./../Components/Contact";
import Footer from "./../Components/Footer";

export const Home = () => {
  return (
    <>
      {" "}
      <div id="#">
        <Navbar />
        <Banner />
        <About />
        <Menu />
        <Chef />
        <Reservation />
        <Gallery />
        <Map />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
