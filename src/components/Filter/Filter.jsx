import React from 'react';

import { selectFilter, selectIsSorted } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { setSortByName } from 'redux/sortSlice';
import { FilterStyle, FilterInput, FilterLabel } from './Filter.styled';
import { Checkbox } from '@mui/material';
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const isSorted = useSelector(selectIsSorted);
  const dispatch = useDispatch();

  const onChangeFilter = evt => dispatch(setFilter(evt.target.value));
  const onChangeSortedByName = evt => {
    return dispatch(setSortByName(evt.target.checked));
  };
  return (
    <FilterStyle>
      <FilterLabel>
        Find contact by Name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => onChangeFilter(evt)}
          placeholder="Enter search name"
        ></FilterInput>
      </FilterLabel>
      <FilterLabel>
        [A-Z]
        <Checkbox
          type="checkbox"
          checked={isSorted}
          onChange={onChangeSortedByName}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 28 },
            color: 'rgba(240, 98, 146, 1)',
            '&.Mui-checked': {
              color: 'rgba(240, 98, 146, 1)',
            },
          }}
        />
      </FilterLabel>
    </FilterStyle>
  );
};
