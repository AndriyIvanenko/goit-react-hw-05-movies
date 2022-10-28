import { Outlet } from 'react-router-dom';
import { StyledNav, StyledNavLink } from './Header.styled';

export const Header = () => {
  console.log('HEADER');

  return (
    <>
      <StyledNav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>
      <Outlet />
    </>
  );
};
