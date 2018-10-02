var numbers = [
  "./img/00.png",
  "./img/01.png",
  "./img/02.png",
  "./img/03.png",
  "./img/04.png",
  "./img/05.png",
  "./img/06.png",
  "./img/07.png",
  "./img/08.png",
  "./img/09.png"
];

let num1 = document.getElementsByClassName("num1");

function randomNumber(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

let digit1 = randomNumber(1, 5);
let digit2 = randomNumber(1, 5);
let result = digit1 + digit2;

console.log(digit1);
console.log(digit2);

function getRandomDigit(id, digit) {
  let parentEl = document.getElementById(id),
    img = document.createElement("IMG");
  img.src = numbers[digit];
  parentEl.appendChild(img);
}

getRandomDigit("num1", digit1);
getRandomDigit("num2", digit2);
