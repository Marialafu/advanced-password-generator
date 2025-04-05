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

const characters = {
  uppercaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercaseLetters: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-={}[]:;<>,.?</>',
}


let password = '';
let definedCharacters = '';

const generateAleatoryNumber = maxLength => {
  const aleatoryNumber = Math.floor(Math.random() * maxLength);
  return aleatoryNumber;
};

passwordLengthElement.textContent = `LENGHT: ${rangeBarElement.value}`;
const adaptLength = () => {
  passwordLengthElement.textContent = `LENGHT: ${rangeBarElement.value}`;
};

const activateGeneratePasswordButton = () => {
  if (
    includeLowercaseElement.checked ||
    includeUppercaseElement.checked ||
    includeNumbersElement.checked ||
    includeSymbolsElement.checked
  ) {
    generatePasswordButton.disabled = false;
  } else {
    generatePasswordButton.disabled = true;
  }
};

const includeCharacters = () => {
  definedCharacters = '';
  password = '';

  if (includeUppercaseElement.checked) {
    password += characters.uppercaseLetters.charAt(generateAleatoryNumber(characters.uppercaseLetters.length))
    definedCharacters += characters.uppercaseLetters;
  }
  if (includeLowercaseElement.checked) {
    password += characters.lowercaseLetters.charAt(generateAleatoryNumber(characters.lowercaseLetters.length))
    definedCharacters += characters.lowercaseLetters;
  }
  if (includeNumbersElement.checked) {
    password += characters.numbers.charAt(generateAleatoryNumber(characters.numbers.length));
    definedCharacters += characters.numbers;
    
  }
  if (includeSymbolsElement.checked) {
    password += characters.symbols.charAt(generateAleatoryNumber(characters.symbols.length));
    definedCharacters += characters.checkedsymbols;
  }
  
};

const generatePassword = () => {
  includeCharacters();
  for (let i = password.length; i < rangeBarElement.value; i++) {
    password += definedCharacters.charAt(
      generateAleatoryNumber(definedCharacters.length)
    );
  }
  resultPasswordElement.value = password;
  
  password = '';
};
generatePasswordButton.addEventListener('click', generatePassword);
rangeBarElement.addEventListener('input', adaptLength);

includeUppercaseElement.addEventListener(
  'change',
  activateGeneratePasswordButton
);
includeLowercaseElement.addEventListener(
  'change',
  activateGeneratePasswordButton
);
includeSymbolsElement.addEventListener(
  'change',
  activateGeneratePasswordButton
);
includeNumbersElement.addEventListener(
  'change',
  activateGeneratePasswordButton
);
