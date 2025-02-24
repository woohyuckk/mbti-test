import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header/>
      <Main>
        <Outlet />
      </Main>
      <footer>
        <p>&copy; 2025 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
