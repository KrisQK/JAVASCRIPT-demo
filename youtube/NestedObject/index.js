const person = {
  fullName: "Spongebob Squarepants",
  age: 35,
  isStudents: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St",
    city: "Bikini Bottom",
    contry: "Int. Water",
  },
};
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudents);
// console.log(person.hobbies[0]);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.contry);
for (const property in person.address) {
  console.log(person.address[property]);
}
//----------2

class person1 {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address {
  constructor(street, city, contry) {
    this.street = street;
    this.city = city;
    this.contry = contry;
  }
}
const person2 = new person1(
  "Spongebob Squarepants",
  35,
  "124 Conch St",
  "Bikini Bottom",
  "Int. Water"
);
const person3 = new person1(
  "Patrick",
  35,
  "124 Conch St",
  "Bikini Bottom",
  "Int. Water"
);
const person4 = new person1(
  "Squidward",
  35,
  "124 Conch St",
  "Bikini Bottom",
  "Int. Water"
);
console.log(person3.address);
