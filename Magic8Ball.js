// Variables to store username and question asked by the user
let userName = 'Sofia';
let userQuestion = 'should I become a developer?';

// Ternary expression to create greeting for user
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Question asked by user is printed to the console
console.log(`${userName} has asked: ${userQuestion}`);

// Generation of random number between 0 and 8 to get answer for user
let randomNumber = Math.floor(Math.random() * 8);

// Variable to store answer of Magic 8 Ball
let eightBall = '';

// Control flow that takes randomNumber and then assigns eightBall to a reply that a Magic 8 Ball would return
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall ='Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// Answer of Magic 8 Ball is printed to the console
console.log(`Magic 8 Ball replies: ${eightBall}`);
