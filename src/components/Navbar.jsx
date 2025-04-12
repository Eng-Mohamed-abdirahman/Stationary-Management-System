import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search..." className="px-3 py-1 border rounded" />
            <button className="relative">🔔<span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded-full">3</span></button>
            <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">MO</div>
          </div>
        </header>
      );
}

export default Navbar