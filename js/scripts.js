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

const generateAleatoryNumber = () => {
  const aleatoryNumber = Math.floor(Math.random()*(uppercaseLetters.length))
  return aleatoryNumber
}

passwordLengthElement.textContent = `LENGHT: ${rangeBarElement.value}`;

const adaptLength = () => {
  passwordLengthElement.textContent = `LENGHT: ${rangeBarElement.value}`;
};
rangeBarElement.addEventListener('input', adaptLength)


const includeUpperCase = () => {
  const aleatoryUppercase = uppercaseLetters.charAt(generateAleatoryNumber())
  if (includeUppercaseElement.checked === true){
    generatePasswordButton.disabled = false
    return aleatoryUppercase
  } else {generatePasswordButton.disabled = true}
}
includeUppercaseElement.addEventListener('change', includeUpperCase)

const includeLowerCase = () => {
  const aleatoryLowercase = lowercaseLetters.charAt(generateAleatoryNumber())
  if (includeLowercaseElement.checked === true){
    generatePasswordButton.disabled = false
    return aleatoryLowercase
  } 
}
includeLowercaseElement.addEventListener('change', includeLowerCase)


const charactersInPassword = () => {
  let characters = 'hola'
  if (includeLowerCase === true){
    characters += includeLowerCase()
  }
  console.log(includeLowerCase());
  
  return characters
}

const generatePassword = () => {
  password = ''
  for (let i = 0; i < rangeBarElement.value; i++){
    password += charactersInPassword()
  }
  resultPasswordElement.value = password
  
}
generatePasswordButton.addEventListener('click', generatePassword)

