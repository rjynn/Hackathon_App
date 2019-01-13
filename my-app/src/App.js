import React, { Component } from 'react';
import { getAlbum } from './utils/network';

import './App.css';

class App extends Component {

  showAlbumInfo() {
    getAlbum().then((response) => {
      console.log(response.data);
      //do something here
    });
  }

  componentDidMount() {
    this.showAlbumInfo();
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
