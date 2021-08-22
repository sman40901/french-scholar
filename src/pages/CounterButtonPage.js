import React, {useState} from 'react';
import {CounterButton} from '../CounterButton'
import {CongratulationsMessage} from '../CongratulationsMessage'
import { useParams, useLocation } from 'react-router';
import {parse}  from 'query-string';

export const CounterButtonPage = () => //(props) => // named export, forces us to use same name across the file
// using arrow function
{


    const location = useLocation();
    const { startingValue } = parse(location.search);
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue) || 0); // using array destructuring syntax, 

    const increment = () =>{
        setNumberOfClicks(numberOfClicks + 1);
    }
  
    return (
      <div className="App">
        <header className="App-header">
            <CongratulationsMessage threshold={10} numberOfClicks={numberOfClicks}/>
            <CounterButton numberOfClicks={numberOfClicks} increment={increment}/>
        </header>
      </div>
    );
  }