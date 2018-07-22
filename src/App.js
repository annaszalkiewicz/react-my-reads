import React, { Component } from 'react';
import Header from './js/Header';
import Search from './js/Search';
import Footer from './js/Footer';
import './css/App.css';
// import BooksList from './js/bookList.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Search/>
				
				<main className="container"></main>
				<Footer/>
			</div>
		);
	}
}

export default App;