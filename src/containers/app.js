import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/header/header';
import DiscoverPage from './HomePage';
import Page404 from "./Page404";
import Movie from "./Movie"

function News(){

    return (
      <Router>
      <div className="container-fluid">
        <Header title=" Film Pars By Arsen " />

        
        <Switch>
        
        <Route exact path="/" exact component={DiscoverPage}/>
        <Route path="/home/:page" component={DiscoverPage} />
         <Route path="/movie/:id" component={Movie}/>
        <Route component={Page404}/>
        </Switch>
      </div>
      </Router>
    );

}

export default News;
