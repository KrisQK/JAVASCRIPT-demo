// let age = 25;
// if (age >= 18) {
//   console.log("You are old enough to enter this site.");
// } else {
//   console.log(
//     "You must be 18+ t enter this site, You are not old enough to enter this site."
//   );
// }
// let time = 14;
// if (time < 12) {
//   console.log("Good morning");
// } else {
//   console.log("Good afternoon");
// }
// let isStudent = true;
// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are not a student");
// }
// let age = 125;
// let hasLicense = true;
// if (age <= 18 && !hasLicense) {
//   console.log("Youare not enough to drive   .");
// } else if (age >= 18 && !hasLicense) {
//   console.log("You need a driver's license to drive.");
// } else if (age >= 100) {
//   console.log("You are a time traveler.");
// }
const myText = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");

myButton.addEventListener("click", () => {
  const age = myText.value;
  if (age <= 18) {
    showResult("You are not old enough to enter this site.");
  } else if (age >= 100) {
    showResult("You are a time traveler.");
  }
});
function showResult(message) {
  result.innerHTML = message;
}
