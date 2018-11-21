import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAllCards } from '../actions/cards'
// import Board from './Board.js';
import './App.scss';
import data from './dummyData.json'

class App extends Component {

  componentDidMount(){
    const { onAddCard } = this.props;
    onAddCard(data);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h1>hello</h1>
        {this.props.cards.map((card, i)=> {
          return (
            <div>{i}</div>,
            <div>{card.task}</div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: (x) => dispatch(showAllCards(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
