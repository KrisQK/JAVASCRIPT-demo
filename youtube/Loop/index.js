// let username;

// do {
//   username = window.prompt("Please enter your username:");
// } while (username === "" || username === null);

// console.log("Welcome, " + username + "!");

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Please enter your username:");
  password = window.prompt("Please enter your password:");
  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("you are logged in");
  } else {
    console.log("invalid redential pls try again");
  }
}

for (let i = 0; i <= 2; i++) {
  console.log(i);
}
