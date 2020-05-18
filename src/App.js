import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero';
import Bio from './components/Bio';
import { FullContainer } from './styles/layouts';

export const App = () => (
  <>
    <FullContainer background={'dark'} >
      <Hero />
    </FullContainer>

    <FullContainer background={'light'}>
      <Bio />
    </FullContainer>

    <FullContainer>
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
    </FullContainer>
  </>
);

export default App;
