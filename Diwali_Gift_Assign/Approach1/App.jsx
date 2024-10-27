import React, { useState } from 'react';
const App = () => {
    const [person, setPerson] = useState([]);
    const [name, setName] = useState('');
    const gift = [
        'toys',
        'Book',
        'chocolate',
        'gadget',
        'watch',
        'sweets',
        'cup-set',
        'frame',
        'soan-papdi'
    ];
    ///to addd a person
    //person is array i.e why we are writing person whatever name it is storing on the person
    const addPerson = () => {
        if (name.trim()) {
            setPerson([...person, { name, gift: 'no gift assigned' }]);
            setName('');
        }
    };
    const handleAssignGifts = () => {
        setPerson(
            //index is always a second parameter
            person.map((person, index) => ({
                ...person,
                gift: gift[index % gift.length],
            }))
        );
    };

    const handleRandomGifts = () => {
        setPerson(
            person.map((person) => ({
                ...person,
                gift: gift[Math.floor(Math.random() * gift.length)],
            }))
        );
    };
    const handleReset = () => {
        setPerson(
            person.map((person) => ({
                ...person,
                gift: 'no gift assigned',
            }))
        );
    };
///logic for remove from the array
    const handleRemove = (removeIndex) => {
        setPerson(person.filter((_, index) =>
            index !== removeIndex
        ))
    };
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="enter the name of a person"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={addPerson}>add person</button>
            </div>
            <button onClick={handleAssignGifts}>Assign gifts</button>
            <button onClick={handleRandomGifts}>Assign Rnadom</button>
            <button onClick={handleReset}>Reset</button>
            <ul>
                {person.map((person, index) => (
                    <li key={index}>
                        {person.name}:{person.gift}
                        <button onClick={() => handleRemove(index)}>remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default App;