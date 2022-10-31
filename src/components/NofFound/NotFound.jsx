import { Div, P, Span, StyledLink } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Div>
      <P>
        <Span>404 Error</Span>, page not found
      </P>
      <StyledLink to={'/'}>Go to the Home page</StyledLink>
    </Div>
  );
};
