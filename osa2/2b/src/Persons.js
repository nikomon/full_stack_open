import React from 'react';


export const Persons = ({ persons }) => {
    return (
        <table>
        <thead>
            <tr>
            <td>Name</td>
            <td>Phonenumber</td>
            </tr>
        </thead>
        <tbody>
        { 
            persons.length > 0  ? persons.map(({ name, number }) => {
            return (
            <tr>
                <td>{name}</td>
                <td>{number}</td>
            </tr>
            );
            }) : null
        }
        </tbody>
        </table>
    )
};