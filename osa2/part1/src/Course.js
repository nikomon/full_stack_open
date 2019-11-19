import React from 'react'

const Header = props =>
  <h1>{props.course}</h1>

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const Total = props => {
    const exercises = props.parts.map(part => part.exercises);
    const total = exercises.reduce(reducer);
    return <p>Total of {total} exercises</p>
}
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
    props.parts.map(part => <Part part={part} />)
)

export const Course = ({ course }) => {
    return(
        <>
        <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      </>
    )
}