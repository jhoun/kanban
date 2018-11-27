import React, { Component } from 'react';
import Board from './Board'
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <h1>Header</h1>
        <Board />
      </div>
    );
  }

}


export default App;
