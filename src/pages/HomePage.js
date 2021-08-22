import React, {useEffect} from 'react';
import {Greetings} from '../Greetings'


export const HomePage = ({numberOfClicks, increment}) => //(props) => // named export, forces us to use same name across the file
// using arrow function
{

    return(
        <>
            HomePage
            <Greetings></Greetings>
        </>
    );

}