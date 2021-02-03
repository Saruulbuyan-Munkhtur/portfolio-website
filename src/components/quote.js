import React, { Component } from 'react';
//import TransitionLink from 'gatsby-plugin-transition-link';

import '../scss/main.scss'

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0
    }
    this.handleQuoteIndex = this.handleQuoteIndex.bind(this);
  }

  handleQuoteIndex = () => {
    // console.log("THIS IS WHAT YOU GET")
    this.setState(quoteIndex => ({ quoteIndex: Math.floor(Math.random() * Math.floor(this.props.totalCount))}))
  }

  render() {
    return (
      <div className='quote-body'>
        <div className="quote-content quote-effect">
          <p className="quote-quote quote-effect__heading">{this.props.quotes[this.state.quoteIndex].quote}</p>
          <p className="quote-author quote-effect__subheading"> - {this.props.quotes[this.state.quoteIndex].author}</p>
        </div>
      </div>
    )
  }
}

export default Quote;