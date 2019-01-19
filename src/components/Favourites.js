import React from 'react';
import ResultItem from './ResultItem';

const Favourites = ({ favourites, handleFavourites }) => {
  const favouritesList = favourites.map(result => {
    return(
      <ResultItem 
        key={result.id}
        result={result}
        handleFavourites={handleFavourites}
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