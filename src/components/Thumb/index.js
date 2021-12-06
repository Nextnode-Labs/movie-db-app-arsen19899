import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Thumb = ({ image, movieId, movieTitle, movieRate, movieDate }) => (

    <Link className='col-md-3 col-sm-12 col-xs-12 shadow p-3 mb-5 bg-white rounded position-relative text-decoration-none' to={`/movie/${movieId}`}>

      <div className=''>
        {movieRate ? (
            <span className='position-absolute top-10 start-50 translate-middle badge border border-light rounded-circle bg-danger p-2'>{movieRate * 10}%</span>
        ) : null}
        <span className='bg-success p-2 text-white position-absolute'>
        {` (${moment(movieDate).format('YYYY') ||
        null})`}
      </span>
        { image!=null ?(

                <img className="img-fluid" src={image}></img>):
            (
                <img className="img-fluid" src={`https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`}></img>)
        }

        <h4 className="text-center text-muted text-decoration-none">{movieTitle}</h4>


      </div>
    </Link>

);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};

export default Thumb;
