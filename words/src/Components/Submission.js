// Submission.js
import React from 'react';

function Submission({ submission }) {
  return (
    <div>
      <h3>Submission</h3>
      <p>{submission.comment}</p>
      <p>- {submission.quote.author}</p>
    </div>
  );
}

export default Submission;
