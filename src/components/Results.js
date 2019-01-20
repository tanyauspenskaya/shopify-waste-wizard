import icon from '../assets/icons.svg';
import React from 'react';
import ResultItem from './ResultItem';

const Results = ({ results, handleFavourites, errMsg }) => {
  const resultsList = results.map(result => {
    return(
      <ResultItem 
        key={result.id}
        result={result}
        handleFavourites={handleFavourites}
      />
    );
  });

  const renderErrorMessage = msg => {
    if (msg.length) {
      return(
        <div className="result__error">
          <svg className="result__walle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <use href={icon + '#wall-e'}></use>
          </svg>
          <p>{msg}</p>
        </div>
      );
    }
    return '';
  }

  return(
    <section className="result__section">
      <div className="result__list">
        {resultsList}
        {renderErrorMessage(errMsg)}
      </div>
    </section>
  );
};

export default Results;