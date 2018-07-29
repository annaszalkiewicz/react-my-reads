import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './BooksList';

import '../css/App.css';

class MainPage extends Component {

	render() {

		const { books, changeShelf } = this.props;

		return (
			<main>
				<Link to='./search' className='add-book'>
					<button className="submit">
						<i className="material-icons add-book-icon">add_circle</i>
					</button>
				</Link>

				<section id="currently-reading" className="shelf">
					<h2 className="shelf-heading">Currently Reading</h2>
					<ul className="books-list">
						{books.map((book) => (
							<li key={book.id} className="book-item">

								{book.shelf === 'currentlyReading' && (
									<BooksList
										book={book}
										changeShelf={changeShelf}
									/>
								)}

							</li>
						))}
					</ul>
				</section>

				<section id="want-to-read" className="shelf">
					<h2 className="shelf-heading">Want To Read</h2>
					<ul className="books-list">
						{books.map((book) => (
							<li key={book.id} className="book-item">
								{book.shelf === 'wantToRead' && (
									<BooksList
										book={book}
										changeShelf={changeShelf}
									/>
								)}
							</li>
						))}
					</ul>
				</section>

				<section id="read" className="shelf">
					<h2 className="shelf-heading">Read</h2>
					<ul className="books-list">
						{books.map((book) => (
							<li key={book.id} className="book-item">
								{book.shelf === 'read' && (
									<BooksList
										book={book}
										changeShelf={changeShelf}
									/>
								)}
							</li>
						))}
					</ul>
				</section>

			</main>
		);
	}
}

export default MainPage;