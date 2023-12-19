import React from "react";

const About = ({ text }) => {
  return (
    <>
      <div  className="flex flex-col items-center justify-center mt-[6rem]">
        <h1 className="topic-class underline mt-20 mb-5 text-white">About Us</h1>
        <p className="px-[10rem] py-20 about-text mb-20">{text}</p>
      </div>
    </>
  );
};

export default About;
