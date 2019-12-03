import ReactDOM from 'react-dom'
import React, { useState, useCallback, useEffect } from 'react'
import { Persons } from './Persons';
import { PersonForm } from './PersonForm';
import { Filter } from './Filter';
import axios from 'axios';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [persons, setPersons] = useState([]);
  const updateFilter = useCallback((value) => {
    setFilter(value);
  });
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(({ data }) => {
      setPersons(data);
    });
  }, []);
  const updatePersonas = useCallback((newName, newPhone) => {
    setPersons(persons.concat({
      name: newName,
      number: newPhone
    }));
  })
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateFilter={updateFilter}/>
      <h3>Add a new</h3>
      <PersonForm persons={persons} updatePersonas={updatePersonas}/>
      <h3>Numbers</h3>
      {
        <Persons persons={filter.length > 0 ? persons.filter(({ name }) => name.toLowerCase().includes(filter)): persons}/>
      }
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)