/////////////////////////////////
// forEach, map, filter, reduce
// forEach() method is used to execute a function for each element in an array.
// map() method creates a new array with the results of calling a provided function on every element in the calling array.
// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// let numbers = [1, 2, 3, 4, 5];
// // numbers.forEach(doubler);
// // numbers.forEach(triple);
// // numbers.forEach(square);
// numbers.forEach(cube);
// numbers.forEach(dispaly);

// function dispaly(element) {
//   console.log(element);
// }
// function doubler(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = element * 3;
// }
// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }
// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }
let fruits = ["apple", "banana", "orange", "grape"];
fruits.forEach(capitalize);
fruits.forEach(dispaly);
function uppercase(element, index, array) {
  array[index] = element.toUpperCase();
}
function lowercase(element, index, array) {
  array[index] = element.toLowerCase();
}
function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function dispaly(element) {
  console.log(element);
}
// ----------------Map- still has the original array
let numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
console.log(squares);

const cubes = numbers.map(cube);
console.log(cubes);
function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}
//-------------
const students = ["spongebob", "patrick", "squidward", "sandy"];
const studentsUpper = students.map(uppercase1);
const studentsLower = students.map(lowercase1);
console.log(studentsLower);

console.log(studentsUpper);

function uppercase1(element) {
  return element.toUpperCase();
}
function lowercase1(element) {
  return element.toLowerCase();
}

//-----------规范化日期
const dates = [
  "2021-01-01",
  "2021-02-01",
  "2021-03-01",
  "2021-04-01",
  "2021-05-01",
];
const formattedDates = dates.map(fromatDates);
console.log(formattedDates);
function fromatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
// ----------------Filter, creates a new array by filtering out elemnts
let numbers1 = [1, 2, 3, 4, 5];
let evenNums = numbers1.filter(isEven);
console.log(evenNums);
let oddNums = numbers1.filter(isOdd);
console.log(oddNums);
function isEven(element) {
  return element % 2 === 0;
}
function isOdd(element) {
  return element % 2 !== 0;
}
//------------agesfilter
const ages = [23, 25, 9, 27, 29, 31, 33];
let adults = ages.filter(isAdult);
console.log(adults);
function isAdult(age) {
  return age >= 18;
}
function isChild(age) {
  return age < 18;
}

const words = ["apple", "banana", "orange", "grape"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(longWords);
console.log(shortWords);

function getShortWords(element) {
  return element.length <= 5;
}
function getLongWords(element) {
  return element.length > 5;
}
// ----------reduce- array to single value

const prices = [10, 20, 30, 40, 50];
const total = prices.reduce(getTheTotal);
console.log(`your total is ${total.toFixed(2)}`);
function getTheTotal(previous, next) {
  return previous + next;
}
//-----比较
const grades = [80, 70, 90, 60, 85];
const maximum = grades.reduce(getMax);
console.log(`your maximum grade is ${maximum}`);
function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
