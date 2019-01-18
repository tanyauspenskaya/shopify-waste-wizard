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

  onSearchSubmit = async (term) => {
    //const responseData = await wasteWizard.get('');
    //console.log(responseData.data);
    console.log(this.state.data);

  }

  render(){
    return(
      <div>
        <Header />
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <Results results={this.state.results} />
        <Favourites />
      </div>
    );
  }
}

export default App;