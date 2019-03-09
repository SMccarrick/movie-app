import React from 'react';
import PropTypes from 'prop-types';

// Poster path
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

/*
	Functional Stateless Component

  - Used destructoring to pass through the props for movie
  - Instead of a class I have just used a function.
  - Always remember to export the function
  - Dynamically used the movie title for the alt
  - Combined the poster path to a string
  */
const Movie = ({ movie }) => (
	<div>
		<img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
	</div>
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
