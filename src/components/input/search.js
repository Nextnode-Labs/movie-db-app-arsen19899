import React, { Component } from 'react';
import axios from 'axios';
import { BASE_PATH, API_KEY } from '../../redux/constant';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      showResults: false
    };
    this.hideResults = this.hideResults.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }



 hideResults() {
   setTimeout(() => this.setState({ showResults: false }), 100);
 }

  searchMovies(query) {
    if (!query || query.length < 2) return;
    const url = `${BASE_PATH}search/movie?${API_KEY}&query=${query}`;
    axios
      .get(url)
      .then(response =>
        this.setState({ results: response.data.results, showResults: true })
      );
  }

  render() {
    const searchMovies = query => this.searchMovies(query)
    return (
      <div
        className=''
       onClick={this.hideResults}
      >
      <SearchBar onSearch={searchMovies} />
      {this.state.showResults ? (
          <SearchResults results={this.state.results} />
        ) : null}
      </div>
    );
  }
}

export default Search;
