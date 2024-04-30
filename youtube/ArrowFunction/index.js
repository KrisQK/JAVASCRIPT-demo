// function hello() {
//   console.log("Hello, world!");
// }
// const hello = function () {
//   console.log("Hello!");
// };
const hello = (name, years) => {
  console.log(`hello ${name}`);
  console.log(`you are ${years} old`);
};
hello(`bro`, `25`);
//-----
// setTimeout(hello1, 3000);

// function hello1() {
//   console.log("Hello, world!");
// }
//--------
setTimeout(() => {
  console.log("Hello, world!");
}, 3000);
//--------
const numbers = [1, 2, 3, 4, 5];

const filteredNums = numbers.filter((num) => {
  return num > 3;
});
const cubes = numbers.map((num) => Math.pow(num, 3));
const total = numbers.reduce((acc, curr) => acc + curr);
console.log(filteredNums); // [4, 5]
console.log(cubes); // [1, 8, 27, 64, 125]
console.log(total); // 15
