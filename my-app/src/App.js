import React, { Component } from 'react';
import { getAlbum } from './utils/network';

import './App.css';

class App extends Component {
  state = {
    artists: '',
    label: '',
    name: '',
    images:[],
  };


  showAlbumInfo() {
    getAlbum().then((response) => {
      console.log(response.data);
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
