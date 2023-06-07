import React, { useState } from 'react';

const Submission = () => {
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = {
      text: quoteText,
      author: quoteAuthor
    };
    // Perform necessary actions with the quote data, such as saving or displaying it
    console.log(quote);
    setQuoteText('');
    setQuoteAuthor('');
  };

  return (
    <div>
      <h2>Submit a Quote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Quote:
          <textarea
            value={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={quoteAuthor}
            onChange={(e) => setQuoteAuthor(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Quote</button>
      </form>
    </div>
  );
};

export default Submission;
