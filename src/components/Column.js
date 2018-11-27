import React from 'react';
import Card from './Card.js';
import './Column.scss';

const Column = props => {
    return (
      <div className="column">
        <Card cardData={props.cardData} />
      </div>
    );
}


export default Column;