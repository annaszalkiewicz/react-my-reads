import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

class Search extends Component {
	render () {
		return (
			<Link to='./search' className='add-book'>
				<button className="submit">
					<i className="material-icons add-book-icon">add_circle</i>
				</button>
			</Link>

		);
	}
}

export default Search;