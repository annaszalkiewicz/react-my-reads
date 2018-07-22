import React, { Component } from 'react';
import Header from './js/Header';
import { Link } from 'react-router-dom';
import './css/App.css';
// import BooksList from './js/bookList.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				
				<main className="container">
					<section className="search" id="search">
						<button className="submit">
							<i  className="material-icons">add_circle</i>
						</button>
					</section>
				</main>
				<footer className="footer">
					<p className="copyright">Written and coded by <Link to="https://mywebgraphicdesign.com">
					Anna Szalkiewicz</Link>
					</p>
				</footer>
			</div>
		);
	}
}

export default App;