const resultPasswordElement = document.getElementById('result-password');
const generatePasswordButton = document.getElementById(
  'generate-password-button'
);

const rangeBarElement = document.getElementById('range-bar');

const includeUppercaseElement = document.getElementById('include-uppercase');
const includeLowercaseElement = document.getElementById('include-lowercase');
const includeNumbersElement = document.getElementById('include-numbers');
const includeSymbolsElement = document.getElementById('include-symbols');

let passwordLengthElement = document.getElementById('password-length');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '01234567890';
const symbols = '!@#$%^&*()_+-={}[]:;<>,.?</>';

let password = '';

passwordLengthElement.textContent = `LENGHT: ${rangeBarElement.value}`;

const adaptLength = () => {
  passwordLengthElement.textContent = `LENGHT: ${rangeBarElement.value}`;
};

const generateAleatoryCharacter = characters => {
  const aleatoryPosition = Math.floor(Math.random() * characters.length - 1);
  const aleatoryCharacter = characters.charAt(aleatoryPosition);
  return aleatoryCharacter;
};

// const generateAleatoryPassword = () => {
//   let password = '';
//   for (let i = 0; i < rangeBarElement.value; i++)
//     password += generateAleatoryCharacter(characters);
//   resultPasswordElement.value = password;
// };

const includeDefinedPassword = () => {
  if (includeLowercaseElement.checked) {
    console.log((password += lowercaseLetters.charAt(0)));
  } else {
    console.log(false);
  }
};
includeLowercaseElement.addEventListener('change', includeDefinedPassword);

rangeBarElement.addEventListener('input', adaptLength);
// generatePasswordButton.addEventListener('click', generateAleatoryPassword);
