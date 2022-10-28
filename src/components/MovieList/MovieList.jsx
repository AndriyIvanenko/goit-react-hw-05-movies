import { Li, StyledLink } from './MovieList.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ list }) => {
  console.log('MOVIE LIST');

  const location = useLocation();

  return (
    <ul>
      {list.map(item => (
        <Li key={item.id}>
          {
            <StyledLink to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title || item.name}
            </StyledLink>
          }
        </Li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  trendingList: PropTypes.arrayOf(PropTypes.object),
};
