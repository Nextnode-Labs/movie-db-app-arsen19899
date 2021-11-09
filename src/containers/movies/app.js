import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Title from '../../components/title/title';
import Home from "./home";
import Page404 from "./Page404";
import Movie from "./Movie"

class News extends Component {


  
  render() {

 
    return (
      <Router>
      <div className="container-fluid">
        <Title title=" Film Pars By Arsen " />

        
        <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route path="/movie/:id" component={Movie}/>
        <Route component={Page404}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default News;
