const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function appendToDisplay(input) {
  display.value += input;
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
function clearDisplay() {
  display.value = "";
}
