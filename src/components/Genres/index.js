import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Spinner from '../Spinner';
// Hook
import { useGenresFetch } from '../../hooks/useGenreFetch';
import {NavDropdown } from 'react-bootstrap';


const Genre = () => {
  const {
    state,
    loading,
    error,
  } = useGenresFetch();


  
 

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
    {loading && <Spinner />}
    <NavDropdown title="Select genre" id="navbarScrollingDropdown">
        
        {state.genres.map(genre => (
          <NavDropdown.Item  key={genre.id}>
          <Link 
          className='text-decoration-none text-dark' 
          to={`/genre/${genre.id}`}
          onChange={event => setState(event.currentTarget.value)}
          >
            {genre.name}</Link></NavDropdown.Item>
        ))}  
       
      </NavDropdown>
    </>
  );
};

export default Genre ;
