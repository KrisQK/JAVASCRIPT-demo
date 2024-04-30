let userName = " Bro  Code";

// userName.charAt(0); // B
// userName.charAt(1); // r
// userName.charAt(2); // o

userName.indexOf("o"); // 2匹配第二个
userName.lastIndexOf("o"); // 4匹配最后一个

userName.slice(2, 4); // "oC"   [)
userName.substring(2, 4); // "oC"

userName.length;
userName.trim(); // "BroCode"
userName.toUpperCase(); // "BROCODE"

userName.toLowerCase(); // "brocode"

userName.repeat(3);
// let result = userName.startsWith(" ");

// let result = userName.endsWith(" ");
// let result = userName.includes(" ");
let phoneNumber = "012-345-6789";
// phoneNumber = phoneNumber.replaceAll("-", "/");
// phoneNumber = phoneNumber.padStart(20, "0");
// phoneNumber = phoneNumber.padEnd(30, "0");
//
console.log(phoneNumber);
