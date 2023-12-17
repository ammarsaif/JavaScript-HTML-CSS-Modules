'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let myElement = document.querySelector("#target");

for (let i=0; i<students.length; i++) {
  let myOption = document.createElement('option')
    myOption.innerText = students[i].name
    myOption.value = students[i].id
    myElement.append(myOption)
}


