import {
    FETCH_TOP_MOVIES,
    FETCH_TOP_MOVIES_IS_LOADING,
    FETCH_TOP_MOVIES_HAS_ERRORED
  } from '../types';
  
  const initialState = {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false,
    hasErrored: false
  };
  
  function fetchTopMoviesIsLoading(state = initialState, action) {
    return {
      ...state,
      isLoading: action.payload
    };
  }
  
  function fetchTopMoviesHasErrored(state = initialState, action) {
    return {
      ...state,
      hasErrored: action.payload
    };
  }
  
  function fetchTopMovies(state = initialState, action) {
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
  
  export function topReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_TOP_MOVIES_IS_LOADING:
        return fetchTopMoviesIsLoading(state, action);
      case FETCH_TOP_MOVIES_HAS_ERRORED:
        return fetchTopMoviesHasErrored(state, action);
      case FETCH_TOP_MOVIES:
        return fetchTopMovies(state, action);
      default:
        return state;
    }
  }
  