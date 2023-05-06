export const inputWeight = document.querySelector('#weight');
export const inputHeight = document.querySelector('#height');

export function notANumber(value) {
  return isNaN(value) || value == '';
}

export function calculateIMC() {
  return (Number(inputWeight.value) / (Number(inputHeight.value) / 100) ** 2).toFixed(2);
}