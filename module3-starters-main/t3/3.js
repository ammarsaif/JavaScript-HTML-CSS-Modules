'use strict';
const names = ['John', 'Paul', 'Jones'];
let myList = document.querySelector('#target');

for (let i=0; i<names.length; i++) {
    let list = document.createElement('li');
    list.innerText= names[i];
    myList.append(list)
}
