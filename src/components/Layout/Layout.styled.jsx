import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  background-color: #538e53;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const HeaderLink = styled(NavLink)`
  margin-right: 15px;
  color: #ffffffb0;
  font-weight: 600;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: white;
  }
`;
