import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1a8061f72fb1776532da878814844efc';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';

const movieByGenreURL='https://api.themoviedb.org/3/discover/movie?api_key=1a8061f72fb1776532da878814844efc'

const getTrendingVideos = axios.get(
  `${BASE_URL}/trending/all/day?language=en-US&api_key=${API_KEY}`
);


function  getMovieByGenre(id){
 return axios.get(movieByGenreURL+"&with_genres="+id)
}
 

export default {
  getTrendingVideos,
  getMovieByGenre,
  IMG_BASE_URL
};
