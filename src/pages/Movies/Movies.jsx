import { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Main } from './Movies.styled';
import { SearchForm } from 'components/Form/Form';
import { MovieList } from 'components/MovieList/MovieList';
import { getSearchedList } from 'components/requests';

const Movies = () => {
  console.log('MOVIES');

  const [searchedList, setSearchedList] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const sendSearchRequest = searchRequest => {
    getSearchedList(searchRequest, setSearchedList);
    navigate(`?query=${searchRequest}`);
  };

  return (
    <Main>
      {JSON.stringify(params) === '{}' && (
        <SearchForm onFormSubmit={sendSearchRequest} />
      )}
      {searchedList.length !== 0 && JSON.stringify(params) === '{}' && (
        <MovieList list={searchedList} />
      )}
      <Outlet />
    </Main>
  );
};

export default Movies;
