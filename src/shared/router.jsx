import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Results from "../pages/Results";
import Test from "../pages/Test";
import Profile from "../pages/Profile";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>     
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
