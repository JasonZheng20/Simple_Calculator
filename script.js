// simple JS without e36 classes

//bugs
//2. reset size if justComputed and recompute
//4. compute if directly to next operation
//5. refresh buffers if calculate next and not on default viewport
//6. sometimes excessively long buffers will cause overflow

var currNum = "0";
var number = "";
var currOp = "";
var hasOperation = false;

var currNum2 = "";
var justComputed = false;
var currNumBuffer = "0";

var lastLog = "";
var timesLogged = 0;

var bufferLog = "";

const containerWidth = document.querySelector(".button").offsetWidth * 2;

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
this.subFunc = this.subFunc.bind(this);
this.divFunc = this.divFunc.bind(this);
this.multFunc = this.multFunc.bind(this);
this.upFunc = this.upFunc.bind(this);
this.downFunc = this.downFunc.bind(this);

function concatNum() {
  justComputed = false;
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
  if (!justComputed) {
    const currentRes = parseFloat(currNum);
    currNum = -currentRes;
    document.querySelector(".result").textContent = currNum;
  }
  else {
    const currentRes = parseFloat(currNumBuffer);
    currNumBuffer = -currentRes;
    document.querySelector(".result").textContent = currNumBuffer;
  }
}

function clearFunc() {
  if (currOp != "") document.querySelector(currOp).classList.remove("clicked");
  currNum = "0";
  number = "";
  currOp = "";
  hasOperation = false;
  document.querySelector(".result").textContent = currNum;
  document.querySelector(".result").style.fontSize = "80px";
}

function compute() {
  if (hasOperation) {
    if (currOp == ".add") {
      const ultimate = parseFloat(currNum2) + parseFloat(currNum);
      currNumBuffer = ultimate; //need to make it so if next click is an operation do that operation instead of clear
      document.querySelector(".result").textContent = ultimate;
      while (document.querySelector(".result").offsetWidth > containerWidth) {
        let newSize = window.getComputedStyle(document.querySelector(".result")).getPropertyValue('font-size').replace("px", "");
        newSize = (parseInt(newSize) * 0.8) + "px";
        console.log(newSize);
        document.querySelector(".result").style.fontSize = newSize;
      }
      lastLog = currNum2 + " + " + currNum + " = " + ultimate;
    }
    if (currOp == ".subtract") {
      const ultimate = parseFloat(currNum2) - parseFloat(currNum);
      currNumBuffer = ultimate; //need to make it so if next click is an operation do that operation instead of clear
      document.querySelector(".result").textContent = ultimate;
      while (document.querySelector(".result").offsetWidth > containerWidth) {
        let newSize = window.getComputedStyle(document.querySelector(".result")).getPropertyValue('font-size').replace("px", "");
        newSize = (parseInt(newSize) * 0.8) + "px";
        console.log(newSize);
        document.querySelector(".result").style.fontSize = newSize;
      }
      lastLog = currNum2 + " - " + currNum + " = " + ultimate;
    }
    if (currOp == ".divide") {
      const ultimate = parseFloat(currNum2) / parseFloat(currNum);
      currNumBuffer = ultimate; //need to make it so if next click is an operation do that operation instead of clear
      document.querySelector(".result").textContent = ultimate;
      while (document.querySelector(".result").offsetWidth > containerWidth) {
        let newSize = window.getComputedStyle(document.querySelector(".result")).getPropertyValue('font-size').replace("px", "");
        newSize = (parseInt(newSize) * 0.8) + "px";
        console.log(newSize);
        document.querySelector(".result").style.fontSize = newSize;
      }
      lastLog = currNum2 + " ÷ " + currNum + " = " + ultimate;
    }
    if (currOp == ".multiply") {
      const ultimate = parseFloat(currNum2) * parseFloat(currNum);
      currNumBuffer = ultimate; //need to make it so if next click is an operation do that operation instead of clear
      document.querySelector(".result").textContent = ultimate;
      while (document.querySelector(".result").offsetWidth > containerWidth) {
        let newSize = window.getComputedStyle(document.querySelector(".result")).getPropertyValue('font-size').replace("px", "");
        newSize = (parseInt(newSize) * 0.8) + "px";
        console.log(newSize);
        document.querySelector(".result").style.fontSize = newSize;
      }
      lastLog = currNum2 + " × " + currNum + " = " + ultimate;
    }

    console.log(lastLog);

    document.querySelector(currOp).classList.remove("clicked");
    const newBuff = document.createElement('div');
    newBuff.classList.add('buffer');
    newBuff.classList.add("h" + timesLogged);
    newBuff.textContent = lastLog;
    currBottom = timesLogged;
    timesLogged += 1;
    if (timesLogged > 3) {
      const toHide = timesLogged - 4;
      document.querySelector(".h" + toHide).classList.add('inactive'); //find another way to select without numbers
    }
    document.querySelector(".answerBar").insertBefore(newBuff, document.querySelector(".result"));
    justComputed = true;
  }
  else {
    if (!justComputed) currNumBuffer = currNum;
    document.querySelector(".result").textContent = parseFloat(currNumBuffer);
    justComputed = true;
  }
  currNum = "0";
  number = "";
  currOp = "";
  hasOperation = false; //buggy, for some reason a call to this.clearFunc doesn't work
}

function addFunc() {
  if (!hasOperation) {
    currOp = ".add";
    document.querySelector(".add").classList.add("clicked");
    hasOperation = true;
    if (justComputed) {
      currNum2 = currNumBuffer;
    }
    else {
      currNum2 = currNum;
    }
    currNum = "0";
  }
}

function subFunc() {
  if (!hasOperation) {
    currOp = ".subtract";
    document.querySelector(".subtract").classList.add("clicked");
    hasOperation = true;
    if (justComputed) {
      currNum2 = currNumBuffer;
    }
    else {
      currNum2 = currNum;
    }
    currNum = "0";
  }
}

function divFunc() {
  if (!hasOperation) {
    currOp = ".divide";
    document.querySelector(".divide").classList.add("clicked");
    hasOperation = true;
    if (justComputed) {
      currNum2 = currNumBuffer;
    }
    else {
      currNum2 = currNum;
    }
    currNum = "0";
  }
}

function multFunc() {
  if (!hasOperation) {
    currOp = ".multiply";
    document.querySelector(".multiply").classList.add("clicked");
    hasOperation = true;
    if (justComputed) {
      currNum2 = currNumBuffer;
    }
    else {
      currNum2 = currNum;
    }
    currNum = "0";
  }
}

function upFunc() {
  if (currBottom > 2) {
    document.querySelector(".h" + (currBottom)).classList.add('inactive');
    document.querySelector(".h" + (currBottom - 3)).classList.remove('inactive');
    currBottom = currBottom - 1;
    console.log(currBottom);
  }
}

function downFunc() {
  if (timesLogged > 3 && currBottom < timesLogged - 1) {
    document.querySelector(".h" + (currBottom - 2)).classList.add('inactive');
    document.querySelector(".h" + (currBottom + 1)).classList.remove('inactive');
    currBottom = currBottom + 1;
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

sub.addEventListener('click', this.subFunc);

div.addEventListener('click', this.divFunc);

mult.addEventListener('click', this.multFunc);

up.addEventListener('click', this.upFunc);

down.addEventListener('click', this.downFunc);
