import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Stats from "./components/Stats";
import ProductGallery from "./components/ProductGallery";
import ProductCat from "./components/ProductCat";
import About from "./components/About";
import Order from "./components/Order";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Contact from "./components/Contact";
// import OrderSection from "./components/MainOrder";

function Home() {
  return (
    <>
      <Herosection />
      <Main />
      <Stats />
      <ProductCat />
      <ProductGallery />
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
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
