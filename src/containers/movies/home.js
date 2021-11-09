import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovePost from '../../components/movies/movs';
import Input from '../../components/input/search';
import Pagination from '../../components/pagination/pagin';


const BASE_PATH = 'https://api.themoviedb.org/3/';
const POPUL ='movie/popular?';
const SEARCH_PATH = 'search/movie?';
const SEARCH_PARAM = 'query=';
const API_KEY='api_key=b9f7a0ee130480f6cd231acd274b0daa';
const PAGE_PARAM = 'page=';



class Home extends Component {

  state = {
    searchQuery: '',
    result: {},
    page: 1,
  }

  componentDidMount() {
    const { searchQuery, page } = this.state;
    this.fetchData(searchQuery, page);
  }
  componentDidUpdate() { window.scrollTo(0, 0) }

  fetchData = (searchQuery, page) => {
    fetch(`${BASE_PATH}${POPUL}${API_KEY}&${PAGE_PARAM}${page}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error);
  }

  searchData = (searchQuery, page) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}${API_KEY}&${SEARCH_PARAM}${searchQuery}&${PAGE_PARAM}${page}`)
    .then(res => res.json())
    .then(result => this.setNews(result))
    .catch(error => error);
}

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value
    })
  }

  getSearch = ({ key }) => {
    if(key === 'Enter') {
      const { searchQuery} = this.state;
      this.setState({
        page: 1,
      })
      this.searchData(searchQuery,  1);
    }
  }

  setNews = result => {
    this.setState({ result });
  }



  handlePageChange = ({ target }) => {
    const btnType = target.getAttribute('data-name');
    let { page } = this.state;

    if(!isNaN(btnType)) {
      this.updatePage(+btnType);
    } else {
      switch (btnType) {
        case 'next':
          this.updatePage(page + 1);
          break;
        case 'prev':
          this.updatePage(page - 1);
          break;
        default: null;
      }
    }
  }

  updatePage = (number) => {
     
    const {searchQuery} = this.state;
    this.setState({
      page: number,
    }, () => {
     console.log(searchQuery)
    if(!isNaN(searchQuery)){
    this.fetchData(searchQuery, number);
    } else{
        this.searchData(searchQuery, number);
    }

    })
  }

  render() {
    const { searchQuery, result } = this.state;
    const {page, results = [], total_pages } = result;

    return (

      <div className="container">
     <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery}></Input>

        
        <div className="row">
          {results.map(({ overview, release_date, poster_path, id, title, vote_average}) =>
            <MovePost
              key={id}
              overview={overview}
              release_date={release_date}
              poster_path={poster_path}
              id={id}
              title={title}
              vote_average={vote_average}
              
            />
          )}
        </div>

        {total_pages>3 ?(
        <Pagination
          onClick={this.handlePageChange}
          page={page}
          lastPage={total_pages}
        />):(<div></div>)}
      </div>


    );
  }
}

export default Home;
