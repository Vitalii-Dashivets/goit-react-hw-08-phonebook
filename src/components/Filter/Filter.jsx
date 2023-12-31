import React from 'react';
import { useContacts } from 'hooks/useContacts';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { setSortByName } from 'redux/sort/sortSlice';
import { FilterStyle, FilterInput, FilterLabel } from './Filter.styled';
import { Checkbox } from '@mui/material';
export const Filter = () => {
  const { filter, isSorted } = useContacts();
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
