const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt(`enter the radius of a circle`);

document.getElementById("myButton").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);

  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = `${circumference}cm`;
};
