import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //used to route navMenu components

import NavMenu from './components/NavMenu';
import Home from './pages/Home'
// Import Search results page
// Import Login page
// Import About Us page
// Import Contact page

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      // update class div to Chakra header class
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
