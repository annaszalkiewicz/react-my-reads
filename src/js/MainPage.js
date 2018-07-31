// eslint-disable-next-line 
import React, { Component } from 'react';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import BooksList from './BooksList';
// eslint-disable-next-line 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../css/App.css';

const MainPage = ({books, changeShelf}) => {

	return (
		<main>
			<Link 
				to={process.env.PUBLIC_URL + './search'}
				className='add-book'>
				<button className="submit">
					<i className="material-icons add-book-icon">add_circle</i>
				</button>
			</Link>

			<Tabs>

				<TabList className="tabs">
					<Tab className="tab-header">Currently Reading</Tab>
					<Tab className="tab-header">Want To Read</Tab>
					<Tab className="tab-header">Read</Tab>
				</TabList>
				
				<TabPanel>
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
				</TabPanel>

				<TabPanel>
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
				</TabPanel>

				<TabPanel>
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
				</TabPanel>
			</Tabs>

		</main>
	);

};

export default MainPage;