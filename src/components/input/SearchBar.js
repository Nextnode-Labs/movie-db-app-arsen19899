import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({ term: this.search.value }, () =>
      this.props.onSearch(this.search.value)
    );
  }


  render() {
    return (
     <div  className='form-control w-100'>
        <input
          className='form-control'
          type="text"
          placeholder="Search movie..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
     </div>
    );
  }
}
export default SearchBar;
