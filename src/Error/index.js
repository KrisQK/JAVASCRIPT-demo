// try {
//   console.lag(x);
// } catch (error) {
//   console.error(error);
// } finally {
//   //close files

//   //release resources
//   console.log("this always excutes");
// }

// console.log("the end of world");
try {
  const dividend = Number(window.prompt("Enter the dividend: "));
  const divisor = Number(window.prompt("Enter the divisor: "));
  if (divisor == 0) {
    throw new Error("you can't devide by zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("you can't devide by non-numeric value");
  }
  const result = dividend / divisor;
  console.log(`The result is ${result}`);
} catch (error) {
  console.error(error);
}
console.log("the end of program");
