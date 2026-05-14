import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/"  />;
  }

  return children;
};

export default ProtectedRoute;