import { useState, useEffect } from 'react';
import { H2, Main } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { getTrendingList } from 'components/requests';

const Home = () => {
  // console.log('------ HOME -------');

  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getTrendingList(setTrendingList, controller);

    return () => controller.abort();
  }, []);

  return (
    <Main>
      <H2>Trending today</H2>
      <MovieList movieList={trendingList} />
    </Main>
  );
};

export default Home;
