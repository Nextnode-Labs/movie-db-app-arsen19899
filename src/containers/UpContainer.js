import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUpMovies} from '../redux/actions/action_up';
import UpList from './UpList';
import Paginator from '../components/pagination/Paginator';

class UpContainer extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchUpMovies(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      this.props.fetchUpMovies(nextProps.match.params.page);
      
      window.scroll(0, 0);
    }
  }

  render() {
    const { movie, up} = this.props;
    const { params } = this.props.match;
    const basePath = `/upcom/`;
    const pageId = params.page || '1';
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const { totalPages, totalResults } = up;

    return (
      
        <div className="container">
            <UpList 
            upList={up}
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
    up: state.up
  };
};

export default connect(mapStateToProps, { fetchUpMovies })(
  UpContainer
);
