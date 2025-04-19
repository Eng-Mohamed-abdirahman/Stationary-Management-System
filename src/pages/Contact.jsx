import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Header */}
      <div className="bg-blue-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-lg">We’d love to hear from you. Drop us a message below.</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow">
            <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">+252 61 234 5678</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow">
            <FaEnvelope className="text-blue-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">support@stationaryms.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow">
            <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">Location</h3>
              <p className="text-gray-600">Borama, Awdal – Somalia</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Mohamed Abdirahman"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Message subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 StationaryMS. All rights reserved.</p>
          <div className="flex space-x-6 mt-5 md:mt-0">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
