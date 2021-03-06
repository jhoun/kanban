import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../actions/Cards';
import { loadUsers } from '../actions/Users';
import Column from './Column';
import './Board.scss';

class Board extends Component {

  componentDidMount() {
    this.props.loadCards();
    this.props.loadUsers();
  }

  filterStatus(status) {
    return this.props.cardData.filter(card => {
      return card.status === status;
    })
  }

  render() {
    return (
      <div className="board-container">
        <div className="column-container">
          <div className="column-title">IN QUEUE</div>
          <Column cardData={this.filterStatus('queue')} />
        </div>
        <div className="column-container">
          <div className="column-title">IN PROGRESS</div>
          <Column cardData={this.filterStatus('progress')} />
        </div>
        <div className="column-container">
          <div className="column-title">DONE</div>
          <Column cardData={this.filterStatus('done')} />
        </div>
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
    loadCards: () => dispatch(loadCards()),
    loadUsers: () => dispatch(loadUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

