import React, { Component } from 'react';
import './App.css';

import RestaurantCardList from './components/restaurant-card-list/restaurant-card-list';

class SearchBar extends Component {
  render () {
    return (
      <form >
        <input className="srch-box" placeholder="Search by name or cuisine" 
           name="srch-box" id="srch-box" type="text" />
      </form>
    );
  }
}

class App extends Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            European Restaurants
          </p>
        </header>

        <SearchBar />
        <RestaurantCardList />
      </div>
    );
  }
}

export default App;
