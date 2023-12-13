import { useDispatch, useSelector } from 'react-redux';
import { SearchContainer } from './Filter.styled';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectots';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <SearchContainer>
      <p>Find contacts by name</p>

      <TextField
        label="Name or number"
        variant="filled"
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        value={filter}
        style={{
          width: '300px',
        }}
      />
    </SearchContainer>
  );
};
