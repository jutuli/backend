export interface IPerson {
  id: number;
  name: string;
  about: string;
  yearOfBirth: number;
  starshipId?: number; // to link person to starship
}
