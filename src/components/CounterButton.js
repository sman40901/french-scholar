import React, {useEffect} from 'react';


// {useState} -> hooks
// const arr = [1,2,3];
// const [x,y,z] = arr;

export const CounterButton = ({numberOfClicks, increment}) => //(props) => // named export, forces us to use same name across the file
// using arrow function
{
    //console.log('rendering counter button');


    // state var numberOfClicks, setNumberOfClicks is the function to set that state
  
    // below code does not work because
    // only react re-renders the components when   
    // only props value changes or state value changes thru hooks, 

    // let numberOfClicks = 0;

    // const increment = () =>{
    //     numberOfClicks += 1;
    // }
   
    useEffect(() => { // whenever componet is rendered in the screen, this is called, also when data of our component updated
        // we can control when our logic is triggered
        // that is done by passing array , if that value changes then useEffect is triggered
        // if we pass empty array it is called only once at the beginning
        console.log('use effect, counter button');
        // [danger] increment(); dont do anything that will change the state of the dependencies 
    }, [numberOfClicks]);

    return(
    <>
    
    <p>You've clicked {numberOfClicks} times</p>
    <button onClick={increment}>Click me!</button>
    </>
    )
}