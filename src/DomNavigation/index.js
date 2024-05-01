//DOM navigation = the process of navigating through the sturecture of an HTML docuement using JS

//.firstElementChild: returns the first child element of the current element
//.lastElementChild: returns the last child element of the current element
//.previousElementSibling: returns the previous sibling element of the current element
//.nextElementSibling: returns the next sibling element of the current element
//.parentElement: returns the parent element of the current element
//.children: returns a collection of all child elements of the current element

//-------.firstElementChild-------
const element = document.getElementById("vegetables");
const firstElementChild = element.firstElementChild;
//console.log(firstElementChild.tagName); // "LI"
firstElementChild.style.backgroundColor = "red";
//--queryS

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

//-------.lastElementChild-------
const eles = document.getElementById("fruits");
const lastEle = eles.lastElementChild;
lastEle.style.backgroundColor = "blue";

const elements2 = document.querySelectorAll("ul");
elements2.forEach((ul) => {
  ul.lastElementChild.style.backgroundColor = "grey";
});
//------.nextElementSibling-------
const ele3 = document.getElementById("vegetables");
const nextsibing = ele3.nextElementSibling;
nextsibing.style.backgroundColor = "green";

//------.previousElementSibling-------
const previousSibling = ele3.previousElementSibling;
previousSibling.style.backgroundColor = "purple";
//------.parentElement-------
const parent = ele3.parentElement;
parent.style.backgroundColor = "orange";

//------.children-------
const ele4 = document.getElementById("fruits");
const children = ele4.children;
Array.from(children).forEach((child) => {
  child.textContent = "new text";
});
