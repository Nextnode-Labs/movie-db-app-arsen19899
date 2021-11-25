import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const MovieCard = ({ movie }) => (
  <Link className='col-md-3 col-sm-12 col-xs-12 shadow p-3 mb-5 bg-white rounded position-relative text-decoration-none' to={`/movie/${movie.id}`}>
    
    <div className=''>
      {movie.vote_average ? (
        <span className='position-absolute top-10 start-50 translate-middle badge border border-light rounded-circle bg-danger p-2'>{movie.vote_average * 10}%</span>
      ) : null}
      <span className='bg-success p-2 text-white position-absolute'>
        {` (${moment(movie.release_date).format('YYYY') ||
          null})`}
      </span>
      { movie.poster_path!=null ?(
       
       <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>):
       (
       <img className="img-fluid" src={`https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`}></img>)
      } 
      
      <h4 className="text-center text-muted text-decoration-none">{movie.title}</h4>
     
      
    </div>
  </Link>
);

export default MovieCard;

