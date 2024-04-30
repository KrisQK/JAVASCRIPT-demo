const myCheckbox = document.getElementById("checkbox");

const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed !`;
  } else {
    subResult.textContent = `You are not subscribed !`;
  }
  if (visaBtn.checked) {
    paymentResult.textContent = `You have paid with Visa !`;
  } else if (mastercardBtn.checked) {
    paymentResult.textContent = `You have paid with Mastercard !`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You have paid with Paypal !`;
  } else {
    paymentResult.textContent = `Please select a payment method !`;
  }
};
