import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../actions/Cards';
import Column from './Column';
import './Board.scss';

class Board extends Component {
  constructor() {
    super()

    this.filterStatus = this.filterStatus.bind(this);
  }

  componentDidMount() {
    this.props.loadCards();
  }

  filterStatus(status) {
    return this.props.cardData.filter(card => {
      return card.status === status ;
    })
  }

  render() {
    return (
      <div>
        <Column cardData={ this.filterStatus('queue') } />
        <Column cardData={ this.filterStatus('progress') } />
        <Column cardData={ this.filterStatus('done') } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);

