import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-36 pb-12 px-6 lg:px-20 bg-green-50 min-h-screen text-[#1F4B2C]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2B7810]">Get in Touch</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Whether you are a farmer, customer, or enthusiast, we’d love to hear
          from you. Reach out for inquiries, support, or to learn more about
          sustainable farming.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              className="bg-[#2B7810] text-white px-6 py-3 rounded-md hover:bg-[#256d0d] transition"
            >
              <a href="https://wa.me/2348100589346" target="_blank">
                Send Message
              </a>
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-[#2B7810] text-white p-8 rounded-xl shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6 text-base">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-xl mr-4 mt-1" />
              <p>
                Palladium Farm
                <br />
                Nigeria
              </p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-xl mr-4" />
              <p>0810 058 9346</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-4" />
              <p>hello@palladiumfarm.ng</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-green-100">
            We are available Monday to Saturday from 9:00am to 6:00pm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
