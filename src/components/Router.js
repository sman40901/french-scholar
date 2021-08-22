import React from 'react';

// import './Greetings'
import { PageNotFound } from '../pages/PageNotFound';
import { HomePage } from '../pages/HomePage'; // after using named export we need to use {}
import { PeopleListPage } from '../pages/PeopleListPage';

import { CounterButtonPage } from '../pages/CounterButtonPage';
//import {CongratulationsMessage} from './PeopleListPage'
// import {useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
// import { Link } from 'react-router-dom';
//import {PeopleListItem} from './PeopleListItem'

// hoisting the state 


function Router() {
  return (
    <div className="NavBar">

      <header className='NavBar-header'>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> |  
            <Link to="/counter">Counter</Link> |   
            <Link to="/contact">Contact Us</Link> |  
          </nav>
          <Switch>
            <Route path="/counter">
              <CounterButtonPage />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );

}
export default Router;