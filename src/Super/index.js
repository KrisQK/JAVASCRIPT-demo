class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`The ${this.name} moves at a speed of${speed} mph`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);

    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`The ${this.name} can run`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`The ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`The ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}
const rabbit = new Rabbit("White Rabbit", 2, 10);
const fish = new Fish("Gold Fish", 1, 5);
const hawk = new Hawk("Crowned Hawk", 3, 20);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish);
console.log(hawk);
rabbit.run();
fish.swim();
