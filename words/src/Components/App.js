import React from 'react'
import Quote from './Quote'
import RandomQuote from './RandomQuote'
import Submission from './Submission'
export default function App() {
  return (
    <div>
      <h1>Quote</h1>
      <Quote />
      <h2>Random</h2>
      <RandomQuote />
      <Submission />
    </div>
  )
}
