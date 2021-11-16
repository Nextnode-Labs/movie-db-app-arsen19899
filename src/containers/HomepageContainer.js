import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverMovies } from '../redux/discover_actions';
import DiscoverList from './HomepageList';
import Paginator from '../components/pagination/Paginator';

class DiscoverContainer extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchDiscoverMovies(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      this.props.fetchDiscoverMovies(nextProps.match.params.page);
      
      window.scroll(0, 0);
    }
  }

  render() {
    const { movie, discover } = this.props;
    const { params } = this.props.match;
    const basePath = `/home/`;
    const pageId = params.page || '1';
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const { totalPages, totalResults } = discover;
    console.log(movie)
    return (
      
        <div className="container">
        <DiscoverList
          discoverList={discover}
          movieList={movie.byId}
          pageId={pageId}
        />
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
    discover: state.discover
  };
};

export default connect(mapStateToProps, { fetchDiscoverMovies })(
  DiscoverContainer
);
