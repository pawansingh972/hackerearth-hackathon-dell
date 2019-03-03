import React, { Component } from 'react';
import '../../App.css';

import RestaurantCard from '../restaurant-card/restaurant-card';

var sampleData = [
    {
      name: "Martine of Martine's Table",
      cuisines:	['French', 'Dutch', 'European'],
      ranking: 1,
      rating:	5,
      reviews: 136,
      city: "Amsterdam"
    },
    {
      name: "La Rive",
      cuisines:	['Mediterranean', 'French', 'International', 'European', 'Vegetarian Friendly', 'Vegan Options'],
      ranking: 3,
      rating:	4.5,
      reviews: 567,
      city: "Amsterdam"
    },
    {
      name: "Vinkeles",
      cuisines:	['French', 'European', 'International', 'Contemporary', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options'],
      ranking: 4,
      rating:	5,
      reviews: 564,
      city: "Amsterdam"
    },
    {
      name: "Librije's Zusje Amsterdam",
      cuisines:	['Dutch', 'European', 'International', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options'],
      ranking: 5,
      rating:	4.5,
      reviews: 316,
      city: "Amsterdam"
    },
    {
      name: "De Silveren Spiegel	Amsterdam",
      cuisines:	['Dutch', 'European', 'Vegetarian Friendly', 'Gluten Free Options'],
      ranking: 2,
      rating:	4.5,
      reviews: 812
    }
  ];

class RestaurantCardList extends Component {
    createCardsUI (data) {
        return data.map((item, idx) => {
        return <RestaurantCard restaurantInfo={item} key={idx}/>
        });
    }
    render () {
        return (
        <div className="restaurant-card-container d-flex flex-wrap justify-content-center">
            {this.createCardsUI(sampleData)}
        </div>
        )
    }
}

export default RestaurantCardList;