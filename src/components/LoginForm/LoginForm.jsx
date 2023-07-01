import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/operations';
import { BtnLogin, Form, Input, Label, LabelContent } from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    dispatch(logInThunk({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <BtnLogin type="submit">Log in</BtnLogin>
    </Form>
  );
};
