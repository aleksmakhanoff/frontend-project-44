import { getRandomNumber, playGame } from '../index.js';

const isProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const rule = 'What number is missing in the progression?';

const gameBasisGeneration = () => {
  const numStart = getRandomNumber(1, 5);
  const numStep = getRandomNumber(1, 5);
  const numLength = getRandomNumber(5, 10);
  const progression = isProgression(numStart, numStep, numLength);
  const hidIndex = getRandomNumber(1, progression.length - 1);
  const hidNumber = progression[hidIndex];
  progression[hidIndex] = '..';
  const question = progression.join(' ');
  const correctAnswer = String(hidNumber);
  return [question, correctAnswer];
};

const playProgressionGame = () => playGame(rule, gameBasisGeneration);

export default playProgressionGame;
