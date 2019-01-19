import icon from '../assets/icons.svg';
import React from 'react';

const ResultItem = ({ result, handleFavourites }) => {

  console.log(result.favourite);
  
  
  const parseHTML = htmlContent => {
    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(htmlContent, 'text/html').body.textContent;
    return { __html: parsedHtml };
  }

  const handleClick = () => {
    handleFavourites(result);
  }

  return(
    <div className="result__item">
      <div className="result__title">
        <button 
          className={"result__btn " + (result.favourite ? 'result__btn--green' : 'result__btn--grey')}
          onClick={handleClick}
        >
          <svg 
            className="result__star" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 50 47.86"
          >
            <use href={icon + '#star'}></use>
          </svg>
        </button>
        <h3 className="result__name">
          {result.title}
        </h3>
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