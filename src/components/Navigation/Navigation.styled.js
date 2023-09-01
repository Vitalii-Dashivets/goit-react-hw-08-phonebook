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

export const NavLinkPages = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  margin-right: 30px;
  color: black;

  /* border-radius: 20px; */

  &.active {
    /* background-color: #f06292; */
    color: #f06292;
    border-bottom: 2px solid #f06292;
  }
  &:hover {
    /* background-color: #f06292; */
    color: #f06292;
  }
`;
export const BoxPages = styled.div`
  margin-left: 50px;
`;
