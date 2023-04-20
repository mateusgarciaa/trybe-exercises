import validator from 'validator';

const form = document.getElementById('validation-form');
const validationResult = document.getElementById('validation-result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputText = document.getElementById('input-text').value;
  const validationType = document.getElementById('validation-type').value;

  let isValid;
  switch (validationType) {
    case 'isEmail':
      case 'isEmail':
      isValid = validator.isEmail(inputText);
      break;
    case 'isURL':
      isValid = validator.isURL(inputText);
      break;
    case 'isNumeric':
      isValid = validator.isNumeric(inputText);
      break;
    case 'isAlpha':
      isValid = validator.isAlpha(inputText);
      break;
    case 'isMobilePhone':
      isValid = validator.isMobilePhone(inputText, 'any');
      break;
    default:
      isValid = false;
  }

  validationResult.textContent = isValid ? 'Válido' : 'Inválido';
  validationResult.classList.add(isValid ? 'valid' : 'invalid');
  validationResult.classList.remove(isValid ? 'invalid' : 'valid');
});
