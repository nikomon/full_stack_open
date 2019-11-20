import { React } from 'react';

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
            persons.map(({ name, number }) => {
            return (
            <tr>
                <td>{name}</td>
                <td>{number}</td>
            </tr>
            );
            })
        }
        </tbody>
        </table>
    )
};