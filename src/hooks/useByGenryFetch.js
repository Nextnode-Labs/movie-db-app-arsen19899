import { useState, useEffect } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useByGenryFetch = () => {
  const [genrId, setGenrId] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchByGen = async (page,genrId='') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchByGen(genrId,page);

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
    if (!genrId) {
      const sessionState = isPersistedState('genrState');

      if (sessionState) {
        console.log('Grabbing from sessionStorage');
        setState(sessionState);
        return;
      }
    }
    console.log('Grabbing from API');
    setState(initialState);
    fetchByGen(1, genrId);
  }, [genrId]);

  useEffect(() => {

      const sessionState = isPersistedState('genreState');

      if (sessionState) {
              setState(sessionState);
        return;
      }

      setState(initialState);
      fetchByGen(1, setState);
  }, [setState]);
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchByGen(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);

  useEffect(() => {
   sessionStorage.setItem('genreState', JSON.stringify(state));
  }, [state]);

  return { state, loading, error, genrId, setGenrId,  setIsLoadingMore };
};
