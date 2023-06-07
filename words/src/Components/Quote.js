// Quote.js
import React from 'react';

function Quote({ quote }) {
  return (
    <div>
      <h3>Quote</h3>
      <p>{quote.content}</p>
      <p>- {quote.author}</p>
    </div>
  );
}

export default Quote;
