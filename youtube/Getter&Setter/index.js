class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("width need to be apositive number");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height need to be apositive number");
    }
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get area() {
    return (this._width * this._height).toFixed(2);
  }
}

const rectangle = new Rectangle(3, 4);
rectangle.width = 5;
// rectangle.height = "pizza";
console.log(rectangle.width); // -100000
console.log(rectangle.height); // "pizza"
console.log(rectangle.area); // 12

//--------
class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name need to be a string and not empty");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name need to be a string and not empty");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Age need to be a positive number");
    }
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get getfullName() {
    return this._firstName + " " + this._lastName;
  }
}

// const person = new Person(123, 22, "Pizza");
const person = new Person("John", "Doe", 30);
person.firstName = "Jane";
person.lastName = "Doe";
console.log(person.firstName);
console.log(person.getfullName);
