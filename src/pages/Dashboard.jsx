import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Outlet, Route } from 'react-router';
import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
  return (
    
    <DashboardLayout>
      <div className="text-gray-400 text-center text-lg">
        {/* You can add your cards/charts here later */}
      
        <Outlet/>
      </div>
    </DashboardLayout>
    
  );
};

export default Dashboard;
