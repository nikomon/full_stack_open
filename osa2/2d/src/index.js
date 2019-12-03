import ReactDOM from 'react-dom'
import React, { useState, useCallback, useEffect } from 'react'
import { Persons } from './Persons';
import { PersonForm } from './PersonForm';
import { Filter } from './Filter';
import { getAll, create, update, remove  } from './http';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [persons, setPersons] = useState();
  const updateFilter = useCallback((value) => {
    setFilter(value);
  });
  useEffect(() => {
    getAll().then(allPersons => {
      setPersons(allPersons)
    })
  }, []);
  const updatePersonas = useCallback((person, id) => {
    if(id) {
      const updateExistingPerson = window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`);
        if(updateExistingPerson) {
          update(id, person).then((person) => {
            const oldPersons = Object.assign([], persons.filter((person) => person.id !== id));
            setPersons(oldPersons.concat(person));
          });
        }
        return;
    }
    console.log("create");
    
    create(person).then((person) => {
      setPersons(persons.concat(person));
    });
  });
  const deletePerson = (id) => remove(id).then(() => setPersons(Object.assign([], persons.filter((person) => person.id !== id))));
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateFilter={updateFilter}/>
      <h3>Add a new</h3>
      <PersonForm persons={persons} updatePersonas={updatePersonas}/>
      <h3>Numbers</h3>
      {
        persons && persons.length > 0 ?
          <Persons deletePerson={deletePerson} persons={filter.length > 0 ? persons.filter(({ name }) => name.toLowerCase().includes(filter)): persons}/>
          : null
      }
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)