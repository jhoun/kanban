import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../actions/Cards'
// import Board from './Board.js';
import './App.scss';

class App extends Component {

  componentDidMount(){
    this.props.loadCards();
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.props.cardData.map((card, i)=> {
          return (
            <div key={i}>{card.task}</div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.cardData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => dispatch(loadCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
