import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const location = useLocation();

  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p className="text-center mt-20">loading....</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivetRoutes;
