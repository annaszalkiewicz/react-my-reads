import React from 'react';

function Header(props) {
	return (
		<header className="App-header">
			<div className="overlay"></div>
			<div className="text-overlay">
				<h1 className="App-title">Tell me what are you reading or what would you like to read</h1>
				<h2 className="App-subtitle">My Reads App</h2>
			</div>
		</header>
	);
}
export default Header;