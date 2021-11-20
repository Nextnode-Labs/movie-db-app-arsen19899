import React from 'react';
import MovieCard from '../components/movies/MovieCard';

import Page404 from './Page404';

const TopList = ({ topList, movieList, pageId }) => {
  const { isLoading, hasErrored, pages } = topList;
  if (hasErrored) {
    return (
      <div className=''>
        <Page404/>
      </div>
    );
  }
  if (isLoading || !pages[pageId]) {
    return (
      <div className=''>
            /* here will be spinner */
      </div>
    );
  }
  const movieIds = topList.pages[pageId].ids;
  const list = movieIds.map(id => movieList[id]);
console.log(topList)
  return (
    <div className='row'>
      {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default TopList;

