import styled from '@emotion/styled';

export const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  font-size: 30px;
  margin-bottom: 30px;

  padding: 20px;
  /* border: 3px solid rgba(216, 116, 225, 1); */
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.8);
  box-shadow: 2px 3px 4px 2px rgba(20, 20, 20, 0.5);
  font-style: italic;
`;

export const FilterInput = styled.input`
  margin-left: 10px;
  width: 200px;
  font-size: 20px;
  height: 30px;
  border: 2px solid pink;
  border-radius: 17px;
  padding: 0 15px;
  &:focus {
    outline-color: blue;
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
