// Component is just a part of the react object
import React, { Component } from "react";

// Poster path
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  // Fetch data from the API
  async componentDidMount() {
    const { match } = this.props;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          match.params.id
        }?api_key=82256ccb86ef4724263776404ecfb09c&language=en-US`
      );
      const movie = await res.json();

      this.setState({
        movie
      });
    } catch (e) {
      console.log("error", e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <h1>{movie.overview}</h1>
      </div>
    );
  }
}

export default MovieDetail;
