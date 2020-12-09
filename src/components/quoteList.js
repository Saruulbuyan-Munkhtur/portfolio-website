import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import '../scss/main.scss'
import Quote from './quote' 
import getRandom from '../utils/utils'

const QuoteList = ({tag}) => {
  const data = useStaticQuery(graphql`
    {
      allQuotesJson {
        edges {
          node {
            author
            quote
          }
        }
      }
    } 
  `)
  let quotes = getRandom(data.allQuotesJson.edges, 3)
  setInterval(function(){
    let quotes = getRandom(data.allQuotesJson.edges, 3)
  }, 1000);


  return (
    <div className="quotes-section">
      <div className="quoteList-header">
        <h3>Quotes that mean something to me.</h3>
      </div>
      <div className="quoteList-body">
        {quotes.map((quote) => {
          return (
            <Quote quote={quote.node}/>
          )
        })}
      </div>
    </div>
  )
}

export default QuoteList;
