import { useLocation } from 'react-router-dom';
import { AddInfo, Ul, Li, StyledLink, H3 } from './AddInfo.styled';

export const AddInformation = () => {
  //   console.log('ADD INFO');

  const location = useLocation();

  return (
    <AddInfo>
      <H3>Additional information</H3>
      <Ul>
        <Li>
          <StyledLink to="cast" state={{ from: location.state.from }}>
            Cast
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="reviews" state={{ from: location.state.from }}>
            Reviews
          </StyledLink>
        </Li>
      </Ul>
    </AddInfo>
  );
};
