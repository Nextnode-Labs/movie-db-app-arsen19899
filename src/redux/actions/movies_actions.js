import {  fetchData } from './action_helpers';
import { BASE_PATH, API_KEY ,PRE_FIX } from '../constant';
import {
  FETCH_MOVIE,
  FETCH_MOVIE_IS_LOADING,
  FETCH_MOVIE_HAS_ERRORED
} from '../types';

export function fetchMovie(id) {
  const url = `${BASE_PATH }${PRE_FIX}${id}?${API_KEY}`;
  return (dispatch) => {
  
    fetchData(
      dispatch,
      url,
      FETCH_MOVIE,
      FETCH_MOVIE_IS_LOADING,
      FETCH_MOVIE_HAS_ERRORED
    );
  };
}
