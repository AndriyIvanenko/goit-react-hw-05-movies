import { useLocation } from 'react-router-dom';
import { AddInfo, Ul, Li, StyledLink } from './AddInfo.styled';

export const AddInformation = () => {
  console.log('ADD INFO');

  const location = useLocation();

  return (
    <AddInfo>
      <h3>Additional information</h3>
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
