import React, { Component } from 'react';
import axios from 'axios';
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
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b9f7a0ee130480f6cd231acd274b0daa&query=${query}`;
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
        className='ms-5 me-5'
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
