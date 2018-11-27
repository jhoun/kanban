import React, { Component } from 'react';
import './Card.scss';


class Cards extends Component {

  renderCard(){
    return this.props.cardData.map((card, i) => {
      return (
        <div key={i} className="card">
          <div className="card__task">{card.task}</div>
          <div className="card__priority">{card.priority}</div>
          <div className="card__createdBy">{card.createdBy}</div>
          <div className="card__assignedTo">{card.assignedTo}</div>
        </div>
      )
    })
  }

  render(){
    return (
      <div className="card-container">
        {this.renderCard()}
      </div>
    )
  }
}

export default Cards;