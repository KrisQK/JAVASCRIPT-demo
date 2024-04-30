//-------callback function-------
function func1(callback) {
  setTimeout(() => {
    console.log("Hello, world!");
    callback();
  }, 3000);
}

function func2() {
  console.log("Goodbye, world!");
  console.log("This is the end of the program.");
}
func1(func2);
console.log("anyone here?");
