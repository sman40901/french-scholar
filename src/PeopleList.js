import React from 'react';
import {PeopleListItem} from './PeopleListItem'
// const numbers = [1,2,3];
// numbers.map(x=>x*2);
// ---> [2,4,6]

export const PeopleList = ({person}) => {
    return (

        <PeopleListItem person={person} key={person.name} />
);
}