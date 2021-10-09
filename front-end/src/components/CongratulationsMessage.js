import React, {useState} from 'react';

// {useState} -> hooks
// const arr = [1,2,3];
// const [x,y,z] = arr;

export const CongratulationsMessage = ({numberOfClicks, threshold}) => //(props) => // named export, forces us to use same name across the file
// using arrow function
{

    return(
    numberOfClicks >= threshold 
    ? <h1> CongratulationsMessage </h1>
    : <h1> not enough </h1>
    )
}