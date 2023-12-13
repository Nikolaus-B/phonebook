import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormContainer } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormContainer>
        <TextField type="email" name="email" label="email" variant="standard" />
        <TextField
          type="password"
          name="password"
          label="password"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </FormContainer>
    </form>
  );
};
