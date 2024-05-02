//classlist = element property injs used to interact
//with an element's list of classes(css classes)
//allows you to make resuable classes for many elements
//across your webpage

// add
//remove
//Toggle(remove if present, add if not)
//replace
//contains

//example usage:
const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");
// myButton.classList.add("hover");
// myButton.classList.remove("enabled");

//------------add/remove
// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");
// });
// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");
// });
//----------toggle
// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// });
//---------replace
myH1.classList.add("enabled");
myButton.classList.add("enabled");
myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "🤬";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "🤬";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
