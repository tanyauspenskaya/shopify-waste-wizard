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
    <div className="result__list">
      {resultsList}
    </div>
  );
};

export default Results;