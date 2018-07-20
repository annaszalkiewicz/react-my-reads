import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tell me what are you reading or what would you like to read</h1>
          <h2 className="App-subtitle">My Reads App</h2>
        </header>
        <main className="container">
        </main>
        <footer className="footer">
          <p className="copyright">Written and coded by <a href="https://mywebgraphicdesign.com">Anna Szalkiewicz</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;