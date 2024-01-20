import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";

const images = [
  "./images/img1.jpeg",
  "./images/img2.jpeg",
  "./images/img3.jpeg",
  "./images/img4.jpeg",
  "./images/img5.jpeg",
  "./images/img6.jpeg",
];

const Landing = () => {
  return (
    <>
      <div className="carousel-box m-9 ">
        <Carousel images={images} />
      </div>
      <div className="about-section">
        <About />
      </div>
    </>
  );
};

export default Landing;
