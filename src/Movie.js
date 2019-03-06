import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
	/*

        Rules for props types & default props:-

        - A prop type for every single prop
        - is required or default prop is a must. you will be alerted everytime this happens. components will be bullet proof.


    */

	// Static is something that does not change.
	// declare prop types shape allows you to look for values in objects.
	static propTypes = {
		movie: PropTypes.shape({
			title: PropTypes.string.isRequired
		})
	};

	render() {
		return (
			<div>
				<h3>{this.props.movie.title}</h3>
			</div>
		);
	}
}
