// eslint-disable-next-line 
import React, { Component } from 'react';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import BooksList from './BooksList';

import '../css/App.css';

const MainPage = ({books, changeShelf}) => {

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
					{books.filter(book => book.shelf === 'currentlyReading').map((book) => (
						<li key={book.id} className="book-item">
							<BooksList
								book={book}
								changeShelf={changeShelf}
								currentShelf="currentlyReading"
							/>
						</li>
					))}
				</ul>
			</section>

			<section id="want-to-read" className="shelf">
				<h2 className="shelf-heading">Want To Read</h2>
				<ul className="books-list">
					{books.filter(book => book.shelf === 'wantToRead').map((book) => (
						<li key={book.id} className="book-item">
							<BooksList
								book={book}
								changeShelf={changeShelf}
								currentShelf="wantToRead"
							/>
						</li>
					))}
				</ul>
			</section>

			<section id="read" className="shelf">
				<h2 className="shelf-heading">Read</h2>
				<ul className="books-list">
					{books.filter(book => book.shelf === 'read').map((book) => (
						<li key={book.id} className="book-item">
							<BooksList
								book={book}
								changeShelf={changeShelf}
								currentShelf="read"
							/>
						</li>
					))}
				</ul>
			</section>

		</main>
	);

};

export default MainPage;