import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { BoxPages, Header, Nav, NavLinkPages } from './Navigation.styled';
import { NavLinkStyled } from './Navigation.styled';
import { ImHome2, ImPhone } from 'react-icons/im';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <BoxPages>
          <NavLinkPages to="/">
            <ImHome2 />
            Home
          </NavLinkPages>
          {isLoggedIn && (
            <NavLinkPages to="/contacts">
              {' '}
              <ImPhone />
              Contacts
            </NavLinkPages>
          )}
        </BoxPages>

        {!isLoggedIn ? (
          <Nav>
            <NavLinkStyled to="/register">SIGN UP</NavLinkStyled>
            <NavLinkStyled to="/login">LOG IN</NavLinkStyled>
          </Nav>
        ) : (
          <UserMenu />
        )}
      </Header>
      <Suspense fallback={<Loader />}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};
export default Navigation;
