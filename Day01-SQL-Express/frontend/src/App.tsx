import { useEffect, useState } from 'react';

import './App.css';
import { IPerson, IStarship } from './interfaces/interfaces';

function App() {
  // fetch to get persons
  const [persons, setPersons] = useState<IPerson[]>([]);
  useEffect(() => {
    fetch('http://localhost:3000/people')
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  // fetch to get starships
  const [starships, setStarships] = useState<IStarship[]>([]);
  useEffect(() => {
    fetch('http://localhost:3000/starships')
      .then((response) => response.json())
      .then((data) => setStarships(data));
  }, []);

  return (
    <>
      <h1>Star Wars Characters</h1>
      <div>
        {persons.map((person) => {
          // Find the starship that matches the person's starshipId
          const starship = person.starshipId
            ? starships.find((ship) => ship.id === person.starshipId)
            : undefined;
          return (
            <div key={person.id}>
              <h2>{person.name} </h2>
              <p>About: {person.about}</p>
              <p>Year of Birth: {person.yearOfBirth}</p>
              <p>Starship: {starship ? starship.name : 'none'}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
