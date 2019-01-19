import React from 'react';
import ResultItem from './ResultItem';

const Results = ({ results }) => {
  const resultsList = results.map(result => {
    return(
      <ResultItem 
        key={result.title}
        result={result}
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