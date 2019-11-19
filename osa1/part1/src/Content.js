import React from 'react'
import { Part } from './Part';

export const Content = ({ contents }) => {
  return (
      contents.map((content, id) => <Part key={`${content.name} ${id}`} name={content.name} exercises={content.exercises}></Part>)
  )
}