const myBox = document.getElementById("myBox");

// keydown keyup
document.addEventListener("keydown", (event) => {
  //   console.log(`key down = ${event.key}`);
  myBox.textContent = "😲";
  myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", (event) => {
  //   console.log(`key up = ${event.key}`);
  myBox.textContent = "😀";
  myBox.style.backgroundColor = "lightblue";
});
//arrowkey

//-------move
const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", (event) => {
  //   console.log(event.key);
  if (event.key.startsWith("Arrow")) {
    event.preventDefault(); //走到下面不会默认能继续走到滚动条下面了
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
      default:
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
