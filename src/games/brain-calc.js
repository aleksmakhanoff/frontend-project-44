import { getRandomNumber, playGame } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const rule = 'What is the result of the expression?';

const generation = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculateExpression(number1, operator, number2));
  return [question, correctAnswer];
};

const playCalculatorGame = () => playGame(rule, generation);

export default playCalculatorGame;
