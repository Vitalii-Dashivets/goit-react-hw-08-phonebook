import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { BoxPages, Header, NavLinkPages } from './Navigation.styled';
import { ImHome2, ImPhone } from 'react-icons/im';
import { NavMenu } from 'components/NavMenu/NavMenu';

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

        {!isLoggedIn ? <NavMenu /> : <UserMenu />}
      </Header>
      <Suspense fallback={<Loader />}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};
export default Navigation;
