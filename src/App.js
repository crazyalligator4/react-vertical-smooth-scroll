// dependencies
import React from 'react';
// components
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Navbar/>
    </Router>
  );
}

export default App;
