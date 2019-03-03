import React, { Component } from 'react';
import '../../App.css';

import RestaurantCard from '../restaurant-card/restaurant-card';
import SearchBar from '../search-form/search-form';
import DataHandler from '../../DataHandler/data-handler';

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
    constructor(props) {
        super(props);
        this.state = {
          restaurants: DataHandler.getAllData(),
          isSearchResults: false
        };
    }

    setRestaurantsState = (restaurants, isSearchResults) => {
        this.setState(() => ({ restaurants, isSearchResults }));
    }

    createCardsUI (data) {
        if (!data.length) {
            return(
                    <h3> No Results Found! </h3>
            )
        }
        return data.map((item, idx) => {
            return <RestaurantCard restaurantInfo={item} key={idx}/>
        });
    }

    onSubmitHandler (query, reset) {
        let filteredData;
        let isSearchResults = reset === true ? false: true;
        if (query) {
            filteredData = DataHandler.findByName(query);
        } else {
            filteredData = DataHandler.getAllData()
        }
        this.setRestaurantsState(filteredData, isSearchResults);
    }

    onSortHandler (sortOrder) {
        let sortedData = this.state.restaurants.sort((a, b) => {
            if (sortOrder === 'dsc') {
                return b.rating - a.rating
            }
            return a.rating - b.rating
        });
        this.setRestaurantsState(sortedData, this.state.isSearchResults);
    }

    render () {
        return (
            <div>
                <SearchBar onSubmit={this.onSubmitHandler.bind(this)} 
                           onSort={this.onSortHandler.bind(this)}/>
                {this.state.isSearchResults && <h4 className=""> Searach Results! </h4>}
                <div className="restaurant-card-container d-flex flex-wrap justify-content-center">
                    {this.createCardsUI(this.state.restaurants)}
                </div>
            </div>
        )
    }
}

export default RestaurantCardList;