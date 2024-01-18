import "./App.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const images = [
  "../public/images/img1.jpeg",
  "../public/images/img2.jpeg", 
  "../public/images/img3.jpeg", 
  "../public/images/img4.jpeg", 
  "../public/images/img5.jpeg", 
  "../public/images/img6.jpeg", 
];
const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Cursus metus aliquam eleifend mi in nulla. Risus sed vulputate odio ut enim blandit volutpat maecenas. Eget arcu dictum varius duis at consectetur lorem donec. Id consectetur purus ut faucibus pulvinar elementum integer. Congue quisque egestas diam in. Est lorem ipsum dolor sit amet consectetur adipiscing elit. A condimentum vitae sapien pellentesque. Bibendum at varius vel pharetra vel turpis. Arcu non sodales neque sodales. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Non enim praesent elementum facilisis leo vel Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ac felis donec et odio pellentesque. Tellus pellentesque eu tincidunt tortor. Sit amet purus gravida quis blandit turpis cursus in hac. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Id neque aliquam vestibulum morbi blandit cursus risus. Tincidunt lobortis feugiat vivamus at augue. Massa enim nec dui nunc. Consequat nisl vel pretium lectus quam id leo in vitae. Non consectetur a erat nam at lectus. Nibh tortor id aliquet lectus proin nibh. Orci phasellus egestas tellus rutrum tellus pellentesqueA diam sollicitudin tempor id eu nisl nunc. Nec nam aliquam sem et tortor consequat id. Non diam phasellus vestibulum lorem. Pretium vulputate sapien nec sagittis aliquam. Non tellus orci ac auctor augue mauris augue neque gravida. Dignissim suspendisse in est ante in nibh mauris. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Habitasse platea dictumst quisque sagittis purus. Eu lobortis elementum nibh tellus molestie nunc non blandit. Donec adipiscing tristique risus nec feugiat in fermentum",
];

function App() {
  return (
    <>
      <div className="custom-bg-color" data-theme="forest">
        <Navbar />
        <div className="carousel-box m-9 " >
          <Carousel images={images} />
        </div>
        <div className="about-section">
          <About text={text} />
        </div>
        <div className="faq-section">
          <Faq />
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
