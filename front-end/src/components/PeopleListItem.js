import React from 'react';

export const PeopleListItem = ({person}) => {
    return(
        <div className = "list-item-container" key = {person.name}>
            <h3>{person.name}</h3>
            <p>age: {person.age}</p>
            <p>hari color: {person.hair}</p>
        </div>
    );
}