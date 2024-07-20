
import React from 'react';

const City = ({ name, population, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Населення: {population}</p>
      <p>{description}</p>
    </div>
  );
};

export default City;
