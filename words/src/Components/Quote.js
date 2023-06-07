import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:9292/pet'); // Replace with your quote API endpoint
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{quote}</p>
      <p>- {author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default Quote;
