import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Layout/Container";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out-back", // Easing for animation
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div id="contact" className="bg-yellow">
      <Container>
        <footer className="text-white py-10 px-5 md:px-20">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            {/* About Us */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg mb-2">ABOUT US</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries but also the
                leap into electronic typesetting.
              </p>
            </div>

            {/* Working Hours */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="font-bold text-lg mb-2">WORKING HOURS</h2>
              <ul className="space-y-1">
                <li>
                  Monday <span className="float-right">Closed</span>
                </li>
                <li>
                  Tuesday <span className="float-right">10 am - 12 am</span>
                </li>
                <li>
                  Wednesday <span className="float-right">10 am - 12 am</span>
                </li>
                <li>
                  Thursday <span className="float-right">10 am - 12 am</span>
                </li>
                <li>
                  Friday <span className="float-right">10 am - 12 am</span>
                </li>
                <li>
                  Saturday <span className="float-right">7 am - 1 am</span>
                </li>
                <li>
                  Sunday <span className="float-right">7 am - 1 am</span>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h2 className="font-bold text-lg mb-2">CONTACT US</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>&#x1F4CD;</span>
                  <p>
                    Your City, Your Street, 18765, 100 Tenth Avenue, New York
                    City, NY 1001
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <span>&#x260E;</span>
                  <p>(457) 570 5682; (335) 620 756</p>
                </li>
                <li className="flex items-center gap-2">
                  <span>&#x2709;</span>
                  <p>info@tutazopizza.net</p>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Contact;
