//Date(year, month, day, hours, minutes, seconds, milliseconds)
const date = new Date(2099, 11, 19, 12, 30, 0, 0);
console.log(date);
//------
const date1 = new Date("2099-01-03T12:33:00Z");
console.log(date1);
//-------
const date3 = new Date(0);
console.log(date3);
//-----get year
const date4 = new Date();
// const year = date4.getFullYear();
const month = date4.getMonth();
const day = date4.getDate();
const hours = date4.getHours();
const minutes = date4.getMinutes();
const seconds = date4.getSeconds();
const milliseconds = date4.getMilliseconds();
const dayOfWeek = date4.getDay();

console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfWeek);
//-----set year
const date5 = new Date();
date5.setFullYear(2022);
date5.setMonth(11);
date5.setDate(19);
date5.setHours(12);
date5.setMinutes(30);
date5.setSeconds(0);
console.log(date5);
//----
const date6 = new Date("2029-01-03T12:33:00Z");
const date7 = new Date("2088-01-03T12:33:00Z");
if (date6 < date7) {
  console.log("date6 is not greater than date7");
}
