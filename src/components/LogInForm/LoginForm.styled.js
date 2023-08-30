import styled from '@emotion/styled';

export const LogInBox = styled.div`
  background-color: grey;
  padding: 50px;
  width: 400px;
  /* height: 300px; */
  margin: 150px auto;
  border-radius: 20px;
  background-color: #e6f2ff;
  box-shadow: 2px 3px 4px 2px rgba(20, 20, 20, 0.5);
`;

export const LogInForma = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  /* height: 250px; */
`;
export const LogInBtn = styled.button`
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
  margin: 0 auto;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);
  &:hover,
  &:focus {
    background-color: #f06292;
    color: white;
  }
`;
