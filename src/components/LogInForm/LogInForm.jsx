import { LogInBtn } from './LoginForm.styled';
import { useState } from 'react';
import { LogInBox, LogInForma, CssTextField } from './LoginForm.styled';
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
        <CssTextField
          required
          value={email}
          id="outlined-required"
          label="Email"
          name="email"
          placeholder="Enter your email"
          onChange={evt => setEmail(evt.target.value)}
        />
        <CssTextField
          required
          value={password}
          name="password"
          id="outlined-required"
          label="Password"
          placeholder="Enter your password"
          onChange={evt => setPassword(evt.target.value)}
        />
        <LogInBtn type="submit">LOG IN</LogInBtn>
      </LogInForma>
    </LogInBox>
  );
};
