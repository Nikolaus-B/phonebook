import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationNav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavigationLinks = styled(NavLink)`
  text-decoration: none;
  color: #34495e;
  height: 35px;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:active {
    color: #3eb2fd;
    background-color: #34495e;
  }

  &:hover {
    color: #3eb2fd;
    background-color: #34495e;
  }
`;
