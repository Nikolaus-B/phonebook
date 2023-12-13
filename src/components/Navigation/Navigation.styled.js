import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
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
    color: #fff;
    background-color: #1976d2;
  }

  &:hover {
    color: #fff;
    background-color: #1976d2;
  }
`;
