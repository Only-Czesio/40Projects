const display = document.querySelector('.numHolder')

let number = 0;

function reset () {
  number = 0
  if (display) {
    display.textContent = '0'
  }
}

function increase () {
  number += 1
  if (display) {
    display.textContent = `${number}`
  }
}

function decrease () {
  if(number === 0) return;

  number -= 1
  if (display) {
    display.textContent = `${number}`
  }
}