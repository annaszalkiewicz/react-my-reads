import React, { Component } from 'react';
import '../css/App.css';
import '../img/more-icon.svg';
import BooksList from './BooksList';


class Shelf extends Component {

	state = {
		value: []
	}

	render() {
		let changeShelf = this.props;
		let currentBook = this.props;
		return (
			<div className="shelf-changer">
				<select value={currentBook.value} onChange={(event) => {this.changeShelf(event.target.value)}}>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}

export default Shelf;