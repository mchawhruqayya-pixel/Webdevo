"use strict";
const numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt("Enter a number: "));
  numbers.push(num);
}
console.log("Numbers:", numbers);
const anotherNumber = Number(prompt("Enter a number again: "));
if (numbers.includes(anotherNumber)) {
  console.log(`Number ${anotherNumber} is found in the array.`);
} else {
  console.log(`Number ${anotherNumber} is not found in the array`);
}
numbers.pop();
console.log("Updated Numbers:", numbers);
numbers.sort((a, b) => a - b);
console.log("sorted numbers:", numbers);
