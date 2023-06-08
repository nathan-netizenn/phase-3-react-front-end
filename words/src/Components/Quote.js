import React, { useEffect, useState } from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState('');

  useEffect(() => {
    fetch("http://localhost:9292/pat")
      .then(res => res.json())
      .then(data => setQuotes(data))
      .catch(error => console.error(error));
  }, []);

  function addQuote() {
    const quoteData = {
      quoter: newQuote,
      author: 'Anonymous' // Set a default author value or modify it as needed
    };

    fetch("http://localhost:9292/pat", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quoteData)
    })
      .then(res => res.json())
      .then(data => {
        setQuotes(prevQuotes => [...prevQuotes, data]);
        setNewQuote(''); // Clear the input field after adding the quote
      });
  }

  return (
    <div className='box'>
      <input
        type="text"
        value={newQuote}
        onChange={e => setNewQuote(e.target.value)}
        placeholder="Enter your quote"
      />
      <button onClick={addQuote}>Add Quote</button>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <p>{quote.quoter}</p>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Quote;
