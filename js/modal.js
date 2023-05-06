import { calculateIMC } from "./utils.js";

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('.modal-wrapper button'),
  message: document.querySelector('h2.title'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  },
  displayResultMessage() {
  Modal.message.innerHTML = `Seu IMC é ${calculateIMC()}`;
  Modal.open();
  }
};

Modal.buttonClose.addEventListener('click', () => Modal.close() );
window.addEventListener('keydown', handleKeydown );

function handleKeydown() {
  if(event.key === 'Escape')
    Modal.close();
};