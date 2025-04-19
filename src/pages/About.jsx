import React from "react";
import { FaBullseye, FaEye, FaHeart, FaCheckCircle, FaUsers, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About StationaryMS</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Simplifying your stationery management with smart tools, transparency, and a touch of innovation.
        </p>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <FaBullseye className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">To streamline how organizations track, manage, and distribute stationery items.</p>
          </div>
          <div>
            <FaEye className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">A paperless and fully organized supply system for every institution.</p>
          </div>
          <div>
            <FaHeart className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">Integrity, Efficiency, User-focus, and Growth.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Why Choose StationaryMS?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <FaCheckCircle className="text-blue-600 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Easy to Use</h4>
            <p className="text-gray-600">Simple interface with powerful functionality for all user levels.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaUsers className="text-blue-600 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Multi-User Support</h4>
            <p className="text-gray-600">Allow staff and suppliers to interact with clarity and control.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaClock className="text-blue-600 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Real-Time Tracking</h4>
            <p className="text-gray-600">Instant updates on stock levels and requests.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Mohamed Abdirahman", title: "Lead Developer" },
            { name: "Ayaan Ali", title: "UI/UX Designer" },
            { name: "Ahmed Mahad", title: "Project Manager" },
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Join institutions that are transforming how they manage their supplies.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <p className="mb-4 md:mb-0">© 2025 StationaryMS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
