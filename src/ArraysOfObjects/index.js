const fruits = [
  { name: "apple", color: "red", calories: 2 },
  {
    name: "banana",
    color: "yellow",
    calories: 777,
  },
  { name: "orange", color: "orange", calories: 999 },
  { name: "grape", color: "purple", calories: 888 },
];
// fruits.push({ name: "watermelon", color: "green", caloreis: 150 });
// console.log(fruits);
// console.log(fruits[1]);
// fruits.pop();
// fruits.splice(1, 2);
// console.log(fruits);

//-------foreach
fruits.forEach((fruit) => console.log(fruit.caloreis));

//------map
const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);
//-----filter
const yelloFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yelloFruits);
//------reduce
const totalCalories = fruits.reduce((acc, fruit) => acc + fruit.caloreis, 0);
console.log(totalCalories);

const maxFruit = fruits.reduce(
  (max, fruit) => (fruit.calories > max.calories ? fruit : max),
  fruits[0]
);
const minFruit = fruits.reduce(
  (min, fruit) => (fruit.calories < min.calories ? fruit : min),
  fruits[0]
);
console.log(maxFruit.calories);
console.log(minFruit.calories);
