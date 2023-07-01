import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/operations';
import {
  BtnLogin,
  Form,
  Input,
  Label,
  LabelContent,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUpThunk({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelContent>Name</LabelContent>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        <LabelContent>Email</LabelContent>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        <LabelContent>Password</LabelContent>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </Label>
      <BtnLogin type="submit">Sign up</BtnLogin>
    </Form>
  );
};
