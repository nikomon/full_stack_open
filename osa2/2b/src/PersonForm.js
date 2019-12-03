import React, { useState } from 'react';

export const PersonForm = ({ persons, updatePersonas  }) => {
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(persons.find(({ name }) => name === newName)) {
      return alert(`${newName} is already added to phonebook.`);
    }
    updatePersonas(newName, newPhone)
    setNewName('');
    setNewPhone('');
  }
    return (
        <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
          phone: <input value={newPhone} onChange={(event) => setNewPhone(event.target.value)}/>
        </div>
        <div>
          <button disabled={newName.length <= 0 || newPhone.length <= 0} onClick={handleSubmit} type="submit">add</button>
        </div>
      </form>
    )
};