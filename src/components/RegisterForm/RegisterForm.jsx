import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RegisterContainer } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <RegisterContainer>
        <TextField type="text" name="name" label="name" variant="standard" />
        <TextField type="email" name="email" label="email" variant="standard" />
        <TextField
          type="password"
          name="password"
          label="password"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
      </RegisterContainer>
    </form>
  );
};
