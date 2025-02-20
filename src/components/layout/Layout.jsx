import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header>
        <h1>My App</h1>

      </Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 My App</p>
      </footer>
    </>
  );
};

export default Layout;
