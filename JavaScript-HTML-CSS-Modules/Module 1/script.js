// #1


console.log("I'm printing to console!");

// #2

let name = prompt("Enter your Name");

console.log(`Hello, ${name}`);

// #3

let num1 = Number(prompt("Enter your first number"));
let num2 = Number(prompt("Enter your second number"));
let num3 = Number(prompt("Enter your third number"));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = (num1 + num2 + num3) / 3;

console.log(`Sum of numbers is ${sum}`);
console.log(`Product of numbers is ${product}`);
console.log(`Average of numbers is ${average}`);


// #4

let userName = prompt("Enter your Name");

let randomDigit = Math.floor(Math.random() * 4) + 1;

if (randomDigit === 1) {
  console.log(`${userName} your wizard name is Gryffindor`);
} else if (randomDigit === 2) {
  console.log(`${userName} your wizard name is Slytherin`);
} else if (randomDigit === 3) {
  console.log(`${userName} your wizard name is Hufflepuff`);
} else {
  console.log(`${userName} your wizard name is Ravenclaw`);
}

// #5

let yearNum = Number(prompt("Enter a year"));

if ((yearNum % 4 === 0 && yearNum !== 0) || yearNum % 400 === 0) {
  console.log(`${yearNum} is a leap year`);
} else {
  console.log(`${yearNum} is not a leap year`);
}

// #6

let askUser = confirm("Should I calculate the square root?");

if (askUser) {
  userInput = prompt("Enter a number");
  let squareRoot = Math.sqrt(Number(userInput)).toFixed(2);

  if (userInput < 1) {
    console.log("The square root is not calculated.");
  } else {
    console.log(`Square root of ${userInput} is ${squareRoot}`);
  }
}


// #7

function calculateAverage(array) {
  sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;
  return average;
}

myArray = [4, 11, 6, 8];

checkAverage = calculateAverage(myArray);

console.log(checkAverage);
