let fruits = ["hh", "apple", "banana", "orange", "grape", "pear"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "grape", "orange", "pear"]
//----number
let numbers = [5, 3, 10, 1, 4, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5, 10]
//----
const ppl = [
  { name: "Spongebob", age: 25, gpa: 3.9 },
  { name: "Patrick", age: 22, gpa: 3.5 },
  { name: "Squidward", age: 20, gpa: 3.2 },
];

ppl.sort((a, b) => b.gpa - a.gpa);
console.log(ppl); // [{ name: 'Patrick', age: 22, gpa: 3.5 }, { name: 'Squidward', age: 20, gpa: 3.2 }, { name: 'Spongebob', age: 25, gpa: 3.9 }]
ppl.sort((a, b) => a.name.localeCompare(b.name));
console.log(ppl); // [{ name: 'Patrick', age: 22, gpa: 3.5 }, { name: 'Squidward', age: 20, gpa: 3.2 }, { name: 'Spongebob', age: 25, gpa: 3.9 }]
