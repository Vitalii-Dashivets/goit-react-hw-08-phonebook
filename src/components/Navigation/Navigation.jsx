import { UserMenu } from 'components/UserMenu/UserMenu';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { BoxPages, Header, Nav, NavLinkPages } from './Navigation.styled';
import { NavLinkStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { ImHome2, ImPhone } from 'react-icons/im';
// import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
