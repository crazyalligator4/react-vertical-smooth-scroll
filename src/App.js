// dependencies
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// components
import './App.css';
import Main from './components/Main/Main';

function App() {
  return (
    <Router className="App">
      <Main/>
    </Router>
  );
}

export default App;
