// static collection of HTML elemnts by id, class, element
// can be created by using querySelectorAll,
// similar to an array but no map, filter reduce
//but it has foreach
//node list won't update to autoatically reflect changes
let buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);
//add html/css properties
// buttons.forEach((button) => {
//   button.style.backgroundColor = "red";
//   button.textContent += "😀";
// });
//---------addlistener
buttons.forEach((button) => {
  //   button.addEventListener("click", (event) => {
  //     event.target.style.backgroundColor = "tomato";
  //   });
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "rgba(82, 82, 196, 0.842)";
  });
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "rgba(82, 82, 196, 0.742)";
  });
});
//-----add element
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);
//--------remove an element
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    // console.log(buttons);
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
});
