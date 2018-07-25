import React, { Component } from 'react';
import Search from '../js/Search';
import { getAll } from '../utils/BooksAPI';

import '../css/App.css';

class MainPage extends Component {
	state = {
		query: ''
	}
	componentDidMount(query) {

		getAll(query).then((books) => {
			this.setState({ books });
		});
	}
	render() {

		return (
			<main>
				< Search />
			</main>
		);
	}
}

export default MainPage;