import React from 'react';


export const Persons = ({ persons, deletePerson }) => {    
    return (
        <table>
        <thead>
            <tr>
            <td>Name</td>
            <td>Phonenumber</td>
            <td></td>
            </tr>
        </thead>
        <tbody>
        { 
            persons.length > 0  ? persons.map(({ name, number, id }) => {
            return (
            <tr key={id}>
                <td>{name}</td>
                <td>{number}</td>
                <td><button onClick={() => deletePerson(id)}>Delete</button></td>
            </tr>
            );
            }) : null
        }
        </tbody>
        </table>
    )
};