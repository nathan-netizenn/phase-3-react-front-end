// RandomQuote.js
import React from 'react';

function RandomQuote({ quote }) {
  return (
    <div>
      <h3>Random Quote</h3>
      <p>{quote.content}</p>
      <p>- {quote.author}</p>
    </div>
  );
}

export default RandomQuote;
