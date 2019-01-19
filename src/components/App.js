import '../stylesheets/main.scss';
import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Favourites from './Favourites';
import wasteData from '../apis/wasteWizard';

class App extends Component {
  state = {
    data: [],
    results: [],
    favourites: []
  };

  componentDidMount = () => {
    wasteData()
    .then(res => {
      const newRes = res.data.map((item, index) => {
        item.index = index;
        item.favourite = false;
        return item;
      });
      this.setState({ data: newRes });
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidUpdate = () => {
    //console.log(this.state);
  }

  onSearchSubmit = (term) => {
    const searchTerm = term.toLowerCase();
    const data = this.state.data;
    const searchResults = data.filter(item => {
      return item.keywords.toLowerCase().includes(searchTerm);
    })
    .map(item => {
      return {
        id: item.index,
        title: item.title,
        description: item.body,
        favourite: item.favourite
      }
    });
    this.setState({ results: searchResults });
  }

  onSearchClear = () => {
    this.setState({ results: [] });
  }

  handleFavourites = (item) => {
    item.favourite = !item.favourite;

    if (item.favourite) {
      // add to favourites
      const favsUpdated = [...this.state.favourites, item];
      this.setState({ favourites: favsUpdated });
    } else {
      // remove from favourites
      const favsUpdated = this.state.favourites.filter(fav => fav.id !== item.id);
      this.setState({ favourites: favsUpdated });
    }
    // update results
    const index = this.state.results.findIndex(el => el.id === item.id);
    const newResults = this.state.results;
    newResults[index] = item;
    this.setState({ results: newResults });
  }

  render(){
    return(
      <div className="app">
        <Header />
        <SearchBar 
          onFormSubmit={this.onSearchSubmit} 
          onSearchClear={this.onSearchClear} 
        />
        <Results 
          results={this.state.results} 
          handleFavourites={this.handleFavourites}
        />
        <Favourites
          favourites={this.state.favourites}
          handleFavourites={this.handleFavourites}
        />
      </div>
    );
  }
}

export default App;