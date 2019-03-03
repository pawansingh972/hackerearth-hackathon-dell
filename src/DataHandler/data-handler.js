import restaurantsData from './euro-restaurants-sample-data';

let DataHandler = {};

DataHandler.findByName = (query) => {
    return restaurantsData.filter((restaurant) => {
        return restaurant.name.indexOf(query) !== -1;
    });
};

DataHandler.getAllData = (query) => {
    return restaurantsData;
};

export default DataHandler;