import React, { Component } from 'react';
import './App.css';
// import { NavBar } from './components/NavBar';
import Router from './components/Router';

// hoisting the state 

function App() {
  return(
    <div className="App">
      <center>
        <h1>French Scholar</h1>
        {/* <NavBar/> */}
        <Router/>
      </center>
    </div>
  );

}

export default App;
