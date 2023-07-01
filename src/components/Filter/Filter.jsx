import { useDispatch } from 'react-redux';
import { Label, InputField } from './Filter.styled';
import { filterContacts } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <Label>
        <InputField
          placeholder="Find contact by name"
          type="text"
          name="filter"
          onChange={handleFilter}
        />
      </Label>
    </>
  );
};
