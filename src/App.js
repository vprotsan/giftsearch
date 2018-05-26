import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    var that = this;
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=NJYstCHsYkf2qjsbP0e7aiOVDyQhtURZ`)
         .then(function(response) {
           that.setState({
             gifs: response.data.data,
             loading: false
           });
         })
         .catch(function(error){
           console.log(error);
         })
  }

  render() {

    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>
          </div>
        </div>
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
