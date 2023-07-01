import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, HeaderLink, Nav } from './Layout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header>
        <Nav>
          <div>
            <HeaderLink to="/">Home</HeaderLink>
            {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <ToastContainer autoClose={2500} />
    </>
  );
};
