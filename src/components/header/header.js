import React from 'react';
import Input from '../input/search';

const Header = ({ title }) => (
<header className='sticky-top bg-white'>
<div className="container">  
<div className="row">
<div className="btn btn-danger m-3 col-md-4 col-sm-12 col-xs-12"> 
   <a href="/" className="fs-2 text-white text-decoration-none"> 
   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-camera-reels-fill" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
</svg>
  {title}
 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-wink-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zM4.285 9.567a.5.5 0 0 0-.183.683A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183zm5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007.73 0 1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.934.934 0 0 1-.813.493.934.934 0 0 1-.813-.493z"/>
 </svg>
 </a>
</div>
<div className="col-md-7 col-sm-12 col-xs-12"> 
 <Input></Input>
</div>
</div>
</div> 
</header>
);



export default Header;
