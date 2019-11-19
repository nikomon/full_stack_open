import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Statistics } from './Statistics';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <Card>
      <Card.Header>Feedback</Card.Header>
      <Card.Body>
        <Card.Title>How was the lunch today?</Card.Title>
        <ButtonToolbar>
          <Button onClick={() => setGood(good + 1)} variant="success">Good</Button>
          <Button onClick={() => setNeutral(neutral + 1)} variant="warning">Neutral</Button>
          <Button onClick={() => setBad(bad + 1)} variant="danger">Bad</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
    <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));