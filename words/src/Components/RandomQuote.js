// RandomQuote.js
import React,{useEffect}from 'react';

function RandomQuote({ quote }) {
  useEffect(()=>{
    fetch(`http://localhost:9292/pat${id}`)
  },[])
  return (
    <div>
      <h3>Random Quote</h3>
      <p>{quote.content}</p>
      <p>- {quote.author}</p>
    </div>
  );
}

export default RandomQuote;
