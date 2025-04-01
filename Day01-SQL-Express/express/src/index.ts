// @ts-nocheck
import express from 'express';
import cors from 'cors';
import { IPerson } from './models/IPerson';
import { IStarship } from './models/IStarship';

const app = express();
app.use(cors());
const port = 3000;

const people: IPerson[] = [
  {
    id: 1,
    name: 'Luke Skywalker',
    about: 'Jedi Knight',
    yearOfBirth: 19,
    starshipId: 1,
  },
  {
    id: 2,
    name: 'Darth Vader',
    about: 'Sith Lord',
    yearOfBirth: 41,
    starshipId: 2,
  },
  {
    id: 3,
    name: 'Leia Organa',
    about: 'Rebel Leader',
    yearOfBirth: 19,
    starshipId: 3,
  },
];

const starships: IStarship[] = [
  {
    id: 1,
    name: 'Millennium Falcon',
    model: 'YT-1300',
    manufacturer: 'Corellian Engineering Corporation',
  },
  {
    id: 2,
    name: 'X-Wing',
    model: 'T-65 X-wing starfighter',
    manufacturer: 'Incom Corporation',
  },
  {
    id: 3,
    name: 'TIE Fighter',
    model: 'TIE/ln space superiority starfighter',
    manufacturer: 'Sienar Fleet Systems',
  },
];

app.get('/people', (req, res) => {
  res.json(people);
});

app.get('/starships', (req, res) => {
  res.json(starships);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
