import React from 'react';


const Card = ({cat}) => {
  
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt="cats" src={`https://robohash.org/${cat.id}?set=set4`} />

      <div>
        <h2>{cat.name}</h2>
        <p>{cat.email}</p>
      </div>
    </div>
  );
};

export default Card;
