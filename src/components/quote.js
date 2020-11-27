import React from 'react';

import '../scss/main.scss'

const Quote = ({quote}) => {
  return (
    <div className='quote-body'>
      <blockquote>
        <div className="quote-content">
          <p>{quote.quote}</p>
          <p> - {quote.author}</p>
        </div>
      </blockquote>
    </div>
  )
}

export default Quote;