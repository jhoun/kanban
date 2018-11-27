import React, { Component } from 'react';
import Card from './Card.js';
import './Column.scss';

class Column extends Component {

  render() {
    return (
      <div className="column">
        <Card cardData={this.props.cardData} />
      </div>
    );
  }

}


export default Column;