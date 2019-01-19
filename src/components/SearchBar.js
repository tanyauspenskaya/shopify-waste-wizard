import icon from '../assets/icons.svg';
import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    if (!e.target.value.length) {
      this.props.onSearchClear();
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return(
      <section className="search__section">
        <form 
          className="search__form"
          onSubmit={this.onFormSubmit}
        >
          <input
            type="text" 
            value={this.state.term}
            onChange={this.onInputChange} 
            className="search__input"
          />
          <button 
            type="submit" 
            className="search__submit"
          >
            <svg 
              className="search__magnifier" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 50 50"
            >
              <use href={icon + '#search'}></use>
            </svg>
          </button>
        </form>
      </section>
    );
  }
}

export default SearchBar;