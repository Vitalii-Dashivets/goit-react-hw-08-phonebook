import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e6f2ff;
  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;
export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 10px 25px;
  margin-right: 20px;
  background-color: #f06292;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 17px;
  color: white;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);
  &:hover,
  &:focus {
    background-color: #6699ff;
  }
`;
export const NavLinkPages = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  margin-right: 30px;
  color: black;
  padding: 5px 20px;
  border-radius: 20px;

  &.active {
    background-color: #f06292;
    color: white;
  }
  &:hover {
    background-color: #6699ff;
  }
`;
export const BoxPages = styled.div`
  margin-left: 50px;
`;
