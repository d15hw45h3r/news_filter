import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Homepage from './components/Homepage';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
