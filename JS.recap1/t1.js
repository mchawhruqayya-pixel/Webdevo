'use strict';
const C = Number(prompt('Type a temperature in Celsius:'));
const F = (C * 9) / 5 + 32;
const K = C + 273.15;
console.log('Fahrenheit is  ' + F + ' and Kelvin is ' + K);
