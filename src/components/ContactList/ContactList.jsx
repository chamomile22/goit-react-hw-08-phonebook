import {
  ContactsItem,
  BtnDelete,
  ContactsItemList,
  ContactName,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContactThunk } from 'redux/contacts/operations';

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
      <ContactsItemList>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <p>
                <ContactName>{name}:</ContactName>
                {number}
              </p>
              <BtnDelete onClick={() => handleOnClick(id)}>Delete</BtnDelete>
            </ContactsItem>
          );
        })}
      </ContactsItemList>
    </>
  );
};
