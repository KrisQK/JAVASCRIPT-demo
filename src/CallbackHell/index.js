// callbackhell- situation nested callbacks
// old pattern to handle asynchronous function
// use promises + async/await to avoid callback hell

function task1(callback) {
  setTimeout(() => {
    console.log("task1 complete");
    callback();
  }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("task2 complete");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("task3 complete");
    callback();
  }, 3000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("task4 complete");
    callback();
  }, 1500);
}
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("all tasks complete");
      });
    });
  });
});
// task2();
// task3();
// task4();
// console.log("all tasks complete");
//sync code
