import React, { useState, useEffect } from 'react';
import Quote from './Quote';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:9292/pat');
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Random Quote</h2>
      {quote ? (
        <Quote quote={quote} />
      ) : (
        <p>Loading quote...</p>
      )}
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

export default RandomQuote;
