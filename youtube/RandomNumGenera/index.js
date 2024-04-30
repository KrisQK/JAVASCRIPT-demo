// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);
const myButton = document.getElementById("myButton");
const myLabels = document.getElementsByClassName("myLabels");
const min = 1;
const max = 6;
// let randomNum;
myButton.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  for (let i = 0; i < myLabels.length; i++) {
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    myLabels[i].textContent = randomNum;
  }
}
