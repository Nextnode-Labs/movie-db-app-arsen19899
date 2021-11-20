import React from 'react';
import MovieCard from '../components/movies/MovieCard';
import Spinner from '../components/spinner/spinner';
import Page404 from './Page404';

const UpList = ({ upList, movieList, pageId }) => {
  const { isLoading, hasErrored, pages } = upList;
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
           <Spinner/>
      </div>
    );
  }
  const movieIds = upList.pages[pageId].ids;
  const list = movieIds.map(id => movieList[id]);
console.log(upList)
  return (
    <div className='row'>
      {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default UpList;

