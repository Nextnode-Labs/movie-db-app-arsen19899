import React from 'react';
// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import Button from './Button';
import { useTopFetch } from '../hooks/useTopFetch';


const Top = () => {
  const {
    state,
    loading,
    error,
    setIsLoadingMore
  } = useTopFetch();


  if (error) return <div>Something went wrong ...</div>;

  return (
    <>


      <Grid header={'Top Movies'}>
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : `https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`
            }
            movieId={movie.id}
            movieTitle={movie.title}
            movieRate={movie.vote_average}
            movieDate={movie.release_date}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Top;
