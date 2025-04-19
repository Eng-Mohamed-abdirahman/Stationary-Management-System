// components/PublicRoute.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import  supabase  from "../lib/supabase";

const PublicRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (session) {
        navigate("/dashboard"); // or any other page
      } else {
        setChecking(false);
      }
    };

    checkSession();
  }, [navigate]);

  if (checking) return <div className="text-center mt-10">Loading...</div>;

  return children;
};

export default PublicRoute;
