// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
//   fruit.style.textAlign = "center";
//   fruit.textContent = fruit.textContent + "kk";
// }
// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "yellow";
//   fruit.style.textAlign = "center";
//   fruit.textContent = fruit.textContent + "kk";
// });
//----
const h4Elements = document.getElementsByTagName("h4");
// console.log(h4Elements);
//-------querySelector-------
const element = document.querySelector("ul");
element.style.backgroundColor = "yellow";

const fruits = document.querySelectorAll("li");
fruits.forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});

console.log(fruits);
