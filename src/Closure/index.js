//closure
// function inside a function
//the inner function has access to the variables of the outer function
//even after the outer function has returned
//used frequently inJS framework React Angular Vue
// Allow for private variables and state maintance
function outer() {
  let message = "Hello";
  function inner() {
    console.log(message);
  }

  inner();
}
outer();
//--
function increment() {
  let count = 0;
  count++;
  console.log(count);
}
increment(); // 1
increment(); // 1
increment(); // 1
//--closure with private variables
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increase d to ${count}`);
  }
  function getCount() {
    return count;
  }
  return { increment, getCount }; // return a object
  //return { increment };
  //returning an object with the increment function
}
const counter = createCounter();
counter.increment(); // Count increase d to 1
counter.increment(); // Count increase d to 2

// counter.count = 0;
// console.log(counter.count); // undefined
// console(counter.count);

console.log("Now the counter is: ", counter.getCount()); // 3
//------game

function createGame() {
  let score = 0;
  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }
  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }
  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}
const game = createGame();
game.increaseScore(5);
game.increaseScore(10);
game.decreaseScore(3);
console.log("Score is: ", game.getScore(), "pts"); // 12
//--
// score = 10000000000000;
// increaseScore(5);
// increaseScore(10);
// decreaseScore(3);
// console.log("Score is: ", getScore(), "pts"); // 12
