// quotes.js

const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    // Additional quotes...
  ];
  
  module.exports = quotes;
  // Import the quotes array from quotes.js
const quotes = require('./quotes.js');

// Iterate over the quotes array and print each quote
quotes.forEach(quote => {
  console.log(quote);
});
