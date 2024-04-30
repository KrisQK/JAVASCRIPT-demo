class MathUtil {
  static PI = 3.14;
  static getDiameter(radius) {
    return 2 * radius;
  }
  static getcircumference(radius) {
    return 2 * Math.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getcircumference(5));
console.log(MathUtil.getArea(5));

class User {
  static userCount = 0;
  constructor(username) {
    this.usrname = username;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`There are ${User.userCount}`);
  }
  sayHello() {
    console.log(`Hello, ${this.usrname}!`);
  }
}
const user1 = new User("John");
const user2 = new User("Spongebob");
const user3 = new User("Sandy");
console.log(User.userCount); // 2
user1.sayHello(); // Hello, John!
user2.sayHello(); // Hello, Spongebob!
user3.sayHello(); // Hello, Sandy!
User.getUserCount();
