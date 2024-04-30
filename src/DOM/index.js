// document.title = "My Website";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%";

// console.dir(document);
const username = "Kris";

const welcomeMsg = document.getElementById("welcome-Msg");
welcomeMsg.textContent += username === "" ? "Guest" : username;
