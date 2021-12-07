import { useState, useEffect } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useTopFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMoviesTop = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMoviesTop(page);

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

      const sessionState = isPersistedState('topState');

      if (sessionState) {
        console.log('Grabbing from sessionStorage');
        setState(sessionState);
        return;
      }

    console.log('Grabbing from API');
    setState(initialState);
    fetchMoviesTop(1, setState);
  }, [setState]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMoviesTop(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);

  useEffect(() => {
   sessionStorage.setItem('topState', JSON.stringify(state));
  }, [state]);

  return { state, loading, error, setIsLoadingMore };
};
