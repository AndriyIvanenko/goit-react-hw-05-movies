import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  padding-bottom: 10px;
  padding-left: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid lightgrey;
  /* box-shadow: 0px 8px 8px -12px #111; */
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  padding-left: 4px;
  padding-right: 3px;

  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #cf2828;
  }
  &:hover {
    cursor: pointer;
    color: #cf2828;
    text-decoration: underline;
  }
`;
