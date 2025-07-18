import React from "react";
import img from "../assets/value.jpg";

const values = [
  {
    number: "01",
    title: "Sustainable Farming",
    desc: "We promote eco-friendly practices that preserve soil health and biodiversity.",
  },
  {
    number: "02",
    title: "Empowering Farmers",
    desc: "Palladium partners with local farmers, providing tools, training, and support to improve livelihoods.",
  },
  {
    number: "03",
    title: "Innovative Agriculture",
    desc: "We adopt modern techniques and data-driven methods to ensure quality and productivity.",
  },
  {
    number: "04",
    title: "Healthy Food, Happy Homes",
    desc: "From our farms to your table, we deliver nutritious, safe, and fresh produce you can trust.",
  },
];

const Values = () => {
  return (
    <section className="bg-green-50 py-16 lg:px-12 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* img section  */}
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="our value"
            className="w-full h-[50vh]  rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* content section  */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#2B7810] mb-8">Our Values</h2>
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="text-[#2B7810]  text-3xl font-bold">
                  {value.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
