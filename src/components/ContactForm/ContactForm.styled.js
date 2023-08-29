import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 900px;
  padding: 20px;
  /* border: 3px solid rgba(216, 116, 225, 1); */
  border-radius: 10px;
  background-color: rgba(230, 242, 255, 0.7);
  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);
  font-style: italic;
`;

export const InputStyle = styled.input`
  height: 30px;
  width: 200px;
  font-size: 20px;
  padding: 0 10px;
  border: 2px solid #f06292;
  border-radius: 17px;
  margin-left: 20px;
  margin-right: auto;
  &:focus {
    outline-color: #6699ff;
  }
`;
export const Label = styled.label`
  font-size: 30px;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  /* height: 50px; */
  background-color: #f06292;
  font-size: 20px;
  color: white;
  border-radius: 25px;
  border: none;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);
  &:hover {
    background-color: #6699ff;
  }
`;
