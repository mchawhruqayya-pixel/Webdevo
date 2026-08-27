"use strict";
let numbers = [];
let number = prompt("Enter a number or done to finnish");
while (number != "done") {
  numbers.push(Number(number));
  number = prompt("Enter a number or done to finnish");
}
let evenNumbers = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

document.write(
  "Even Numbers: " + (evenNumbers.length > 0 ? evenNumbers.join(", ") : "None"),
);
document.write("<p>End of program.</p>");
