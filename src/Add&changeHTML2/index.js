const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.backgroundColor = "lightgreen";
newListItem.style.fontWeight = "bold";

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

//------没有ID的情况下
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

document.getElementById("fruits").removeChild(newListItem);
