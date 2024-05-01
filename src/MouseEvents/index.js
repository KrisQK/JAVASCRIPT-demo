//events: click, mouseover, mouseout
//addeventlistener(event,callback)
// let flag = true;
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 😖!";
// }
// myBox.addEventListener("click", function (event) {
//   if (flag) {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😖!";
//     flag = false;
//   } else {
//     event.target.style.backgroundColor = "white";
//     event.target.textContent = "Click me!";
//     flag = true;
//   }
// });
myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 😖!";
});
myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it 🫣";
});
myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "click me ☺️";
});
