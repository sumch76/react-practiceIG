import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState('');
  const gifts = ['Toy', 'Book', 'Chocolate', 'Gadget'];

  // Function to add a new person with no gift assigned initially
  const addPerson = () => {
    if (name.trim()) {
      setPersons([
        ...persons,
        { name, gift: 'No gift assigned', isEditing: false },
      ]);
      setName('');
    }
  };
  // Function to assign gifts in order to all persons
  const assignGifts = () => {
    setPersons(
      persons.map((person, index) => ({
        ...person,
        gift: gifts[index % gifts.length], // Assign gifts in sequence
      }))
    );
  };

  // Function to shuffle gifts randomly for all persons
  const shuffleGifts = () => {
    setPersons(
      persons.map((person) => ({
        ...person,
        gift: gifts[Math.floor(Math.random() * gifts.length)],
      }))
    );
  };

  // Function to reset gifts
  const resetGifts = () => {
    setPersons(
      persons.map((person) => ({
        ...person,
        gift: 'No gift assigned',
      }))
    );
  };

  // Function to remove a person
  const removePerson = (indexToRemove) => {
    setPersons(persons.filter((_, index) => index !== indexToRemove));
  };

  // Function to toggle edit mode for name
  const toggleEditMode = (index) => {
    setPersons(
      persons.map((person, idx) =>
        idx === index ? { ...person, isEditing: true } : person
      )
    );
  };

  // Function to save edited name
  const saveName = (index, newName) => {
    setPersons(
      persons.map((person, idx) =>
        idx === index ? { ...person, name: newName, isEditing: false } : person
      )
    );
  };
  return (
    <div className="app">
      <h1>Gift Assignment App</h1>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={addPerson}>Add Person</button>
      </div>

      <div>
        <button onClick={assignGifts}>Assign Gifts</button>
        <button onClick={shuffleGifts}>Shuffle Gifts</button>
        <button onClick={resetGifts}>Reset Gifts</button>
      </div>

      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {  
            person.isEditing ? 
            (
              <input
                type="text"
                defaultValue={person.name}
                onBlur={(e) => saveName(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    saveName(index, e.target.value);
                  }
                }}
                autoFocus
              />
            )
            :
            (
              <span onClick={() => toggleEditMode(index)}>{person.name}</span>
            )}
            {' - '}
            {person.gift}
            <button onClick={() => toggleEditMode(index)}>Edit</button>
            <button onClick={() => removePerson(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
