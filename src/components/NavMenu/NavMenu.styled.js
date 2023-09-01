import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
  /* background-color: #f06292; */
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #f06292;
  border-radius: 20px;
  color: #f06292;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);
  &.active {
    background-color: #f06292;
    color: white;
  }
  &:hover {
    background-color: #f06292;
    color: white;
  }
`;
