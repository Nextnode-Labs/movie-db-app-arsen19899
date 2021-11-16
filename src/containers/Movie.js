import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const BASE_PATH = 'https://api.themoviedb.org/3/';
const PRE_FIX ='movie/';
const API_KEY='api_key=b9f7a0ee130480f6cd231acd274b0daa';
let paramsString = window.location.pathname;
let id = paramsString.substr(paramsString.lastIndexOf('/') + 1);

class Movie extends Component{
    state = {
        backdrop_path:'',
        budget:'',
        homepage:'',
        original_title:'',
        overview:'',
        vote_average:'',
        vote_count:'',
        release_date:'',
        poster_path:'',
        result: {},
 
      }
    
      componentDidMount() {
        const { backdrop_path,budget,homepage,original_title,overview,vote_average,vote_count,release_date,poster_path } = this.state;
        this.fetchData(backdrop_path,budget,homepage,original_title,overview,vote_average,vote_count,release_date,poster_path);
         }
    
      fetchData = () => {
        fetch(`${BASE_PATH}${PRE_FIX}${id}?${API_KEY}`)
          .then(res => res.json())
          .then(result => this.setNews(result))
          .catch(error => error);
      }


      setNews = result => {
        this.setState({ result });
      }
      updatePage = (backdrop_path,budget,homepage,original_title,overview,vote_average,vote_count,release_date,poster_path) => {
         
       
        this.setState({backdrop_path,budget,homepage,original_title,overview,vote_average,vote_count,release_date,poster_path}, () => {
         
        this.fetchData();

    
        })
      }
    
      render() {
        const { result } = this.state;
        const { backdrop_path,budget,homepage,original_title,overview,vote_average,vote_count,release_date,poster_path, genres = [] } = result;
        const divStyle = {
          color: 'blue',
          backgroundImage: 'url(' + `https://image.tmdb.org/t/p/w500${backdrop_path}` + ')',
          backgroundSize: 'cover',
          minHeight: '800px'
        };
     
  

        return (
           
          <div style={divStyle}>

            <div className="container">
          <div className="row bg-dark p-3 mt-5 text-dark bg-opacity-50">
            <h1 className="text-white">{original_title}</h1>
            <div className="col-md-4 col-sm-12 col-xs-12 shadow p-3 mb-5 bg-white rounded position-relative">
           <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
           </div>
           <div className="col-md-6 col-sm-12 col-xs-12 p-5 mb-5 text-white">
           <p className="fs-3">
           Genres:&#160;
           {genres.map(({name}) =>
               <span className="btn btn-outline-warning">&#160;{name} &#160;</span>
              )}
              </p>  
           <p className="fs-5">{overview}</p>  
           <p className="fs-3">Buget:{budget}</p>
           <p className="btn btn-success">{release_date}</p>
           <p><a className="btn btn-danger" href={homepage}>Link to homepage</a> </p>
           <p>Rating:<span className="badge border border-light rounded-circle bg-danger p-2">{vote_average}</span> 
           from:<span className="badge border border-light rounded-circle bg-danger p-2"> {vote_count}</span> votes</p>
          
              </div>
              </div>
              </div>
          </div>
        )
    }}

export  default  Movie