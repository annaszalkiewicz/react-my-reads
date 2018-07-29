import React, { Component } from 'react';
import '../css/App.css';
import '../img/more-icon.svg';


class Shelf extends Component {

	render() {
		const { book, changeShelf } = this.props;

		return (
			<div className="shelf-changer">
				<select value={book.shelf} onChange={(event) => changeShelf(book, event.target.value)}>
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