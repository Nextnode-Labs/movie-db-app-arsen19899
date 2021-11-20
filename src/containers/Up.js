import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';
import UpContainer from './UpContainer';

const Up = props => (
<div className="container mx-auto text-center">

<Link class="btn btn-primary m-4" role="button" to={`/popular/`}>POPULAR FILMS</Link> 
<Link class="btn btn-danger m-4" role="button" to={`/upcom/`}>UNCOMING FILMS</Link>
<Link class="btn btn-success m-4" role="button" to={`/top/`}>TOP RATED FILMS</Link>
    <UpContainer match={props.match} />
 </div>
);

export default Up ;