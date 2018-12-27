import React from 'react';
import Card from './Card.js';
import './Column.scss';

const Column = props => {
    const renderCard = props.cardData.map((card, i) => {
      console.log('card', card);
          return <Card
            key = {i}
            id={card.id}
            task={card.title}
            priority={card.priority}
            status={card.status}
            createdBy={card.createdBy}
            assignedTo={card.assignedTo}
          />
    });
    return (
      <div className="column">
        { renderCard }
      </div>
    )
}


export default Column;