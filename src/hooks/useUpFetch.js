import { useState, useEffect } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useUpFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMoviesUp = async (page) => {
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
        console.log('Grabbing from sessionStorage');
        setState(sessionState);
        return;
      }

    console.log('Grabbing from API');
    setState(initialState);
    fetchMoviesUp(1, setState);
  }, [setState]);

  
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMoviesUp(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);

  // Write to sessionStorage
  useEffect(() => {
   sessionStorage.setItem('upState', JSON.stringify(state));
  }, [state]);

  return { state, loading, error, setIsLoadingMore };
};