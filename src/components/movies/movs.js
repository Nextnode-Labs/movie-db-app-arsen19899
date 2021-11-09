import React  from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';

const MovePost = ({ overview, release_date, poster_path, id, title, vote_average }) => (
  <div className="col-md-3 col-sm-12 col-xs-12 shadow p-3 mb-5 bg-white rounded position-relative">
    
    <div className="position-absolute top-10 start-50 translate-middle badge border border-light rounded-circle bg-danger p-2">{vote_average}</div>
    { isNaN(release_date) ?(
    <span className="bg-success p-2 text-white position-absolute">{release_date}</span>):
    (
      <div></div>
    )}
    { poster_path!=null ?(
    <a href={`/movie/${id}`}>     
       <img className="newsim" src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img></a>):
       (<a href={`/movie/${id}`}>     
       <img className="newsim" src={`https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`}></img></a>)
      } 
      <a href={`/movie/${id}`} className="text-decoration-none"><h4 className="text-center text-muted text-decoration-none">{title}</h4></a>
     
           
      
      
    
  </div>
);



export default MovePost;
