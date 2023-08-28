import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1a8061f72fb1776532da878814844efc';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p';

const getTrendingVideos = axios.get(
  `${BASE_URL}/trending/all/day?language=en-US&api_key=${API_KEY}`
);

export default {
  getTrendingVideos,
};
