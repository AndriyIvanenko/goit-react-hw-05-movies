import axios from 'axios';

const API_KEY = 'babda8599831afaa2c30cb95eedbc1fe';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingList = (setData, controller) => {
  axios
    .get(`trending/movie/day?api_key=${API_KEY}`, { signal: controller.signal })
    .then(response => {
      //   console.log(response);
      setData(response.data.results);
    })
    .catch(e => console.log(e));
};

export const getSearchedList = (request, setData, controller) => {
  axios
    .get(`search/movie?query=${request}&api_key=${API_KEY}`, { signal: controller.signal })
    .then(response => {
      //   console.log(response);
      setData(response.data.results);
    })
    .catch(e => console.log(e));
};

export const getMovieDetails = (id, setData, setGenres, controller) => {
  axios
    .get(`movie/${id}?api_key=${API_KEY}`, { signal: controller.signal })
    .then(response => {
      //   console.log(response);
      setData(response.data);
      let genreList = [];
      response.data.genres.map(genre => genreList.push(genre.name));
      setGenres(genreList);
    })
    .catch(e => console.log(e));
};

export const getCast = (id, setData, controller) => {
  axios
    .get(`movie/${id}/credits?api_key=${API_KEY}`, { signal: controller.signal })
    .then(response => {
      //   console.log(response);
      if (response.data.cast.length === 0) {
        return;
      }
      setData(response.data.cast);
    })
    .catch(e => console.log(e));
};

export const getReviews = (id, setData, controller) => {
  axios
    .get(`movie/${id}/reviews?api_key=${API_KEY}`, { signal: controller.signal })
    .then(response => {
      //   console.log(response);
      if (response.data.total_results === 0) {
        return;
      }
      setData(response.data.results);
    })
    .catch(e => console.log(e));
};
