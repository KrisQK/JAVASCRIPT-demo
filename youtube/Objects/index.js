const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: () => {
    console.log(`Hello, I am ${this.firstName} ${this.lastName}`);
  },
  eat: () => {
    console.log(`I am eating Krabby patty`);
  },
};
const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 25,
  isEmployed: false,
  sayHello: function () {
    console.log(`Hey, I am ${this.firstName} ${this.lastName}`);
  },
  eat: function () {
    console.log(`I am eating pizza`);
  },
};
person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
