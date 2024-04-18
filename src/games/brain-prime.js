import { getRandomNumber, playGame } from '../index.js';

const isSimple = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBasisGeneration = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isSimple(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrimeGame = () => playGame(rule, gameBasisGeneration);

export default playPrimeGame;
