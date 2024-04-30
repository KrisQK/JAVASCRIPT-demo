// hello(leave);

// function hello(callback) {
//   console.log("Hello");
//   callback();
// }
// function goodbye() {
//   console.log("Goodbye");
// }
// function leave() {
//   console.log("leave");
// }
// function wait() {
//   console.log("wait");
// }

sum(displayDOM, 2, 3);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function display(result) {
  console.log("The sum is: " + result);
}
function displayDOM(result) {
  document.getElementById("myH1").textContent = result;
}
