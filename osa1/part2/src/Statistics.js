import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Statistic } from './Statistic';


export const Statistics = ({ good, bad, neutral }) => {
    const all = good + bad + neutral;
    return (
        <Card>
            <Card.Header>Statistics</Card.Header>
            <Card.Body>
                {
                    all === 0 ? <p> No feedback given</p> :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Statistic name={'Good'} value={good}/>
                            </tr>
                            <tr>
                                <Statistic name={'Neutral'} value={neutral}/>
                            </tr>
                            <tr>
                                <Statistic name={'Bad'} value={bad}/>
                            </tr>
                            <tr>
                                <Statistic name={'All'} value={all}/>
                            </tr>
                            <tr>
                                <Statistic name={'Average'} value={ (((good * 1)  + (bad * -1) + (neutral * 0)) / (all)).toFixed(2) }/>
                            </tr>
                            <tr>
                                <Statistic name={'Positive'} value={`${(good / (all) * 100).toFixed(2)} %`}/>
                            </tr>
                        </tbody>
                    </Table>
                }
            </Card.Body>
        </Card>
    )
}