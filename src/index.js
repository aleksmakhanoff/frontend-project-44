import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const playGame = (rule, gameBasisGeneration) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = gameBasisGeneration();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
