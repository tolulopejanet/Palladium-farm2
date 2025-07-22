import React from "react";
import img from "../assets/peppe2.jpeg";
import Values from "./Values";

const About = () => {
  return (
    <section className="bg-white mt-36">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-20 pb-16 lg:px-12 px-6">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-[#2B7810]">About Us</h2>
          <p className="text-green-600 font-semibold mb-3">
            Fresh. Local. Nutritious.
          </p>
          <p className="text-gray-600 mb-4">
            At Palladium Farm, we believe agriculture is more than cultivation —
            it’s the foundation of life, community, and sustainability. Rooted
            in innovation and driven by impact, we are committed to providing
            high-quality, ethically sourced produce while empowering local
            farmers and preserving the environment.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to bridge the gap between traditional farming
            practices and modern agricultural technologies, creating a seamless
            farm-to-table experience for individuals and businesses alike. From
            fresh crops to sustainable practices, every step we take is toward a
            greener, healthier future.
          </p>
          <button className="bg-[#2B7810] text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img}
            alt="Our Farm"
            className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Values />
    </section>
  );
};

export default About;
