// Component is just a part of the react object
import React, { Component } from "react";
class MovieDetail extends Component {
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
export default MovieDetail;
