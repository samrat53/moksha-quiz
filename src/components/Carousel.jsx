// // Carousel.js
// import React, { useState } from "react";
// import "./styleCarousel.css"; // Import the corresponding CSS file

// const Carousel = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [fadeOut, setFadeOut] = useState(false);

//   const nextSlide = () => {
//     setFadeOut(true);
//     setTimeout(() => {
//       setFadeOut(false);
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1000); // Adjust the duration to match the animation duration
//   };

//   const prevSlide = () => {
//     setFadeOut(true);
//     setTimeout(() => {
//       setFadeOut(false);
//       setActiveIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       );
//     }, 1000);
//   };

//   return (
//     <div data-theme="forest"
//       className="carousel-container flex flex-col items-center justify-center"
//       style={{ zIndex: 1 }}
//     >
//       <button className="arrow-button left-arrow" onClick={prevSlide}>
//         {"<"}
//       </button>
      // {images.map((img, index) => (
      //   <div
      //     key={index}
      //     className={`slide ${index === activeIndex ? "active" : ""} ${
      //       fadeOut ? "fade-out" : ""
      //     }`}
      //     style={{ transition: fadeOut ? "opacity 1s ease-in-out" : "none" }}
      //   >
      //     <img
      //       className="w-[100vw] z-[-10]"
      //       src={img}
      //       alt={`Slide ${index + 1}`}
      //     />
      //     <h2 className="flex flex-col items-center justify-center -mt-[12rem] text-white topic-class">
      //       Picture quotes
      //     </h2>
      //   </div>
      // ))}
//       <button className="arrow-button right-arrow" onClick={nextSlide}>
//         {">"}
//       </button>
//     </div>
//   );
// };

// export default Carousel;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Carousel = ({ images }) => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px"}}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return(
    <div>
        <Slider {...settings}>
        {images.map((img, index) => (
        <div key={index} >
          <img
            className="w-[100vw] h-[40vh]"
            src={img}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
        </Slider>
      </div>
  )
}
export default Carousel;