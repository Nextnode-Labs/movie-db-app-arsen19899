import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ header, children }) => (
    <div className='container mx-auto text-center'>
    <h1>{header}</h1>
      <div className='row'>
          {children}
      </div>
</div>
);

Grid.propTypes = {
  header: PropTypes.string
};

export default Grid;
