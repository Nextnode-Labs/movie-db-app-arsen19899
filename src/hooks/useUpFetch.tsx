import { useState, useEffect } from 'react';
import API, { Movie } from '../API'
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0
};

export const useUpFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMoviesUp = async (page: number) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMoviesUp(page);

      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {

      const sessionState = isPersistedState('upState');

      if (sessionState) {

        setState(sessionState);
        return;
      }

 
    setState(initialState);
    fetchMoviesUp(1);
  }, [setState]);

  
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMoviesUp(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);


  useEffect(() => {
   sessionStorage.setItem('upState', JSON.stringify(state));
  }, [state]);

  return { state, loading, error, setIsLoadingMore };
};
