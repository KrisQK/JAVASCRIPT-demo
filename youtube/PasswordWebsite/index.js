function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let password = "";
  let allowedChars = "";

  allowedChars += includeLowercase ? lowercase : "";
  allowedChars += includeUppercase ? uppercase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";
  console.log(allowedChars);
  if (length <= 0) {
    return `(Password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected)`;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const includeLowercase = false;
const includeUppercase = true;
const includeNumbers = false;
const includeSymbols = true;

let password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);
console.log(`Generated password: ${password}`);
