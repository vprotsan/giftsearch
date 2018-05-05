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
     var that = this;
     axios.get("http://api.giphy.com/v1/gifs/trending?api_key=NJYstCHsYkf2qjsbP0e7aiOVDyQhtURZ")
          .then(function(response) {
            that.setState({
              gifs: response.data.data
            });
          })
          .catch(function(error){
            console.log(error);
          })
  }

  render() {
    console.log("curr state in reder: " + this.state.gifs);

    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
