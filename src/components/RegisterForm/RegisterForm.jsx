import { TextField } from '@mui/material';
import { pink } from '@mui/material/colors';
import { RegisterBox, RegisterForma, SignInBtn } from './RegisterForm.styled';
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
        <TextField
          value={name}
          required
          id="outlined-required"
          label="Name"
          name="name"
          placeholder="Enter your name"
          sx={{
            width: 300,
            marginBottom: 2,
            '& label.Mui-focused': {
              color: '#f06292',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0E3E7',
              },
              '&:hover fieldset': {
                borderColor: '#B2BAC2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#f06292',
              },
            },
          }}
          onChange={evt => setName(evt.target.value)}
        />
        <TextField
          required
          name="email"
          value={email}
          id="outlined-required"
          label="Email"
          placeholder="Enter your email"
          sx={{
            width: 300,
            marginBottom: 2,
            '& label.Mui-focused': {
              color: '#f06292',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0E3E7',
              },
              '&:hover fieldset': {
                borderColor: '#B2BAC2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#f06292',
              },
            },
          }}
          onChange={evt => setEmail(evt.target.value)}
        />
        <TextField
          required
          name="password"
          value={password}
          id="outlined-required"
          label="Password"
          placeholder="Enter your password"
          sx={{
            width: 300,
            marginBottom: 2,
            '& label.Mui-focused': {
              color: '#f06292',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0E3E7',
              },
              '&:hover fieldset': {
                borderColor: '#B2BAC2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#f06292',
              },
            },
          }}
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
