// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/App.css';
import '../img/more-icon.svg';

const Shelf = ({changeShelf, currentShelf, book}) => {

	return (
		<div className="shelf-changer">
			<select value={currentShelf} onChange={(event) => changeShelf(book, event.target.value)}>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);

};

Shelf.propTypes = {
	book: PropTypes.object.isRequired,
	changeShelf: PropTypes.func.isRequired,
	currentShelf: PropTypes.string.isRequired
};

export default Shelf;