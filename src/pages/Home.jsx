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
import AOS from "aos";
import "aos/dist/aos.css";
export const Home = () => {
   useEffect(() => {
     // Initialize AOS after component mounts
     AOS.init({
       duration: 1000, // Animation duration
       easing: "ease-in-out", // Animation easing
       once: true, // Animation occurs only once
     });

     // Ensure AOS is refreshed when the content updates
     AOS.refresh();

     // Optional: Refresh AOS on window resize to fix any positioning issues
     window.addEventListener("resize", AOS.refresh);

     return () => {
       // Clean up event listener on component unmount
       window.removeEventListener("resize", AOS.refresh);
     };
   }, []);
  return (
    <>
      {" "}
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
    </>
  );
};
