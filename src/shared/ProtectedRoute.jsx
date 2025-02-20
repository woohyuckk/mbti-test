import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUsersStore from "../zustand/usersStore"




const ProtectedRoute = () => {
  

  const { token: isLogin } = useUsersStore((state) => state.users);
  const { pathname } = useLocation();
  console.log(!!isLogin)
  if (isLogin) {
    return <Outlet/>
  }
  
  if (!isLogin) {
    return <Navigate to="/login" replace state={{ redirectedFrom: pathname}}/>
  }
}

export default ProtectedRoute

