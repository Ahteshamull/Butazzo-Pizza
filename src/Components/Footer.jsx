
import { FaFacebook } from "react-icons/fa";
import Container from './../Layout/Container';
const Footer = () => {
  return (
    <div className="bg-primary">
      <Container>
        <footer className=" text-white py-3 px-5 md:px-20 flex justify-between items-center text-sm">
          <div>
            <p>COPYRIGHT © 2018 AGENCY | ALL RIGHTS RESERVED</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-lg"></a>{" "}
            {/* Facebook Icon */}
            <a href="#" className="text-white text-lg">
              <FaFacebook />
            </a>{" "}
            {/* Instagram Icon */}
            <a href="#" className="text-white text-lg">
              <FaFacebook />
            </a>{" "}
            {/* Pinterest Icon */}
            <a href="#" className="text-white text-lg">
              <FaFacebook />
            </a>{" "}
            {/* LinkedIn Icon */}
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
