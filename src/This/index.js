const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function () {
    console.log("Hello, I am " + this.name);
  },
  eat: function () {
    console.log(this.name + " is eating " + this.favFood);
  },
};
const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: () => {
    console.log("Hello, I am " + this.name);
  },
  eat: () => {
    console.log(this.name + " is eating " + this.favFood);
  },
};
person1.eat();
person2.eat();
