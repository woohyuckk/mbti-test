import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../authStore";

const ProtectedRoute = () => {
  const { token: isLogin } = useAuthStore((state) => state.user);
  const { pathname } = useLocation();
 
  
  if (isLogin) {
    return <Outlet />;
  }

  if (!isLogin) {
    return (
      <Navigate to="/login" replace state={{ redirectedFrom: pathname }} />
    );
  }
};

export default ProtectedRoute;
