// simple JS without e36 classes
var result = document.querySelector(".result");

var clicked = null;
var currNum = "0";
var number = "0";
var currOp = null;

const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const zero = document.querySelector(".zero");
const dec = document.querySelector(".decimal");
const sign = document.querySelector(".sign");
const div = document.querySelector(".divide");
const mult = document.querySelector(".multiply");
const sub = document.querySelector(".subtract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

this.concatNum = this.concatNum.bind(this);

function concatNum() {
  const containerWidth = document.querySelector(".button").offsetWidth * 2;
  if (document.querySelector(".result").offsetWidth > containerWidth) {
    let newSize = window.getComputedStyle(document.querySelector(".result")).getPropertyValue('font-size').replace("px", "");
    newSize = (parseInt(newSize) * 0.8) + "px";
    console.log(newSize);
    document.querySelector(".result").style.fontSize = newSize;
  }
  if (currNum == 0) currNum = number;
  else {
    currNum += number;
  }
  document.querySelector(".result").textContent = currNum;
  console.log(currNum);
}

nine.addEventListener('click', function() {number = "9";});
nine.addEventListener('click', this.concatNum);

eight.addEventListener('click', function() {number = "8";});
eight.addEventListener('click', this.concatNum);

seven.addEventListener('click', function() {number = "7";});
seven.addEventListener('click', this.concatNum);

six.addEventListener('click', function() {number = "6";});
six.addEventListener('click', this.concatNum);

five.addEventListener('click', function() {number = "5";});
five.addEventListener('click', this.concatNum);

four.addEventListener('click', function() {number = "4";});
four.addEventListener('click', this.concatNum);

three.addEventListener('click', function() {number = "3";});
three.addEventListener('click', this.concatNum);

two.addEventListener('click', function() {number = "2";});
two.addEventListener('click', this.concatNum);

one.addEventListener('click', function() {number = "1";});
one.addEventListener('click', this.concatNum);

zero.addEventListener('click', function() {number = "0";});
zero.addEventListener('click', this.concatNum);
