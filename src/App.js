import React, { Component } from 'react';
import Header from './components/header.js'
import Shots from './components/shots.js'
import './App.css'


class App extends Component {
  render() {
    return (
      <div id="">
        <Header />
        <Shots />
      </div>
    );
  }
}

export default App;
