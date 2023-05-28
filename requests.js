const API_KEY = "d7776294c0a8fd8c2d186014a0ffa79f";
const base = "https://api.themoviedb.org/3";
const requests = {
  fetchTrending: `${base}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${base}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${base}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${base}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${base}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${base}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${base}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `${base}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
