import starIcon from '../assets/icon-favourite.svg';
import React from 'react';

const ResultItem = ({ result }) => {
  
  const parseHTML = htmlContent => {
    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(htmlContent, 'text/html').body.textContent;
    return { __html: parsedHtml };
  }

  return(
    <div className="result__item">
      <div className="result__title">
        <button className="result__btn">
          <svg 
            className="result__star" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 50 47.86"
          >
            <use href={starIcon + '#star'}></use>
          </svg>
        </button>
        <h2 className="result__header">
          {result.title}
        </h2>
      </div>
      <div 
        className="result__description" 
        dangerouslySetInnerHTML={parseHTML(result.description)}
      >
      </div>
    </div>
  );
};

export default ResultItem;