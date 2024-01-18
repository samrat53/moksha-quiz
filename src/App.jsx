import "./App.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const images = [
  "../public/images/img1.jpeg",
  "../public/images/img2.jpeg", 
  "../public/images/img3.jpeg", 
  "../public/images/img4.jpeg", 
  "../public/images/img5.jpeg", 
  "../public/images/img6.jpeg", 
];


function App() {
  return (
    <>
      <div className="custom-bg-color" data-theme="forest">
        <Layout>

        <div className="carousel-box m-9 " >
          <Carousel images={images} />
        </div>
        <div className="about-section">
          <About />
        </div>
        <div className="faq-section">
          <Faq />
        </div>

        </Layout>
        </div>
    </>
  );
}

export default App;
