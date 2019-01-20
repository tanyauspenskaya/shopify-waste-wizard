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
      <div className="result__list">
        <h2 className="result__header">Favourites</h2>
        {favouritesList}
      </div>
    </section>
  );
};

export default Favourites;