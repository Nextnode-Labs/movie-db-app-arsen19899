import {BASE_PATH,TOP,API_KEY,PAGE_PARAM} from "./constant";
import { fetchData } from './action_helpers';
import {
    FETCH_TOP_MOVIES,
    FETCH_TOP_MOVIES_IS_LOADING,
    FETCH_TOP_MOVIES_HAS_ERRORED
} from './types';

export function fetchTopMovies(page = 1) {
  const url = `${BASE_PATH}${TOP}${API_KEY}&${PAGE_PARAM}${page}`;
  return (dispatch) => {
  
    fetchData(
      dispatch,
      url,
      FETCH_TOP_MOVIES,
      FETCH_TOP_MOVIES_IS_LOADING,
      FETCH_TOP_MOVIES_HAS_ERRORED
    );
  };
}
