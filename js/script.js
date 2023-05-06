import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { notANumber, inputHeight, inputWeight } from './utils.js';

const form = document.querySelector('form');

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();
form.addEventListener('submit', event => {
  event.preventDefault();
  const weightOrHeightIsNotANumber = notANumber(inputHeight.value) || notANumber(inputWeight.value);
  if(weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }
  Modal.displayResultMessage()
});