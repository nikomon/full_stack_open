import ReactDOM from 'react-dom'
import React, { useState, useCallback } from 'react'
import { Persons } from './Persons';
import { PersonForm } from './PersonForm';
import { Filter } from './Filter';

export const App = () => {
  const [filter, setFilter] = useState('');
  const updateFilter = useCallback((value) => {
    setFilter(value);
  });
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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