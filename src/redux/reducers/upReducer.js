import {
    FETCH_UP_MOVIES,
    FETCH_UP_MOVIES_IS_LOADING,
    FETCH_UP_MOVIES_HAS_ERRORED
  } from '../types';
  
  const initialState = {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false,
    hasErrored: false
  };
  
  function fetchUpMoviesIsLoading(state = initialState, action) {
    return {
      ...state,
      isLoading: action.payload
    };
  }
  
  function fetchUpMoviesHasErrored(state = initialState, action) {
    return {
      ...state,
      hasErrored: action.payload
    };
  }
  
  function fetchUpMovies(state = initialState, action) {
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.payload.page]: {
          page: action.payload.page,
          ids: action.payload.results.map(movie => movie.id),
          lastFetched: Date.now()
        }
      },
      totalPages:
        action.payload.total_pages <= 1000 ? action.payload.total_pages : 1000,
      totalResults: action.payload.total_results,
      hasErrored: false
    };
  }
  
  export function upReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_UP_MOVIES_IS_LOADING:
        return fetchUpMoviesIsLoading(state, action);
      case FETCH_UP_MOVIES_HAS_ERRORED:
        return fetchUpMoviesHasErrored(state, action);
      case FETCH_UP_MOVIES:
        return fetchUpMovies(state, action);
      default:
        return state;
    }
  }
  