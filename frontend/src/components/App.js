import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Header />
        <Board />
      </div>
    );
  }

}


export default App;
