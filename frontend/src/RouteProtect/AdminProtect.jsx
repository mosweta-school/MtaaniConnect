import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const AdminOnlyRoute = ({ children }) => {
  const { user } = useContext(AuthContext);



  useEffect(() => {
    if (user && user.role !== "admin") {
      toast.error("Admins only allowed");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminOnlyRoute;

