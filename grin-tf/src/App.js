import React, { Component } from 'react';
import Home from '../src/Components/Home/Home';
import FilteredCards from '../src/Components/Home/FilteredCards'
import './App.css';

class App extends Component {
  render() {
    return (
      <FilteredCards />      
    );
  }
}

export default App;
