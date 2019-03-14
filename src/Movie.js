import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Poster path
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

/*
	link

	- We wrapped the image with a link tag
	- Dynamically created the Link path using the id from movie

  */
const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </Link>
);

export default Movie;

/*
	Functional Prop Types

  - isRequired is added after the move prop types

*/
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
