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
      this.setState({ data: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidUpdate = () => {
    console.log(this.state);
  }

  onSearchSubmit = (term) => {
    const searchTerm = term.toLowerCase();
    const data = this.state.data;
    const searchResults = data.filter(item => {
      return item.keywords.toLowerCase().includes(searchTerm);
    })
    .map(item => {
      return {
        title: item.title,
        description: item.body
      }
    });
    this.setState({ results: searchResults });
  }

  onSearchClear = () => {
    this.setState({ results: [] });
  }

  render(){
    return(
      <div>
        <Header />
        <SearchBar 
          onFormSubmit={this.onSearchSubmit} 
          onSearchClear={this.onSearchClear} 
        />
        <Results 
          results={this.state.results} 
        />
        <Favourites />
      </div>
    );
  }
}

export default App;