// const fullName = "Broseph Code";
// // let firstName = fullName.slice(0, 3);
// // let lastName = fullName.slice(4, 8);

// // let firstChar = fullName.slice(0, 1);
// // let lastChar = fullName.slice(-1);
// // console.log(firstChar); // "Br"
// // console.log(lastChar); // "Br"
// // 用indexat结合
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName); // "Bro"
// console.log(lastName); // "Name); // "Bro"
const email = "bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username); // "bro1"
console.log(extension); // "gmail.com"
