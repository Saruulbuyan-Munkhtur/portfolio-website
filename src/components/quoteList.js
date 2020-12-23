import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import '../scss/main.scss'
import Quote from './quote'
// import getRandom from '../utils/utils'

const QuoteList = ({tag}) => {
  const data = useStaticQuery(graphql`
    {
      allQuotesJson {
        nodes {
          quote
          author
          mySubQuote
        }
        totalCount
      }
    }
  `)

let quotes = data.allQuotesJson.nodes;
let totalCount = data.allQuotesJson.totalCount;

return (
  <div className="quotes-section">
    {/* <div>
      <Quote quotes={quotes} totalCount={totalCount}/>
    </div>
    <div>
      <Quote quotes={quotes} totalCount={totalCount}/>
    </div> */}
    <div>
      <Quote quotes={quotes} totalCount={totalCount}/>
    </div>
  </div>
  )
}

export default QuoteList;

// let quotes = getRandom(data.allQuotesJson.edges, 3)
// setInterval(function(){
//   let quotes = getRandom(data.allQuotesJson.edges, 3)
// }, 1000);