import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import { useNavigate } from "react-router-dom";

const images = [
  "../public/images/img1.jpeg",
  "../public/images/img2.jpeg",
  "../public/images/img3.jpeg",
  "../public/images/img4.jpeg",
  "../public/images/img5.jpeg",
  "../public/images/img6.jpeg",
];

const Landing = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="carousel-box m-9 ">
        <Carousel images={images} />
        {/* <button className="btn" onClick={()=>{
          navigate('/')
        }}>Button</button> */}
      </div>
      <div className="about-section">
        <About />
      </div>
      {/* <div className="faq-section">
        <Faq />
      </div> */}
    </>
  );
};

export default Landing;
