import React, { Component } from "react";

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      willWatch: false,
    };
  }

  componentWillUnmount() {
    // console.log("unmount " + this.props.movie.title);
  }

  render() {
    const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt=""></img>
        <div className="card-body">
          <h6 className="card-title">{movie.name}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mp-0">Rating: {movie.vote_average}</p>
            {this.state.willWatch ? (
              <button type="button" className="btn btn-success" onClick={() => {
                this.setState({
                  willWatch: false,
                });
                removeMovieFromWillWatch(movie)}}>
                Remove Will watch
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                    this.setState({
                      willWatch: true,
                    });
                    addMovieToWillWatch(movie)}}
              >
                Add Will watch
              </button>
            )}
          </div>
          <button onClick={removeMovie.bind(this, movie)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default MovieItem;
