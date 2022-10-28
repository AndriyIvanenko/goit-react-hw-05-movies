import axios from 'axios';

const API_KEY = 'babda8599831afaa2c30cb95eedbc1fe';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingList = setData => {
  axios
    .get(`trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      setData(response.data.results);
      //   console.log(response.data.results);
    })
    .catch(e => console.log(e));
};

export const getSearchedList = (request, setData) => {
  axios
    .get(`search/movie?query=${request}&api_key=${API_KEY}`)
    .then(response => {
      setData(response.data.results);
    })
    .catch(e => console.log(e));
};

export const getMovieDetails = (id, setData, details, setGenres) => {
  axios
    .get(`movie/${id}?api_key=${API_KEY}`)
    .then(response => {
      setData(response.data);
      setGenres(details.genres.map(genre => genre.name + ', '));
    })
    .catch(e => console.log(e));
};

export const getCast = (id, setData) => {
  axios
    .get(`movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => {
      setData(response.data.cast);
    })
    .catch(e => console.log(e));
};

export const getReviews = (id, setData) => {
  axios
    .get(`movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => {
      if (response.data.total_results === 0) {
        return;
      }
      setData(response.data.results);
    })
    .catch(e => console.log(e));
};
