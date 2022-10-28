import { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Main } from './Movies.styled';
import { SearchForm } from 'components/Form/Form';
import { MovieList } from 'components/MovieList/MovieList';
import { getSearchedList } from 'components/requests';

export const Movies = () => {
  console.log('MOVIES');

  const [searchedList, setSearchedList] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  let searchRequest;
  const inputChangeHandler = evt => {
    searchRequest = evt.currentTarget.value;
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    getSearchedList(searchRequest, setSearchedList);
    console.log(evt.target);
    // document.getElementsByName('search').reset();
    navigate(`?query=${searchRequest}`);
  };

  return (
    <Main>
      {JSON.stringify(params) === '{}' && (
        <SearchForm
          submitHandler={onSubmitHandler}
          inputHandler={inputChangeHandler}
        />
      )}
      {searchedList.length !== 0 && JSON.stringify(params) === '{}' && (
        <MovieList list={searchedList} />
      )}
      <Outlet />
    </Main>
  );
};
