
import { createBrowserRouter } from "react-router";
import App from "./src/App";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Home from "./src/pages/Home";
import Dashboard from "./src/pages/Dashboard";
import Stationaries from "./src/components/Stationaries";
import Suppliers from "./src/components/Suppliers";

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
                        path:'Stationary',
                        element:<Stationaries />
                    },
                    {
                        path:'Suppliers',
                        element:<Suppliers/>
                    },
                    
                ]
            }
        ]
    }
])