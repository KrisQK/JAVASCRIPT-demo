// function happyBirthday(username, age) {
//   console.log(`Happy Birthday to ${username}!`);
//   console.log("May you have a wonderful day!");
//   console.log(`May ${username} be blessed with many happy returns!`);
//   console.log(`you are ${age} years old`);
// }

// happyBirthday("kk", 25);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);

function add(x, y) {
  let result = x + y;
  return result;
}

let answer = add(2, 3);

function isemail(email) {
  return email.includes("@") ? true : false;
}
console.log(isemail("abc@def.com")); // true
