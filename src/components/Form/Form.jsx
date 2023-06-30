import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsForm,
  Label,
  InputLabel,
  InputField,
  BtnSubmit,
} from './Form.styled';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import { addContactThunk } from 'redux/operations';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.trim() || !number.trim()) {
      toast.info('Please enter contact name and number');
      return;
    }

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      toast.info('Contact with this name already exist!');
      reset();
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContactThunk(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <Label>
        <InputLabel>Name</InputLabel>
        <InputField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <InputLabel>Number</InputLabel>
        <InputField
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <BtnSubmit type="submit">Add contact</BtnSubmit>
    </ContactsForm>
  );
};
