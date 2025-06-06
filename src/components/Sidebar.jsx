import React from 'react';
import { FaTachometerAlt, FaChartLine, FaShoppingCart, FaBox, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import DashboardNav from './DashboardNav';



const Sidebar = () => {
  return (
    <aside className="w-64 h-screen flex flex-col bg-white shadow">
      <div className="px-6 py-6 text-2xl font-bold text-indigo-700">StationaryMS 📘</div>
      <nav className="flex-1 px-4 space-y-1">
        <DashboardNav/>
        
        {/* <Outlet/> */}
      </nav>
    </aside>
  );
};

export default Sidebar;
