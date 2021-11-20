import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTopMovies} from '../redux/action_top';
import TopList from './TopList';
import Paginator from '../components/pagination/Paginator';

class TopContainer extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchTopMovies(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      this.props.fetchTopMovies(nextProps.match.params.page);
      
      window.scroll(0, 0);
    }
  }

  render() {
    const { movie, top} = this.props;
    const { params } = this.props.match;
    const basePath = `/top/`;
    const pageId = params.page || '1';
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const { totalPages, totalResults } = top;
   console.log(movie)
    return (
      
        <div className="container">
            <TopList 
            topList={top}
            movieList={movie.byId}
            pageId={pageId}/>
      
        <Paginator
          basePath={basePath}
          prevPageId={prevPageId}
          nextPageId={nextPageId}
          totalPages={totalPages}
          totalResults={totalResults}
        />
        </div>
      
      
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies,
    top: state.top
  };
};

export default connect(mapStateToProps, { fetchTopMovies })(
  TopContainer
);
