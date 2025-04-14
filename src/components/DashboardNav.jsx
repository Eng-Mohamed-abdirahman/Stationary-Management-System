
import { NavLink } from "react-router";
import { FaRegBookmark, FaTableCells, FaBoxOpen, FaClipboardList, FaUser, FaChartBar } from "react-icons/fa6";

const DashboardNav = () => {
    return (
        <div className="flex flex-col space-y-7 bg">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm ${
                isActive
                  ? "border-l-4 border-indigo-600 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to="Suppliers"
          >
            <FaBoxOpen className="text-base" />
            <span>Suppliers</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm ${
                isActive
                  ? "border-l-4 border-indigo-600 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to="Reports"
          >
            <FaChartBar className="text-base" />
            <span>Reports</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm ${
                isActive
                  ? "border-l-4 border-indigo-600 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to="Stationary"
          >
            <FaRegBookmark className="text-base" />
            <span>Stationary</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm ${
                isActive
                  ? "border-l-4 border-indigo-600 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to="StockManagement"
          >
            <FaClipboardList className="text-base" />
            <span>Stock Management</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm ${
                isActive
                  ? "border-l-4 border-indigo-600 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to="Users"
          >
            <FaUser className="text-base" />
            <span>Users</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm ${
                isActive
                  ? "border-l-4 border-indigo-600 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to="Categories"
          >
            <FaTableCells className="text-base" />
            <span>Categories</span>
          </NavLink>
        </div>
      );
}

export default DashboardNav