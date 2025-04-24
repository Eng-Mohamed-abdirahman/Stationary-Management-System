import { FaBoxOpen, FaRegBookmark, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";

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

const DashboardNav = () => {
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white shadow-md">
      <div className="space-y-2">
        <h2 className="text-xs uppercase font-semibold text-gray-400 px-2">
          Inventory
        </h2>
        <DashboardNavItem to="Suppliers" icon={FaBoxOpen} label="Suppliers" />

        <DashboardNavItem
          to="Stationary"
          icon={FaRegBookmark}
          label="Stationary"
        />

        <h2 className="text-xs uppercase font-semibold text-gray-400 mt-4 px-2">
          Users
        </h2>
        <DashboardNavItem to="Users" icon={FaUser} label="Users" />
      </div>
    </div>
  );
};

export default DashboardNav;
