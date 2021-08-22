import React from 'react';

export const Greetings = ({name, numberOfMessages}) => //(props) => // named export, forces us to use same name across the file
// using arrow function
{
    //console.log('rendering greetings')
    //const {name, numberOfMessages} = props;
    const isMorning = (new Date()).getHours() < 12;
    const greetingHeader = isMorning ? ( 
          <h3>Good morning {name}</h3> 
        )
        : <h3>Good evening {name}</h3>;
    return ( //react fragments <></>
    <> 
        {greetingHeader}
        {numberOfMessages === 0 || <p> some new line {numberOfMessages}</p> }
        {/* {numberOfMessages === 0 ? "empty" :
        <p> some new line {numberOfMessages}</p>} */}
    </>
        ) ; 
}

//export default Greetings; 
// disadvantage is we can rename this at our will, it might be a typo and react wont complain