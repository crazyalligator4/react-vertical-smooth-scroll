// dependencies
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// components
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <Router className="App">
      <Home/>
    </Router>
  );
}

export default App;
