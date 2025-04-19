import React from "react";
import { FaBoxOpen, FaChartLine, FaUsers, FaQuoteLeft,FaSchool,FaIndustry,FaUniversity } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {

  const images = [
    {id:1, img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawvW0BEOkSKIMWDujMcWj2ACf8q2oVwMFOvByzq9bJxv3JMwyzJdpkVrvrks17vnWWe4&usqp=CAU'},
    {id:2, img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3P7tlyMAAZk2iF7pGK6pXKgCu6tyEdX8A-U1LfNCMDduvrQWC0D7ZSWSvKjT3I7w6rk&usqp=CAU'},
    {id:3, img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWo2saHi-W8QM2hFa5bEQKRxMqjNtFngMouCLwIdc8cna1oamdWzaB5pZe4dee2N7wtPc&usqp=CAU'}
  ]
  
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-stretch justify-between max-w-7xl mx-auto px-4 py-16 gap-8">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Manage all your stationery <span className="text-blue-600">with ease</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Organize, track, and restock office or school supplies efficiently using our all-in-one system.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-fit">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRRZS-hxF1XFTy0VzxZFdfuVwx4fMQyhVSuXd_1jKGwMffigapS"
            alt="Illustration"
            className="rounded-lg shadow-lg max-h-[400px] w-full object-cover"
          />
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-10">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">Trusted by institutions and businesses</h2>
        </div>
        <div className="flex justify-center space-x-26 flex-wrap max-w-4xl mx-auto">
        <FaSchool className="text-4xl text-blue-600" />
          <FaIndustry className="text-4xl text-blue-600"/>
          <FaUniversity className="text-4xl text-blue-600"/>
          <FaSchool className="text-4xl text-blue-600"/>
          <FaIndustry className="text-4xl text-blue-600"/>
          <FaUniversity className="text-4xl text-blue-600"/>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need in one platform</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow text-center">
            <FaBoxOpen className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Inventory Tracking</h3>
            <p className="text-gray-600">Easily track your stock levels and product movements.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow text-center">
            <FaChartLine className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Order Requests</h3>
            <p className="text-gray-600">Manage stationery requests from departments or individuals.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow text-center">
            <FaUsers className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Supplier Management</h3>
            <p className="text-gray-600">Keep track of suppliers and their delivery performance.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
            <p className="text-gray-600">Products Tracked</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">1,200+</h3>
            <p className="text-gray-600">Orders Processed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">300+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
            <p className="text-gray-600">Suppliers</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <FaQuoteLeft className="text-blue-600 text-2xl mx-auto mb-4" />
          <p className="text-gray-600 italic mb-4">
            "This system made it super easy to manage all our office stationery. The tracking and request features are perfect!"
          </p>
          <h4 className="font-semibold">Amina Yusuf</h4>
          <span className="text-sm text-gray-500">Office Admin, DarulXikma School</span>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((n) => (
              <div key={n} className="bg-white p-4 rounded-lg shadow">
                <img src={n.img} alt="" className="w-full" />
                <h3 className="font-semibold mb-2">Tips to reduce stationery waste</h3>
                <p className="text-gray-600 text-sm">
                  Discover simple ways to reduce unnecessary stationery usage in your organization.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <p className="mb-4 md:mb-0">© 2025 StationaryMS. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link  className="hover:underline">About</Link>
            <Link  className="hover:underline">Contact</Link>
            <Link  className="hover:underline">Privacy Policy</Link>
            <Link  className="hover:underline">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
