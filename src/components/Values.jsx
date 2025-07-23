import React from "react";
import img from "../assets/value.jpg";

const values = [
  {
    number: "01",
    title: "Sustainability",
    desc: "We are committed to environmentally responsible farming that conserves natural resources and ensures long-term food security.",
  },
  {
    number: "02",
    title: "Accountability",
    desc: "We take full responsibility for our actions, maintaining strong relationships with farmers, partners, and consumers through trust and transparency.",
  },
  {
    number: "03",
    title: "Teamwork",
    desc: "We believe in the power of collaboration — working closely with local communities, staff, and partners to achieve shared goals.",
  },
  {
    number: "04",
    title: "Transparency",
    desc: "We provide clear, open communication from farm practices to product delivery, so our customers know exactly where their food comes from.",
  },
  {
    number: "05",
    title: "Integrity",
    desc: "We operate with honesty and strong moral principles, ensuring every decision we make aligns with our values and commitment to quality.",
  },
  {
    number: "06",
    title: "Excellence",
    desc: "We strive for the highest standards in agricultural practices, product quality, and customer satisfaction across every part of our business.",
  },
  {
    number: "07",
    title: "Innovation",
    desc: "We embrace modern technology and research-based methods to improve yield, efficiency, and sustainability in our farming operations.",
  },
  {
    number: "08",
    title: "Collaboration",
    desc: "We foster strong networks with farmers, experts, and organizations to co-create impactful agricultural solutions that benefit all.",
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
            className="w-full h-[80vh]  rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* content section  */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#2B7810] mb-8">Our Values</h2>
          {/* <p className="text-gray-600 mb-4">
            At Palladium, we have eight core values which the owners of the
            Company hold in common and high esteem and strive to imbibe into all
            employees of the company. These core values support the mission and
            vision of the Farm. They will ensure that all employees are aligned
            to the goals of the organization and know what is expected of them.
            We have no doubt that imbibing these values will drive employees to
            carry out their responsibilities excellently. Our core values are;
          </p> */}
          <div className="space-y-2">
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
