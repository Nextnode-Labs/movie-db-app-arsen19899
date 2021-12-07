import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ movieTitle }) => (
  <div className="container border-top pt-2">
  <nav aria-label="breadcrumb">
   <ol class="breadcrumb">
   <li class="breadcrumb-item"><Link className='text-decoration-none text-dark' to='/'>Home</Link></li>
    <li class="breadcrumb-item">{movieTitle}</li>
    </ol>
  </nav>
  </div>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
};

export default BreadCrumb;
