const API_URL: string = 'https://api.themoviedb.org/3/'
const API_KEY: string = 'b9f7a0ee130480f6cd231acd274b0daa';

const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
const TOP_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const UP_BASE_URL = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;
const REQUEST_TOKEN_URL: string = `${API_URL}authentication/token/new?api_key=${API_KEY}`
const LOGIN_URL: string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`
const SESSION_ID_URL: string = `${API_URL}authentication/session/new?api_key=${API_KEY}`

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/'

const BACKDROP_SIZE: string = 'original'

const POSTER_SIZE: string = 'w780'


export {
  POPULAR_BASE_URL,
  TOP_BASE_URL,
  UP_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
}
