import React, { useState, useEffect } from 'react';
import Quote from './Quote';

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('http://localhost:9292/quotes');
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Random Quotes</h2>
      {quotes.length > 0 ? (
        quotes.map((quote, index) => (
          <Quote key={index} quote={quote} />
        ))
      ) : (
        <p>Loading quotes...</p>
      )}
    </div>
  );
};

export default RandomQuote;
