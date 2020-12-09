import React from 'react';
//import TransitionLink from 'gatsby-plugin-transition-link';

import '../scss/main.scss'

const Quote = ({quote}) => {
  return (
    // <TransitionLink
    //   to="/page-2"
    //   exit={{
    //     trigger: ({ exit, node }) => this.interestingExitAnimation(exit, node),
    //     length: 1
    //   }}
    //   entry={{
    //     delay: 0.6
    //   }}
    // >
    <div className='quote-body'>
      <blockquote>
        <div className="quote-content">
          <p className="quote-quote">{quote.quote}</p>
          <p className="quote-author"> - {quote.author}</p>
        </div>
      </blockquote>
    </div>
    // </TransitionLink>
  )
}

export default Quote;