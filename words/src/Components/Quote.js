import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('http://localhost:9292/pet'); // Replace with your quote API endpoint
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Quotes</h1>
      {quotes.map((quote, index) => (
        <div key={index}>
          <p>{quote.content}</p>
          <p>- {quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quote;
