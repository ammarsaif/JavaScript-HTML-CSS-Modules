


const arrayNum = [];

let i = 0;

while (i < 5) {
    let userInput = prompt("Enter a number!");
    arrayNum.push(userInput);
    i++;
}

for (let i = arrayNum.length - 1; i >= 0; i--) {
    console.log(arrayNum[i]);
}

// Exercise 2

let numStudents = Number(prompt("Enter the number of students"));
const listStudents = [];

for (let i=0; i<numStudents; i++) {
   let askStudentName = prompt("Enter the name of student");
   listStudents.push(askStudentName)
}
let studentsList = document.querySelector(".students-list");
for (let i=0; i<listStudents.length; i++) {
    let listCreate = document.createElement("li")
    listCreate.textContent = listStudents[i];
    studentsList.appendChild(listCreate)
}

// Exercise 3

let numDogs = 6
const listDogs = []

for (let i=0; i<numDogs; i++) {
   let askDogName = prompt("Enter the name of a dog:");
   listDogs.push(askDogName)
}

let sortedDogsList = listDogs.slice().sort(function(a, b) {
    return b.localeCompare(a); // Compare in reverse order
});

for (let i = 0; i < sortedDogsList.length; i++) {
    console.log(sortedDogsList[i]);
}

// Exercise 4

const numbers = []

while (true) {
    let userInput = Number(prompt("Enter a number:"))
    if (userInput === 0) {
        break
    }
    numbers.unshift(userInput)
}

let sortedNumbers = numbers.sort((a,b) => b -a);

for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// Exercise 5

const dualNumList = [];
let continueRunning = true;

while (continueRunning) {
    let userInput = Number(prompt("Enter a number:"))
    for (let i=0; i < dualNumList.length; i++) {
        if (userInput === dualNumList[i]) {
            console.log(` Number: ${userInput} already exists in the list. Breaking the program!`)
            continueRunning = false
            break
        }
    }
    dualNumList.unshift(userInput)
}

for (let i=0; i<dualNumList.length; i++) {
    console.log(dualNumList[i])
}



