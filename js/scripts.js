const resultPasswordElement = document.getElementById('result-password');
const generatePasswordButton = document.getElementById(
  'generate-password-button'
);

const rangeBarElement = document.getElementById('range-bar');

const charactersToIncludeincludeElement = document.querySelectorAll('.checkbox-switch')
console.dir(charactersToIncludeincludeElement)
console.log(charactersToIncludeincludeElement[0]);

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
    charactersToIncludeincludeElement[0].checked ||
    charactersToIncludeincludeElement[1].checked ||
    charactersToIncludeincludeElement[2].checked ||
    charactersToIncludeincludeElement[3].checked
  ) {
    generatePasswordButton.disabled = false;
  } else {
    generatePasswordButton.disabled = true
  }
};

const includeCharacters = () => {
  definedCharacters = '';
  password = '';

  if (charactersToIncludeincludeElement[0].checked) {
    password += characters.uppercaseLetters.charAt(generateAleatoryNumber(characters.uppercaseLetters.length))
    definedCharacters += characters.uppercaseLetters;
  }
  if (charactersToIncludeincludeElement[1].checked) {
    password += characters.lowercaseLetters.charAt(generateAleatoryNumber(characters.lowercaseLetters.length))
    definedCharacters += characters.lowercaseLetters;
  }
  if (charactersToIncludeincludeElement[2].checked) {
    password += characters.numbers.charAt(generateAleatoryNumber(characters.numbers.length));
    definedCharacters += characters.numbers;
    
  }
  if (charactersToIncludeincludeElement[3].checked) {
    password += characters.symbols.charAt(generateAleatoryNumber(characters.symbols.length));
    definedCharacters += characters.checked.symbols;
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


charactersToIncludeincludeElement.forEach(checkbox => {
  checkbox.addEventListener(
    'change',
    activateGeneratePasswordButton
  );
})

