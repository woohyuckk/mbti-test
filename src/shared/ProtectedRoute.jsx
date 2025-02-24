import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ProtectedRoute = () => {
  const isAuth = useAuthStore().isValidToken();
  const { pathname } = useLocation();
  if (isAuth) {
    return <Outlet />;
  }
  if (!isAuth) {
    return (
      <Navigate to="/login" replace state={{ redirectedFrom: pathname }} />
    );
  }
}; 

export default ProtectedRoute;
