import { getRandomNumber, playGame } from '../index.js';

const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generation = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => playGame(rule, generation);

export default playEvenGame;
