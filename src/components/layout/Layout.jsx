import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

const Layout = () => {
  return (
    <div className='container flex flex-col h-screen '>
      <Header>
        <h1>My App</h1>

      </Header>
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
