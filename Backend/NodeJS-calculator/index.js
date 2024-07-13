// importing crypto from Node documentation...
const crypto = require('crypto');

//Arguments written here
const args = process.argv.slice(2); 

// Checking the length of the arguments
if (args.length < 1) {
  console.log('Usage: node index.js <operation> [operands]');
  process.exit(1);
}


const operation = args[0];
const operands = args.slice(1).map(Number);

// switch statement applied here...
switch (operation) {

  // Addition operation
  case 'add':
    if (operands.length !== 2) {
      console.log('Usage: node index.js add <num1> <num2>');
      break;
    }
    console.log(operands[0] + operands[1]);
    break;
  // substraction operation
  case 'subtrction':
    if (operands.length !== 2) {
      console.log('Usage: node index.js subtraction <num1> <num2>');
      break;
    }
    console.log(operands[0] - operands[1]);
    break;
  // multiplicationo operation
  case 'multiplication':
    if (operands.length !== 2) {
      console.log('Usage: node index.js multiplication <num1> <num2>');
      break;
    }
    console.log(operands[0] * operands[1]);
    break;
  // division operation
  case 'division':
    if (operands.length !== 2) {
      console.log('Usage: node index.js division <num1> <num2>');
      break;
    }
    if (operands[1] === 0) {
      console.log('Error: Division by zero');
      break;
    }
    console.log(operands[0] / operands[1]);
    break;
  
    // trigonometrical operation starts here
  case 'sin':
    if (operands.length !== 1) {
      console.log('Usage: node index.js sin <angle_in_degrees>');
      break;
    }
    console.log(Math.sin(operands[0] * Math.PI / 180));
    break;
  
  case 'cos':
    if (operands.length !== 1) {
      console.log('Usage: node index.js cos <angle_in_degrees>');
      break;
    }
    console.log(Math.cos(operands[0] * Math.PI / 180));
    break;
  
  case 'tan':
    if (operands.length !== 1) {
      console.log('Usage: node index.js tan <angle_in_degrees>');
      break;
    }
    console.log(Math.tan(operands[0] * Math.PI / 180));
    break;
  
    // operation for generating random number
  case 'random':
    if (operands.length > 1) {
      console.log('Usage: node index.js random [length]');
      break;
    }
    const length = operands[0];
    if (!length) {
      console.log('Provide length for random number generation.');
      break;
    }
    crypto.randomBytes(Math.ceil(length / 2), (err, buf) => {
      if (err) {
        console.error(err);
        return;
      }
      const randomNum = buf.toString('hex').slice(0, length);
      console.log(randomNum);
    });
    break;
  
  default:
    console.log('Invalid operation.....');
}
