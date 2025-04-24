import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router'
import { router } from '../Routes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { StationaryProvider } from './context/StationaryContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <StationaryProvider>
<UserProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </UserProvider>
    </StationaryProvider>
  </StrictMode>
  
  ,
)
