import { TextField } from '@mui/material';
import { LogInBtn } from './LoginForm.styled';
import { useState } from 'react';
import { LogInBox, LogInForma } from './LoginForm.styled';
import { logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setEmail('');
    setPassword('');
  };
  return (
    <LogInBox>
      <LogInForma onSubmit={handleSubmit}>
        <TextField
          required
          value={email}
          id="outlined-required"
          label="Email"
          name="email"
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
          value={password}
          name="password"
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
        <LogInBtn type="submit">LOG IN</LogInBtn>
      </LogInForma>
    </LogInBox>
  );
};
