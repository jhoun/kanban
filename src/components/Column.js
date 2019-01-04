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
      status={card.status}
      createdBy={card.createdBy}
      assignedTo={card.assignedTo}
    />
  });
  return (
    <div className="column">
      {renderCard}
    </div>
  )
}


export default Column;