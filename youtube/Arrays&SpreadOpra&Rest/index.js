let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits);
fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("pear");
console.log(fruits);
fruits.shift();
console.log(fruits);
// fruits.splice(1, 1, "watermelon");
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);
let index = fruits.indexOf("banana");
console.log(index);
for (let fruit of fruits) {
  console.log(fruit);
}
fruits.sort().reverse();
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
let myname = "li qikun";
let letters = [...myname].join("-");
console.log(letters);

let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrot", "broccoli", "spinach", "kale"];
let foods = [...fruits, ...vegetables, "milk"];
console.log(foods);

const food1 = "pizza";
const food2 = "burger";
const food3 = "fries";
const food4 = "cake";

function openFridge(...foods) {
  console.log(...foods);
}
function getFood(...foods) {
  return foods;
}
openFridge(food1, food2, food3, food4);
const myfoods = getFood(food1, food2, food3, food4);
console.log(myfoods);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}
const total = getAverage(1, 2, 2, 2);

console.log(`you average is$${total}`);

// combineStrings("hello", "world", "spongebob");

function combineStrings(...strings) {
  console.log(strings);
  return strings.join(" ");
}
console.log(combineStrings("hello", "world", "spongebob"));
