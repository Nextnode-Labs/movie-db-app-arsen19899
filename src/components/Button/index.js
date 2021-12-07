import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, callback }) => (
  <div className="d-grid gap-2 col-3 mx-auto mb-5">
  <button type='button' className="btn btn-dark btn-lg" onClick={callback}>
    {text}
  </button >
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
};

export default Button;
