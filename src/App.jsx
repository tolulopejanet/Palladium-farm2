import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Features from "./components/Feature";
import Stats from "./components/Stats";
import ProductGallery from "./components/ProductGallery";
import ProductCat from "./components/ProductCat";

function Home() {
  return (
    <>
      <Herosection />
      <Main />
      <Stats />
      <ProductCat />
      <ProductGallery />
      {/* <Features /> */}
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
