import { Li, StyledLink } from './MovieList.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  // console.log('MOVIE LIST');
  const location = useLocation();

  return (
    <ul>
      {movieList.map(movie => (
        <Li key={movie.id}>
          {
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          }
        </Li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
