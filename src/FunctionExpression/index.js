// a way to define as values or variables
//= function expression
const hello = function () {
  console.log("Hello World");
};
hello();
//-----------
setTimeout(hello, 3000);
//------
setTimeout(function () {
  console.log("Hello World");
}, 3000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});
const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});
const oddNums = numbers.filter(function (element) {
  return element % 2 !== 0;
});
const total = numbers.reduce(function (accumulator, ele) {
  return accumulator + ele;
});
console.log(total);
console.log(evenNums);
console.log(squares);
console.log(cubes);
// function square(element) {
//   return Math.pow(element, 2);
// }
function cube(element) {
  return Math.pow(element, 3);
}
