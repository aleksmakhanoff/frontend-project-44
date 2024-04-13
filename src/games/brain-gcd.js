import { getRandomNumber, playGame } from '../index.js';

const isNod = (a, b) => {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  while (min !== 0) {
    [max, min] = [min, max % min];
  }
  return max;
};

const rule = 'Find the greatest common divisor of given numbers.';

const generation = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(isNod(number1, number2));
  return [question, correctAnswer];
};

const playGcdGame = () => playGame(rule, generation);

export default playGcdGame;
