import { playGame, oneNumberGeneration } from '../index.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBasisGeneration = () => oneNumberGeneration(isEven);

const playEvenGame = () => playGame(rule, gameBasisGeneration);

export default playEvenGame;
