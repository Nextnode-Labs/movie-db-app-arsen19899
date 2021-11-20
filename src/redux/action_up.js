import {BASE_PATH,UPCOMING,API_KEY,PAGE_PARAM} from "./constant";
import { fetchData } from './action_helpers';
import {
    FETCH_UP_MOVIES,
    FETCH_UP_MOVIES_IS_LOADING,
    FETCH_UP_MOVIES_HAS_ERRORED
} from './types';

export function fetchUpMovies(page = 1) {
  const url = `${BASE_PATH}${UPCOMING}${API_KEY}&${PAGE_PARAM}${page}`;
  return (dispatch) => {
  
    fetchData(
      dispatch,
      url,
      FETCH_UP_MOVIES,
      FETCH_UP_MOVIES_IS_LOADING,
      FETCH_UP_MOVIES_HAS_ERRORED
    );
  };
}
