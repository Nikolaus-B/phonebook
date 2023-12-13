import { AuthContainer, AuthLinks } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <AuthLinks to="/register">Register</AuthLinks>
      <AuthLinks to="/login">Log In</AuthLinks>
    </AuthContainer>
  );
};
