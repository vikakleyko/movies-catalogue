import React from "react";
import MovieItem from "./MovieItem";
import {API_URL as url, API_KEY_3 as key} from '../Api.js'
import MovieTabs from "./MovieTabs";
import Pagination from "./Pagination";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      willWatch: [],
      sort_by: 'popularity.desc',
      page: 1,
    };
  }

  componentDidMount() {
    // console.log("app did mount");
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
      // console.log("app update");
      // console.log("prev ", prevProps, prevState);
      // console.log("prev ", this.props, this.state);
      if(prevState.sort_by !== this.state.sort_by){
        this.getMovies();
      }
      if(prevState.page !== this.state.page) {
        this.getMovies();
      }
  }

  getMovies = () => {
    fetch(`${url}/discover/movie?api_key=${key}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
    .then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({
        movies: data.results.filter( item => item !== null),
      })
    })
  }

  addMovieToWillWatch = (movie) => {
    // console.log(movie)
    const list = [...this.state.willWatch, movie ];
      this.setState({
        willWatch: list,
      })
  }

  removeMovieFromWillWatch = (movie) => {
    const list = this.state.willWatch.filter( p => p.id !== movie.id);
    this.setState({
      willWatch: list,
    })
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
    });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value,
    })
  }

  updatePage = p => {
      this.setState({
        page: p
      })
  }

  render() {
    // console.log("app render");
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                  <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} updatePage={this.updatePage}/>
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                    movie={movie}
                    removeMovie={this.removeMovie}
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                  />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.willWatch.length}</p>
          </div>
          <Pagination page={this.state.page} updatePage={this.updatePage}/>
        </div>
      </div>
    );
  }
}

export default App;
