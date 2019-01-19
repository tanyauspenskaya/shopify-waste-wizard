import React from 'react';
import ResultItem from './ResultItem';

const Favourites = ({ favourites }) => {
  const favouritesList = favourites.map(result => {
    return(
      <ResultItem 
        key={result.title}
        result={result}
      />
    );
  });

  return(
    <section className="result__section result__section--favourite">
      <h2 className="result__header">Favourites</h2>
      <div className="result__list">
        {favouritesList}
      </div>
    </section>
  );
};

export default Favourites;