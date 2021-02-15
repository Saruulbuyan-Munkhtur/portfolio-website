import React from "react"
import {graphql, StaticQuery } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import '../scss/main.scss'

const QuoteList = () => (
  <StaticQuery
    query={graphql`
      query{
        strapiHomepage {
          quotes {
            id
            quote
            quoteAuthor
            quoteMysubquote
          }
        }
      }
    `}
    render={(data) => (
        <div className="quotes-section">
          <Carousel
            showStatus={false}
            className="quote-carousel"
          >
            {data.strapiHomepage.quotes.map(quote => (
              <div className='quote-body' key={quote.id}>
                <div className="quote-content quote-effect">
                  <p className="quote-quote quote-effect__heading">{quote.quote}</p>
                  <p className="quote-author quote-effect__subheading"> - {quote.author}</p>
                </div>
              </div>              
            ))}
          </Carousel>
        </div>
      )
    }
  />

)

export default QuoteList;

// let quotes = getRandom(data.allQuotesJson.edges, 3)
// setInterval(function(){
//   let quotes = getRandom(data.allQuotesJson.edges, 3)
// }, 1000);
