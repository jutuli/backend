export const runDistance = async (
  distanceDescription: string
): Promise<string> => {
  // Ermittle eine zufällige Zeit zwischen mind. 25 und max. 90 Minuten.
  const time = Math.floor(Math.random() * 66) + 25;
  await new Promise((resolve) => setTimeout(resolve, time * 100));
  clearTimeout;
  return `${distanceDescription}: ${time}`;
};

export const warmUp = async (): Promise<number> => {
  const warmUpTime = Math.floor(Math.random() * 6) + 5;
  await new Promise((resolve) => setTimeout(resolve, warmUpTime * 100));
  return warmUpTime;
};

export const coolDown = async (): Promise<number> => {
  const coolDownTime = Math.floor(Math.random() * 8) + 3;
  await new Promise((resolve) => setTimeout(resolve, coolDownTime * 100));
  return coolDownTime;
};
