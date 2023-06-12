import React, { useEffect, useState } from 'react';

function RandomQuote() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:9292/pat')
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.warn(error));
  }, []);

  function handleNextQuote() {
    setCurrentQuoteIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= quotes.length) {
       
        return 0;
      }
      return nextIndex;
    });
  }

  return (
    <div className='con'>
      {quotes.length > 0 && (
        <div key={quotes[currentQuoteIndex].id}>
          <p>{quotes[currentQuoteIndex].quoter}</p>
          <button onClick={handleNextQuote}>Next</button>
        </div>
      )}
    </div>
  );
}

export default RandomQuote;
