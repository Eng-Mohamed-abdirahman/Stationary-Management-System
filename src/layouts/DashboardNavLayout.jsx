import { Outlet } from "react-router";
import DashboardNav from "../components/DashboardNav";


const DashboardNavLayout = () => {
    return (
        <div className="flex">
        
          <aside className="w-64 bg-gray-100 h-screen">
            <DashboardNav />
          </aside>
    
          
          <main className="flex-1 p-6 bg-white">
            <Outlet /> 
          </main>
        </div>
      );
};

export default DashboardNavLayout;


