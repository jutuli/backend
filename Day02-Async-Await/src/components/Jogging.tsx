import React, { useState } from 'react';
import { coolDown, runDistance, warmUp } from '../functions/jogging';

const Jogging: React.FC = () => {
  const [distanceDescription, setDistanceDescription] = useState<string>('');
  const [warmUpTime, setWarmUpTime] = useState<number | null>(null);
  const [runDescriptionAndTime, setRunDescriptionAndTime] = useState<
    string | null
  >(null);
  const [coolDownTime, setCoolDownTime] = useState<number | null>(null);
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('Bereit zum Start');

  const handleDistanceDescriptionChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistanceDescription(event.currentTarget.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startJogging();
  };

  const startJogging = async () => {
    setStatus('Warm-Up!');
    const warmUpTime = await warmUp();
    setWarmUpTime(warmUpTime);
    setStatus('Jogging!');
    const runDescriptionAndTime = await runDistance(distanceDescription);
    setRunDescriptionAndTime(runDescriptionAndTime);
    setStatus('Cool-Down!');
    const coolDownTime = await coolDown();
    setCoolDownTime(coolDownTime);
    setStatus('Fertig!');
    const totalTime =
      warmUpTime +
      parseInt(runDescriptionAndTime.split(': ')[1]) +
      coolDownTime;
    setTotalTime(totalTime);
  };

  return (
    <div>
      <h2>Jogging Tracker</h2>
      <h3>Wie willst du heute joggen?</h3>
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          onClick={handleDistanceDescriptionChange}
          value="Gemütlich im Park">
          Gemütlich im Park
        </button>
        <button
          type="button"
          onClick={handleDistanceDescriptionChange}
          value="Sportlich im Wald">
          Sportlich im Wald
        </button>
        <button
          type="button"
          onClick={handleDistanceDescriptionChange}
          value="Extrem im Gebirge">
          Extrem im Gebirge
        </button>
        <button type="submit">Start Jogging</button>
      </form>
      <p>Status: {status}</p>
      {warmUpTime !== null && <p>Warm-Up: {warmUpTime} Minuten</p>}
      {runDescriptionAndTime !== null && <p>{runDescriptionAndTime} Minuten</p>}
      {coolDownTime !== null && <p>Cool-Down: {coolDownTime} Minuten</p>}
      {totalTime !== null && <p>Gesamtzeit: {totalTime} Minuten</p>}
    </div>
  );
};

export default Jogging;
