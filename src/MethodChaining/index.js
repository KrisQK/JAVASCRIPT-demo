// no method chaining
let userName = prompt("enter you name:");

username = userName.trim();

let letter = username.charAt(0);

letter = letter.toUpperCase();
let extraLetters = username.slice(1);

extraLetters = extraLetters.toLowerCase();
userName = letter + extraLetters;
console.log(userName);

// method chanining
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
