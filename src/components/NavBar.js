import React from 'react';

// import './Greetings'
import {PageNotFound} from '../pages/PageNotFound';
import {HomePage} from '../pages/HomePage'; // after using named export we need to use {}
import {PeopleListPage} from '../pages/PeopleListPage';

import {CounterButtonPage} from '../pages/CounterButtonPage';
//import {CongratulationsMessage} from './PeopleListPage'
// import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import {PeopleListItem} from './PeopleListItem'

// hoisting the state 




function NavBar() {
  return(
    <div className="NavBar">
      <header className='NavBar-header'>
        <BrowserRouter>
          {/* <Route path="/">
            <HomePage/>
          </Route> */}
          <Switch>
          <Route path="/counter">
            <CounterButtonPage/>
          </Route>
          <Route path="/peopleList">
            <PeopleListPage/>
          </Route>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
  
}
export default NavBar;