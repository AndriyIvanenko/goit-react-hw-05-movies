import { useState, useEffect } from 'react';
import { H2, Main } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { getTrendingList } from 'components/requests';

const Home = () => {
  console.log('------ HOME -------');

  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    if (trendingList.length !== 0) {
      return;
    }

    const controller = new AbortController();
    getTrendingList(setTrendingList, controller);

    return () => controller.abort();
  }, [trendingList.length]);

  return (
    <Main>
      <H2>Trending today</H2>
      <MovieList list={trendingList} />
    </Main>
  );
};

export default Home;
