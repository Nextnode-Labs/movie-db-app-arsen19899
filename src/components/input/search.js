import React from 'react';


import './input.css';

const Input = ({ onChange, value, onKeyPress }) => (
  <div className="form-control me-2">
    <i className="fas fa-search" />
    <input
      className="input"
      placeholder="Click to search"
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  </div>
);


export default Input;
