import React from 'react'
import { Part } from './Part';

export const Content = ({ contents }) => {
  return (
      contents.map(content => <Part name={content.name} exercise={content.exercise}></Part>)
  )
}