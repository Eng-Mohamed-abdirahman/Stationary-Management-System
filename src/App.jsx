import {  Outlet, useLocation } from "react-router"
import Header from "./components/Header"

function App() {

  const location  = useLocation()
 
  const hideDashboard = location.pathname === '/Dashboard'

  return (
    <div>
      {!hideDashboard && <Header/>}
      
      <Outlet />
    </div>
  
  )
}

export default App
