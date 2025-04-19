// components/ProtectedRoute.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import  supabase from "../lib/supabase";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session) {
        navigate("/signin"); // Redirect if not logged in
      } else {
        setLoading(false); // allow access
      }
    };

    checkSession();
  }, [navigate]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>; // Or a spinner
  }

  return children;
};

export default ProtectedRoute;
