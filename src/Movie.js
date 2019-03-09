import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
	<div>
		<h3>{movie.title}</h3>
	</div>
);

export default Movie;

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired
};
/*

        Rules for props types & default props:-

        - A prop type for every single prop
        - is required or default prop is a must. you will be alerted everytime this happens. components will be bullet proof.


    */

/*
		Funtional stateless components

		You should be using these everytime you are not using lifecycle methods, refs and state.

		When passing props through a functional component you will need to pass through props as this won't work because its literally just some basic jsx rather than a fully scaled class.


	*/

// Static is something that does not change.
// declare prop types shape allows you to look for values in objects.
// Functional way of using prop types
/*	Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	})
}; */

// Class way of using prop types
/*	static propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	})
}; */
