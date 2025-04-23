import {
  FaBoxOpen,
  FaChartBar,
  FaRegBookmark,
  FaClipboardList,
  FaUser,
  FaThLarge,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router";

// 🧩 Halkan waa component-ka item-ka navigation-ka
const DashboardNavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ${
        isActive
          ? "bg-indigo-100 text-indigo-600"
          : "text-gray-700 hover:bg-gray-100"
      }`
    }
  >
    <Icon className="text-base" />
    <span>{label}</span>
  </NavLink>
);

// 🧱 Halkan waa Sidebar-ka laftiisa, magaciisana waa DashboardNav
const DashboardNav = () => {
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white shadow-md">
      <div className="space-y-2">
        <h2 className="text-xs uppercase font-semibold text-gray-400 px-2">
          Inventory
        </h2>
        <DashboardNavItem to="Suppliers" icon={FaBoxOpen} label="Suppliers" />
        <DashboardNavItem to="Reports" icon={FaChartBar} label="Reports" />
        <DashboardNavItem
          to="Stationary"
          icon={FaRegBookmark}
          label="Stationary"
        />
        <DashboardNavItem
          to="StockManagement"
          icon={FaClipboardList}
          label="Stock Management"
        />

        <h2 className="text-xs uppercase font-semibold text-gray-400 mt-4 px-2">
          Users
        </h2>
        <DashboardNavItem to="Users" icon={FaUser} label="Users" />
        <DashboardNavItem to="Categories" icon={FaThLarge} label="Categories" />
      </div>

      {/* Footer actions */}
      <div className="space-y-2 pt-4 border-t border-gray-200 mt-6">
        <DashboardNavItem to="/settings" icon={FaCog} label="Settings" />
        <DashboardNavItem to="/logout" icon={FaSignOutAlt} label="Logout" />
      </div>
    </div>
  );
};

export default DashboardNav;
