import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserContainer, UserName, UserSpan } from './UserMenu.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserName>
        Welcome,<UserSpan>{user.name}</UserSpan>
      </UserName>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserContainer>
  );
};
