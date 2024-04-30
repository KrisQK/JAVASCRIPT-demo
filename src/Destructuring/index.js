let a = 1;
let b = 2;

[a, b] = [b, a]; // destructuring assignment

console.log(a); // 2
console.log(b); // 1
//-----2
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]]; //换两个元素
console.log(colors); // ["white", "green", "blue", "black", "red"]
//-------3
const colors1 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, ...remainingColors] = colors1;

console.log(firstColor); // "red"
console.log(secondColor); // "green"
console.log(remainingColors); // ["blue", "black", "white"]
//------4
const person1 = {
  firstName: " Spngebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};
const person2 = {
  firstName: " Patrick",
  lastName: "Star",
  age: 30,
};
const { firstName, lastName, age, job } = person1;
console.log(firstName); // "Spngebob"
console.log(lastName); // "Squarepants"
console.log(age); // 30
console.log(job); // "Fry Cook"

const {
  firstName: fName,
  lastName: lName,
  age: aAge,
  job: jJob = "unemployed",
} = person2;
console.log(fName); // "Patrick"
console.log(lName); // "Star"
console.log(aAge); // 30
console.log(jJob); // "unemployed"
//------5
function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
  console.log(`${firstName} ${lastName} is ${age} years old and ${job}`);
}
displayPerson(person2);
