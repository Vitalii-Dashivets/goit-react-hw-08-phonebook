import styled from '@emotion/styled';

export const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #f06292;
  padding: 20px;
  /* border: 3px solid rgba(216, 116, 225, 1); */
  border-radius: 10px;
  background-color: rgba(230, 242, 255, 0.7);
  box-shadow: 2px 3px 4px 2px rgba(20, 20, 20, 0.5);
  font-style: italic;
`;

export const FilterInput = styled.input`
  margin-left: 10px;
  width: 210px;
  font-size: 20px;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 0 15px;
  &:focus {
    outline-color: #f06292;
  }
`;
export const FilterLabel = styled.label`
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Checkbox = styled.input`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;
