import React, { Component } from 'react';
import Page404 from "../../containers/Page404";
import moment from 'moment';
import { BASE_API_IMG_URL } from '../../redux/constant';



class Movie extends Component {
  constructor(props) {
    super(props);
    this.renderBackground = this.renderBackground.bind(this);
  }

  componentWillMount() {
    const { movie } = this.props;
    if (movie) {
      this.renderBackground(movie.backdrop_path);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movie && this.props.movie !== nextProps.movie) {
      this.renderBackground(nextProps.movie.backdrop_path);
    }
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = '';
  }

  renderBackground(backdrop) {
    document.body.style.backgroundImage = `linear-gradient(to right,
        rgba(19, 38, 47, 0.925) 0%,
        rgba(9, 28, 37, 0.925) 100%),
        url(${BASE_API_IMG_URL}${backdrop})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  }

  render() {
    const { isLoading, hasErrored, movie } = this.props;
    if (hasErrored) {
      return (
        <div className=''>
          <Page404></Page404>
        </div>
      );
    }
    if (isLoading || !movie) {
      return (
        <div className=''>
          /* here will be spinner */
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='row'>
        <h2 className='fs-2 text-white p-5'>
            {movie.original_title && movie.original_title !== movie.title
              ? `${movie.original_title} (${movie.title})`
              : movie.title}
          </h2>
        <div className='col-md-3 col-sm-6 col-xs-12 shadow p-3 mb-5 bg-white rounded position-relative text-decoration-none'>
              { movie.poster_path!=null ?(
       
       <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>):
       (
       <img className="img-fluid" src={`https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`}></img>)
      } 
      </div>
          <div className='col-md-8 col-sm-6 col-xs-12'>
          <p className='text-white'>{movie.overview}</p>
          <div className=''>
            <div className='text-light'>
              <h4>Original Release</h4>
              <p>
                {movie.release_date
                  ? moment(movie.release_date).format('MMMM D, YYYY')
                  : 'N/A'}
              </p>
            </div>
            <div className='text-light'>
              <h4>Running Time</h4>
              <p>
                {movie.runtime === 0 || !movie.runtime
                  ? 'N/A'
                  : `${movie.runtime} mins`}
              </p>
            </div>
            <div className='text-light'>
              <h4>Budget</h4>
              {movie.budget === 0 || !movie.budget
                ? 'N/A'
                : `$${Number(movie.budget).toLocaleString()}`}
            </div>
            <div className='text-light'>
              <h4>Revenue</h4>
              <p>
                {movie.revenue === 0 || !movie.revenue
                  ? 'N/A'
                  : `$${Number(movie.revenue).toLocaleString()}`}
              </p>
            </div>
            <div className='text-light'>
              <h4>Voting Average</h4>
              <p>{movie.vote_average * 10}%</p>
            </div>
            <div className='text-light'>
              <h4>Genres</h4>
              <div>
                {movie.genres
                  ? movie.genres.map(genre => (
                      <span  className='btn btn-outline-warning m-1' key={genre.id}>{genre.name}</span>
                    ))
                  : 'N/A'}
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-light">
          <h3> Similar films</h3>
          

          
    </div>
        </div>
      </div>
    );
  }
}

export default Movie;
