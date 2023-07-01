import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContactsThunk } from 'redux/contacts/operations';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Heading, HelperText, Wrapper } from './ContactsComponent.styled';
import { ThreeDots } from 'react-loader-spinner';

export const ContactsComponent = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      <Form />
      <Heading>Your contacts</Heading>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <HelperText>No contacts here</HelperText>
      )}
      {isLoading && (
        <ThreeDots
          height="50"
          width="50"
          radius="9"
          color="#3f6f3f"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}
      {error && <HelperText>Oops... something went wrong</HelperText>}
      <ToastContainer autoClose={2000} />
    </Wrapper>
  );
};
