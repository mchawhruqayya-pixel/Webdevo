const length1 = prompt("The lenght of the first side of a triangle:");
const length2 = prompt("The lenght of the second side of a triangle:");
const length3 = prompt("The lenght of the third side of a triangle:");
if (length1 === length2 && length1 === length3) {
  document.write("equilateral ");
} else if (length1 === length2 || length1 === length3 || length2 === length3) {
  document.write("isosceles ");
} else {
  document.write("scalene ");
}
