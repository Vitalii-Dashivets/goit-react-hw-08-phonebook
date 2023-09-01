import { Nav, NavLinkStyled } from './NavMenu.styled';

export const NavMenu = () => {
  return (
    <Nav>
      <NavLinkStyled to="/register">SIGN UP</NavLinkStyled>
      <NavLinkStyled to="/login">LOG IN</NavLinkStyled>
    </Nav>
  );
};
