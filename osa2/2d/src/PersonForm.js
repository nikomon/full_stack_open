import React, { useState } from 'react';

export const PersonForm = ({ persons, updatePersonas  }) => {
  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingPerson = persons.filter(person => person.name === name);    
    updatePersonas({ name, number }, existingPerson.length > 0 ? existingPerson[0].id : undefined );
    setName('');
    setNumber('');
  }
    return (
        <form>
        <div>
          name: <input value={name} onChange={(event) => setName(event.target.value)}/>
          phone: <input value={number} onChange={(event) => setNumber(event.target.value)}/>
        </div>
        <div>
          <button disabled={name.length <= 0 || number.length <= 0} onClick={handleSubmit} type="submit">add</button>
        </div>
      </form>
    )
};