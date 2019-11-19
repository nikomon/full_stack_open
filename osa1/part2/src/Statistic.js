import React from 'react';

export const Statistic = ({ name, value }) => {
    return (
        <>
        <td>{ name }</td>
        <td>{ value }</td> 
        </>
    )
}