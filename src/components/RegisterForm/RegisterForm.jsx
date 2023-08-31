import { pink } from '@mui/material/colors';
import {
  RegisterBox,
  RegisterForma,
  SignInBtn,
  CssTextField,
} from './RegisterForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form.elements.email.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterBox>
      <RegisterForma onSubmit={handleSubmit}>
        <CssTextField
          value={name}
          required
          id="outlined-required"
          label="Name"
          name="name"
          placeholder="Enter your name"
          onChange={evt => setName(evt.target.value)}
        />
        <CssTextField
          required
          name="email"
          value={email}
          id="outlined-required"
          label="Email"
          placeholder="Enter your email"
          onChange={evt => setEmail(evt.target.value)}
        />
        <CssTextField
          required
          name="password"
          value={password}
          id="outlined-required"
          label="Password"
          placeholder="Enter your password"
          onChange={evt => setPassword(evt.target.value)}
        />
        <SignInBtn
          type="submit"
          variant="contained"
          size="middle"
          sx={{
            width: 100,
            backgroundColor: pink[300],
          }}
        >
          SIGN UP
        </SignInBtn>
      </RegisterForma>
    </RegisterBox>
  );
};
