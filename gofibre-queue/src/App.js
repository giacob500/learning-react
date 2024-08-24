import React, { useState } from 'react';
import './App.css';

const PeopleList = () => {
  const [index, setIndex] = useState(0);
  const people = ['Giacomo', 'Cameron', 'Marie', 'Lee', 'Billy', 'Sam'];

  const nextPerson = () => {
    setIndex((index + 1) % people.length);
  };

  const upcomingPeople = people.slice(index + 1).concat(people.slice(0, index));

  return (
    <div>
      <p>Current Person:</p>
      <h2>{people[index]}</h2>
      <p>Next in list:</p>
      <ul>
          {upcomingPeople.map((person, i) => (
            <li key={i}>{person}</li>
          ))}
        </ul>
      <button onClick={nextPerson}>Next</button>
    </div>
  );
};

export default PeopleList;
