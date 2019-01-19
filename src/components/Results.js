import React from 'react';
import ResultItem from './ResultItem';

const Results = ({ results, handleFavourites }) => {
  const resultsList = results.map(result => {
    return(
      <ResultItem 
        key={result.id}
        result={result}
        handleFavourites={handleFavourites}
      />
    );
  });

  return(
    <section className="result__section">
      <div className="result__list">
        {resultsList}
      </div>
    </section>
  );
};

export default Results;