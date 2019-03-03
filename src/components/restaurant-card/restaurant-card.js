import React, { Component } from 'react';
import '../../App.css';

class RestaurantCard extends Component {
    getFormattedCuisines (cuisines) {
      return cuisines.reduce((acc, curr, idx) => {
        return idx == 0 ? curr : (acc + ", " + curr);
      }, "");
    }
  
    render () {
      const restaurantInfo = this.props.restaurantInfo;
  
      return (
        <div className="restaurant-card card text-center">
          <div className="card-body d-flex justify-content-between">
            <div className="d-flex card-left-wrapper">
              <img className="restaurant-pic" src="https://via.placeholder.com/100" alt="Card image cap"/>
              <div className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-column">
                  <h5 className="restaurant-name card-title">{restaurantInfo.name}</h5>
                  <div className="cuisine-style controlled-text">
                    <span className="" title={this.getFormattedCuisines(restaurantInfo.cuisines)}>
                      {this.getFormattedCuisines(restaurantInfo.cuisines)}
                    </span>
                  </div>
                </div>  
  
                <div className="location"> {restaurantInfo.city} </div>
              </div>    
            </div>
            <div className="card-right-wrapper">
              <span className="rating-star">&#9733;</span>
              <span> {restaurantInfo.rating} </span>
            </div>
          </div>
          <div className="card-footer text-muted reviews-count">
            {restaurantInfo.reviews} Reviews
          </div>
        </div>
      );
    }
  }

  export default RestaurantCard;