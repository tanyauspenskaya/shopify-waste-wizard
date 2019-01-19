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
      <div className="search__container">
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
          <input 
            type="submit" 
            className="search__submit"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;