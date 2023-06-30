import { useDispatch } from 'react-redux';
import { Label, InputLabel, InputField } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <Label>
        <InputLabel>Find contact by name</InputLabel>
        <InputField type="text" name="filter" onChange={handleFilter} />
      </Label>
    </>
  );
};
