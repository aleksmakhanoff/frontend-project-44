import { playGame, oneNumberGeneration } from '../index.js';

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

const gameBasisGeneration = () => oneNumberGeneration(isSimple);

const playPrimeGame = () => playGame(rule, gameBasisGeneration);

export default playPrimeGame;
