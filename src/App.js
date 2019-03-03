import React, { Component } from 'react';
import './App.css';

import RestaurantCardList from './components/restaurant-card-list/restaurant-card-list';
class App extends Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            European Restaurants
          </p>
        </header>
        <RestaurantCardList />
      </div>
    );
  }
}

export default App;
