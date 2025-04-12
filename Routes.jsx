
import { createBrowserRouter } from "react-router";
import App from "./src/App";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Home from "./src/pages/Home";
import Dashboard from "./src/pages/Dashboard";

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
                path:"Dashboard",
                element:<Dashboard/>
            }
        ]
    }
])