import {BASE_PATH,TOP,DISCOVER,API_KEY,PAGE_PARAM} from "../constant";
import { fetchData } from './action_helpers';
import {
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_MOVIES_IS_LOADING,
  FETCH_DISCOVER_MOVIES_HAS_ERRORED
} from '../types';

export function fetchDiscoverMovies(page = 1) {
  const url = `${BASE_PATH}${DISCOVER}${API_KEY}&${PAGE_PARAM}${page}`;
  return (dispatch) => {
  
    fetchData(
      dispatch,
      url,
      FETCH_DISCOVER_MOVIES,
      FETCH_DISCOVER_MOVIES_IS_LOADING,
      FETCH_DISCOVER_MOVIES_HAS_ERRORED
    );
  };
}
export function fetchtopMovies(page = 1) {
  const url = `${BASE_PATH}${TOP}${API_KEY}&${PAGE_PARAM}${page}`;
  return (dispatch) => {
  
    fetchData(
      dispatch,
      url,
      FETCH_DISCOVER_MOVIES,
      FETCH_DISCOVER_MOVIES_IS_LOADING,
      FETCH_DISCOVER_MOVIES_HAS_ERRORED
    );
  };
}
