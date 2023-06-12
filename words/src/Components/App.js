import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Quote from './Quote';
import RandomQuote from './RandomQuote';
import Submission from './Submission';
import NavBar from './NavBar';

function App() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Quote" element={<Quote />} />
      <Route path="/RandomQuote" element={<RandomQuote />} />
      <Route path="/Submission" element={<Submission />} />

      
      
    </Routes>
    </Router>
  );
};

export default App;