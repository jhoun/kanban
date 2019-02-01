import React from 'react';
import Card from './Card.js';
import './Column.scss';

const Column = props => {
  const renderCard = props.cardData.map((card, i) => {
    return <Card
      key={i}
      card_id={card.card_id}
      title={card.title}
      priority={card.priority}
      priority_id={card.priority_id}
      status={card.status}
      status_id={card.status_id}
      createdBy={card.createdBy}
      createdBy_id={card.createdBy_id}
      assignedTo={card.assignedTo}
      assignedTo_id={card.assignedTo_id}
    />
  });
  return (
    <div className="column">
      {renderCard}
    </div>
  )
}


export default Column;