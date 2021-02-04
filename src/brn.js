/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* jshint esversion: 6 */
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const max = 100;
    let getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max) + 1);
    let num = getRandomNum(max);
    console.log(`Question: ${num}`);
    let answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' || answer === 'no') {
      if (i === 2) {
        if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
          console.log('Correct!');
          console.log(`Congratulations, ${name}!`);
        } else if (answer === 'no') {
          console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
          break;
        } else {
          console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
          break;
        }
      } else if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
        console.log('Correct!');
      } else if (answer === 'no') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
        break;
      } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. \n Let's try again, ${name}!`);
      break;
    }
  }
};

export default brainEven;
