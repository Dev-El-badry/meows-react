import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {
  return (
    <div>
      {
        cats.map(cat => {
          return <Card 
            key={cat.id}
            cat={cat}
          />
        })
      }
    </div>
  );
};

export default CardList;