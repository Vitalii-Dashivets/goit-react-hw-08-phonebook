import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserLogMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  min-width: 150px;
  font-style: italic;
  font-size: 24px;
  font-weight: 500;
`;

export const LogoutBtn = styled.button`
  display: inline-block;
  padding: 10px 25px;
  margin-right: 20px;
  /* background-color: #f06292; */
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  border: 2px solid #f06292;
  color: #f06292;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);
  &:hover,
  &:focus {
    color: white;
    background-color: #f06292;
  }
`;
