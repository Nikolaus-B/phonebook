import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserContainer, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserContainer>
  );
};
