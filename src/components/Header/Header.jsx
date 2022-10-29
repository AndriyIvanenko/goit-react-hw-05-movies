import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledNav, StyledNavLink } from './Header.styled';
import { Loader } from 'components/Loader/Loader';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
