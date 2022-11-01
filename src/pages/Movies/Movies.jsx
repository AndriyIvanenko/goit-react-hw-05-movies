import { useState, useEffect, Suspense } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Main } from './Movies.styled';
import { SearchForm } from 'components/Form/Form';
import { MovieList } from 'components/MovieList/MovieList';
import { getSearchedList } from 'components/requests';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  //   console.log('------ MOVIES ------');
  const [searchedList, setSearchedList] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchRequest === '') {
      return;
    }

    const controller = new AbortController();
    getSearchedList(searchRequest, setSearchedList, controller);

    return () => controller.abort();
  }, [searchRequest]);

  const sendSearchRequest = request => {
    setSearchRequest(request);
    navigate(`?query=${request}`);
  };

  return (
    <Main>
      {JSON.stringify(params) === '{}' && <SearchForm onFormSubmit={sendSearchRequest} />}
      {searchedList.length !== 0 && JSON.stringify(params) === '{}' && (
        <MovieList movieList={searchedList} />
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default Movies;
