import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../redux/actions/movies_actions';
import Movie  from '../components/movies/Movie';

class MovieInfoContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
       this.props.fetchMovie(id);
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchMovie(nextProps.match.params.id);
      
    }
  }

  render() {
    const { isLoading, hasErrored, byId } = this.props.movie;
    const { id } = this.props.match.params;
    const movie = byId[id];
    return (
     
        <Movie 
          isLoading={isLoading}
          hasErrored={hasErrored}
          movie={movie}
        />
     
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies
  };
};

export default connect(mapStateToProps, { fetchMovie })(MovieInfoContainer);
