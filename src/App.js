
import React from 'react';
import City from './city';

const App = () => {
  const cities = [
    {
      name: 'Київ',
      population: '2,800,000',
      description: 'Столиця України, розташована на берегах річки Дніпро.'
    },
    {
      name: 'Львів',
      population: '720,000',
      description: 'Місто на заході України, відоме своєю архітектурою та культурою.'
    },
    {
      name: 'Одеса',
      population: '1,000,000',
      description: 'Портове місто на узбережжі Чорного моря, відоме своїми пляжами та гумором.'
    }
  ];

  return (
    <div>
      <h1>Міста України</h1>
      {cities.map((city, index) => (
        <City key={index} name={city.name} population={city.population} description={city.description} />
      ))}
    </div>
  );
};

export default App;
