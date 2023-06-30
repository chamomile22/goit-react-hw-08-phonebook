import { ContactsItem, BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactThunk } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleOnClick = id => {
    dispatch(deleteContactThunk(id));
  };

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              {name}: {phone}
              <BtnDelete onClick={() => handleOnClick(id)}>Delete</BtnDelete>
            </ContactsItem>
          );
        })}
      </ul>
    </>
  );
};
