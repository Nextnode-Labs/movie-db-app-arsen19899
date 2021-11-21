import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const SearchResults = ({ results }) => {
  results = results.slice(0, 10);
  return (
    <ul className=''>
      {results && results.length !== 0 ? (
        results.map(result => (
          <li className='' key={result.id}>
            <Link className='' to={`/movie/${result.id}`}>
 { result.poster_path!=null ?(      
       <img className="img-thumbnail rounded" width= '50'  height = '50' src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}></img>):
       (
       <img className="img-thumbnail rounded" width= '50'  height = '50' src={`https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`}></img>)
      } 
              <span className=''>
                {result.title}
                <span className=''>{` (${
                  result.release_date
                    ? moment(result.release_date).format('YYYY')
                    : 'N/A'
                })`}</span>
              </span>
            </Link>
          </li>
        ))
      ) : (
        <li className=''>
          <div className=''>No results found</div>
        </li>
      )}
    </ul>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};
