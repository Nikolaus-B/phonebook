import { useAuth } from 'hooks/useAuth';

import { NavigationLinks, NavigationNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationNav>
      <NavigationLinks to="/">Home</NavigationLinks>
      {isLoggedIn && <NavigationLinks to="/tasks">Contacts</NavigationLinks>}
    </NavigationNav>
  );
};
