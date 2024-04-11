#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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

const playCalculatorGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber (1, 20);
    const number2 = getRandomNumber (1, 20);
    const operator = getRandomOperator();
    const expression = `${number1}${operator}${number2}`;
    const correctAnswer = calculateExpression(number1, operator, number2);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playCalculatorGame();
