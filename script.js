// simple JS without e36 classes
var result = document.querySelector(".result");

var currNum = "0";
var number = "";
var currOp = "";
var hasOperation = false;

var currNum2 = "";

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
this.switchFunc = this.switchFunc.bind(this);
this.compute = this.compute.bind(this);
this.clearFunc = this.clearFunc.bind(this);
this.addFunc = this.addFunc.bind(this);

function concatNum() {
  const containerWidth = document.querySelector(".button").offsetWidth * 2;
  if (document.querySelector(".result").offsetWidth > containerWidth) {
    let newSize = window.getComputedStyle(document.querySelector(".result")).getPropertyValue('font-size').replace("px", "");
    newSize = (parseInt(newSize) * 0.8) + "px";
    console.log(newSize);
    document.querySelector(".result").style.fontSize = newSize;
  }
  if (currNum == "0" && number != ".") currNum = number;
  else if (currNum == "0" && number == ".") currNum = "0.";
  else {
    currNum += number;
  }
  document.querySelector(".result").textContent = currNum;
  console.log(currNum);
}

function switchFunc() {
  const currentRes = parseFloat(currNum);
  currNum = -currentRes;
  document.querySelector(".result").textContent = currNum;
}

function clearFunc() {
  if (currOp != "") document.querySelector(currOp).classList.remove("clicked");
  currNum = "0";
  number = "";
  currOp = "";
  hasOperation = false;
  document.querySelector(".result").textContent = currNum;
  //add functionality for history console
}

function compute() {
  if (hasOperation) {
    if (currOp == ".add") {
      const ultimate = parseFloat(currNum2) + parseFloat(currNum);
      document.querySelector(".result").textContent = ultimate;
    }
    document.querySelector(currOp).classList.remove("clicked");
  }
  else {
    document.querySelector(".result").textContent = parseFloat(currNum);
  }
  currNum = "0";
  number = "";
  currNum2 = "";
  currOp = null;
  hasOperation = false;
  //buggy, for some reason a call to this.clearFunc doesn't work
}

function addFunc() {
  if (!hasOperation) {
    currOp = ".add";
    document.querySelector(".add").classList.add("clicked");
    hasOperation = true;
    currNum2 = currNum;
    currNum = "0";
  }
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

dec.addEventListener('click', function() {
  if (!currNum.includes(".")) {
    number = ".";
  }
  else {
    number = "";
  }
  });
dec.addEventListener('click', this.concatNum);

sign.addEventListener('click', this.switchFunc);

equal.addEventListener('click', this.compute);

clear.addEventListener('click', this.clearFunc);

add.addEventListener('click', this.addFunc);
