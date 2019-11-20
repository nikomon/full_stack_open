import { React } from 'react';

export const PersonForm = ({ newName, setNewName, newPhone, setNewPhone, handleForm }) => {
    return (
        <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
          phone: <input value={newPhone} onChange={(event) => setNewPhone(event.target.value)}/>
        </div>
        <div>
          <button disabled={newName.length <= 0 || newPhone.length <= 0} onClick={handleForm} type="submit">add</button>
        </div>
      </form>
    )
};