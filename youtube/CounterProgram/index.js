document.getElementById("myButton").onclick = function () {
  document.getElementById("myH1").textContent++;
};

let myh2 = document.createElement("h2");
let nText = document.createTextNode("我是图图小淘气");
myh2.appendChild(nText);

let ele = document.getElementsByTagName("body")[0]; //jihe
// ele.appendChild(h2);
let th1 = document.getElementById("myH1");
ele.insertBefore(myh2, th1);

let h1s = document.getElementsByTagName("h1");
for (let i = 0; i < h1s.length; i++) {
  h1s[i].onclick = function () {
    h1s[i].innerHTML = `别碰我!!!`;
  };
}

// COUNTER
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
