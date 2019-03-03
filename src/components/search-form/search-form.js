import React, { Component } from 'react';
import '../../App.css';

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        };
    }

    setInputValueState = (inputValue) => {
        this.setState(() => ({inputValue}));
    }

    handleOnChange = (event) => {
        event.persist();
        this.setInputValueState(event.target.value);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (!this.state.inputValue) {return;}
        this.props.onSubmit(this.state.inputValue);
    }
    
    resetSearch = (event) => {
        this.setInputValueState('');
        this.props.onSubmit('', true);
    }

    triggerSearch = (event) => {
        this.props.onSubmit(this.state.inputValue);
    }

    sortByHandler = (event) => {
        let sortOrder = 'asc';
        if (event.target.checked) {
            sortOrder = 'dsc';
        }
        this.props.onSort(sortOrder);
    }
    render () {
        return (
            <form className="srch-box-form" onSubmit={this.handleOnSubmit}>
                <input className="srch-box" placeholder="Search by name" 
                                name="srch-box" id="srch-box" type="text" 
                                value={this.state.inputValue}
                                onChange={this.handleOnChange} />
                <button className="btn btn-primary search-btn"
                        onClick={this.triggerSearch}> Search </button>
                <button className="btn btn-secondary reset-btn"
                            onClick={this.resetSearch}> Reset </button>

                <div className="d-flex justify-content-center">
                    <label name="sort-by-rating">Sort By Rating</label>
                    <input className="sort-by-chkbx" 
                           type="checkbox" aria-label="sort-by-rating" 
                           onChange={this.sortByHandler}/>
                </div>
            </form>
        );
    }
}

export default SearchBar;