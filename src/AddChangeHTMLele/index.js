//step1 create the ele
const nH1 = document.createElement("h1");

//step2 add attributes/properties to the ele
nH1.textContent = "I like Pizza";
nH1.id = "myH1";
nH1.style.color = "red";
nH1.style.fontSize = "2em";
nH1.style.textAlign = "center";

//step3 append ele to DOM
// document.body.append(nH1);
// document.getElementById("box1").append(nH1);
document.getElementById("box2").prepend(nH1);
// document.body.prepend(nH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(nH1, box3); //找到父亲, 再儿子之间插在中间

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(nH1, boxes[1]);
//remove HTML ele
document.body.children[1].removeChild(nH1); //找到父亲打孩子
