// dependencies
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// components
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router className="App">
      <Sidebar/>
      <Navbar/>
    </Router>
  );
}

export default App;
