export interface IPerson {
  id: number;
  name: string;
  about: string;
  yearOfBirth: number;
  starshipId?: number; // to link person to starship
}

export interface IStarship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
}
