import { useState, useEffect } from 'react';
import API from '../API';

const initialState = {
  genres: [],
};

export const useGenresFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchGenres = async () => {
    try {
      setError(false);
      setLoading(true);

      const genr = await API.fetchGenr();
      setState({
        ...genr,
        genres:
           [...genr.genres]
      });
      
    } catch (error) {
      setError(true);
    }
    setLoading(false);
      
     
  
    
  };

  useEffect(() => {fetchGenres(setState);
  }, []);
  

 
  return {state,loading,error };
};
