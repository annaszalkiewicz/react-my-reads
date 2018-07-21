import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="overlay"></div>
          <div className="text-overlay">
            <h1 className="App-title">Tell me what are you reading or what would you like to read</h1>
            <h2 className="App-subtitle">My Reads App</h2>
          </div>
        </header>
        <main className="container">
          <section className="search" id="search">
            <button className="submit">Search</button>
          </section>
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