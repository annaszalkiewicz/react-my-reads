// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
// eslint-disable-next-line
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'));
registerServiceWorker();
