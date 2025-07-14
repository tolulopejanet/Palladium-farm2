import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Herosection />
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
