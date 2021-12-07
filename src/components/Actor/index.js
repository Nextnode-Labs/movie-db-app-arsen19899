import React from 'react';
import PropTypes from 'prop-types';

const Actor = ({ name, character, imageUrl }) => (
  <div className='col-md-3 col-sm-12 col-xs-12 shadow p-3 mb-5 bg-white rounded position-relative text-decoration-none'>

<img className="img-fluid" src={imageUrl}></img>

    <h3>{name}</h3>
    <p>{character}</p>
  </div>

);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Actor;
