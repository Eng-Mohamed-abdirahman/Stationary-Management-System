
import { createBrowserRouter } from "react-router";
import App from "./src/App";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Home from "./src/pages/Home";
import Dashboard from "./src/pages/Dashboard";
import Categories from "./src/components/Categories";
import Reports from "./src/components/Reports";
import Stationaries from "./src/components/Stationaries";
import Suppliers from "./src/components/Suppliers";

import StockManagement from "./src/components/StockManagement";
import Users from "./src/components/Users";
import SignInPage from "./src/pages/signin";
import SignUpPage from "./src/pages/signup";
import ProtectedRoute from "./src/components/ProtectedRoute";
import PublicRoute from "./src/components/PublicRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'About',
                element:<About/>
            },
            {
                path:"Home",
                element:<Home/>
            
            },
            {
                path:"Contact",
                element:<Contact/>
            },
            {
                path:'signin',
                element:
                <PublicRoute>
                    <SignInPage/>
                </PublicRoute>
                
            },
            {
                path:'signup',
                element:<SignUpPage/>
            },
            {
                path:"Dashboard",
                element:
                <ProtectedRoute>
                    <Dashboard/>    
                </ProtectedRoute>,
                children:[
                    {
                        path:'Categories',
                        element: <Categories />
                    },
                    {
                        path:'Reports',
                        element:<Reports/>
                    },
                    {
                        path:'Stationary',
                        element:<Stationaries />
                    },
                    {
                        path:'Suppliers',
                        element:<Suppliers/>
                    },
                    {
                        path:'StockManagement',
                        element:<StockManagement />
                    },
                    {
                        path:'Users',
                        element:<Users/>
                    }
                ]
            }
        ]
    }
])