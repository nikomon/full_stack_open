import React from 'react'

const reducer = (accumulator, currentValue) => accumulator + currentValue;

export const Total = ({ exercises }) => {
  return (
    <p>Number of exercises {exercises.reduce(reducer)}</p>
  )
}