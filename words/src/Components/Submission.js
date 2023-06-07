import React, { useState } from 'react';

const Submission = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuote(newQuote);
    setAuthor(newAuthor);
    setNewQuote('');
    setNewAuthor('');
  };

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{quote}</p>
      <p>- {author}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Quote:
          <input
            type="text"
            value={newQuote}
            onChange={(event) => setNewQuote(event.target.value)}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={newAuthor}
            onChange={(event) => setNewAuthor(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Submission;
