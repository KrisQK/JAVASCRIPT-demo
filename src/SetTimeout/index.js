// set time out
// watching TV

function sayHello() {
  window.alert("Hello!");
}
//-----

// setTimeout(sayHello, 2000);
// setTimeout(function () {
//   window.alert("Hello1!");
// }, 2000);

// const timeoutId = setTimeout(() => {
//   window.alert("Hello2!");
// }, 4000);
//-------clearTimeout

// clearTimeout(timeoutId);
let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello3!"), 2000);
  console.log("timer started");
}
function stopTimer() {
  clearTimeout(timeoutId);
  console.log("timer stopped");
}
