import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import { Persons } from './Persons';
import { PersonForm } from './PersonForm';
import { Filter } from './Filter';

export const App = () => {
  const [ names, setNames] = useState(['Arto Hellas']);
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(names.includes(newName)) {
      return alert(`${newName} is already added to phonebook.`);
    }
    setNames(names.concat(newName));
    setPersons(persons.concat({
      name: newName,
      number: newPhone
    }));
    setNewName('');
    setNewPhone('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter />
      <h3>Add a new</h3>
      <PersonForm newPhone={newPhone} newName={newName} setNewPhone={setNewPhone} setNewName={setNewName} handleForm={handleSubmit}/>
      <h3>Numbers</h3>
      <Persons persons={persons}/>
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)