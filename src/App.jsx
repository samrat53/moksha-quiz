import "./App.css";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./pages/Rules";
import Registration from "./pages/Registration";

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
        <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Registration/>}/>
            <Route path="/home" element={<Landing/>}/>
            <Route path="/rules" element={<Rules/>}/>
          </Routes>
        </Layout>
        </Router>

        </div>
    </>
  );
}

export default App;
