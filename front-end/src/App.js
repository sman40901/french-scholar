import React, { Component } from 'react';
import './App.css';
// import { NavBar } from './components/NavBar';
import Router from './components/Router';

// hoisting the state 

const MainTitle = "French Scholar";

// const logo = require();

function App() {
  return (
    <div className="App">
      <center>
        {/* <img src='./logo.svg' alt='logo'/> */}
        <img src='./resources/logo/logo6.png' alt="logo" />
        {/* <h1>{MainTitle}</h1> */}
        {/* <NavBar/> */}
        <Router />
      </center>
    </div>
  );

}

export default App;
