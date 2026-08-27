"use strict";
const x1 = Number(prompt("Point x1:"));
const y1 = Number(prompt("Point y1:"));
const x2 = Number(prompt("Point x2:"));
const y2 = Number(prompt("Point y2:"));
const D = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
document.write("The distance between point x and y is " + D);
