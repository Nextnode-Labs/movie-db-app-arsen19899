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
import MoviePage from "./MoviePage"
import Top from './Top';
import Up from './Up';

function News(){

    return (
      <Router>
      <div>
        <Header title=" Film Pars By Arsen " />

        <Switch>
        <Route exact path="/" exact component={DiscoverPage}/>
        <Route exact path="/popular/" component={DiscoverPage} />
        <Route exact path="/popular/:page" component={DiscoverPage} />
        <Route exact path="/upcom/" component={Up} />
        <Route exact path="/upcom/:page" component={Up} />
        <Route exact path="/top/" component={Top}/>
        <Route exact path="/top/:page" component={Top}/>
         <Route path="/movie/:id" component={MoviePage}/>
        <Route component={Page404}/>
        </Switch>
      </div>
      </Router>
    );

}

export default News;
