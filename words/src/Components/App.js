import React from 'react'
import Quote from './Quote'
import RandomQuote from './RandomQuote'
import Submission from './Submission'
export default function App() {
  return (
    <div>
      <h1>WORDS OF WISDOM</h1>
      <h2>Quote</h2>
      <Quote />
      
      <RandomQuote />
      <Submission />
    </div>
  )
}
