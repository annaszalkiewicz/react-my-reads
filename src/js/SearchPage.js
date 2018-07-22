import React, { Component } from 'react';
import '../css/App.css';

class SearchPage extends Component {
  render() {
    return (
      <form>
        <input type="search" name="search-input" id="search"/>
      </form>

    );
  }

}

export default SearchPage;