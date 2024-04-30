function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`you drive the ${this.model}`);
  };
}
const car1 = new Car("BMW", "X5", 2021, "red");
const car2 = new Car("Toyota", "Camry", 2020, "blue");
const car3 = new Car("Honda", "Civic", 2019, "black");

car1.drive();
car2.drive();
car3.drive();

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
