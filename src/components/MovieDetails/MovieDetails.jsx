import { AddInformation } from 'components/AddInfo/AddInfo';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Details, Genres, H2, H4, Img, Overview, Score } from './MovieDetails.styled';
import { getMovieDetails } from 'components/requests';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  //   console.log('MOVIE DETAILS');
  const [movieDetails, setMovieDetails] = useState({});
  const [genreList, setGenreList] = useState([]);

  const movieId = useParams().id;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    getMovieDetails(movieId, setMovieDetails, setGenreList, controller);

    return () => controller.abort();
  }, [movieId]);

  function onGoBackClick(evt) {
    if (evt.target.type === 'button') {
      navigate(location.state.from);
    }
  }

  return (
    <>
      <Button type="button" onClick={onGoBackClick}>
        &#x2190; Go back
      </Button>

      <Details>
        <Img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="poster" />

        {JSON.stringify(movieDetails) !== '{}' && (
          <div>
            <H2>
              {movieDetails.title || movieDetails.name}
              {' ('}
              {movieDetails.release_date.slice(0, 4)}
              {')'}
            </H2>
            <Score>User Score: {Math.round(movieDetails.vote_average * 10)}%</Score>
            <H4>Overview</H4>
            <Overview>{movieDetails.overview}</Overview>
            <H4>Genres:</H4>
            <Genres>
              {genreList.join(', ')}
              {/* {(function () {
                let genreList = [];
                movieDetails.genres.map(genre => genreList.push(genre.name));
                return genreList;
              })().join(', ')} */}
            </Genres>
          </div>
        )}
      </Details>

      <AddInformation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
