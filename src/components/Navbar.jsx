import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FiSearch, FiBell } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>

       

        <button className="relative bg-yellow-100 p-2 rounded-full text-yellow-600">
          <FiBell />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <FaUser className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center p-1'/>
          <div>
            <div className="text-sm font-semibold">Musfiq</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
