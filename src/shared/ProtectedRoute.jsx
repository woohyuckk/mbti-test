import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const ProtectedRoute = () => {
  const { isAuthnticated } = useAuthStore((state) => state);
  const { pathname } = useLocation();
 
  
  if (isAuthnticated) {
    return <Outlet />;
  }

  if (!isAuthnticated) {
    return (
      <Navigate to="/login" replace state={{ redirectedFrom: pathname }} />
    );
  }
};

export default ProtectedRoute;
