const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (sumArray) {
  let total = 0;
  for (const num of sumArray) {
    total += num;
  }

  return total;
};

const multiply = function (multiplyArray) {
  let total = 0;
  for (let index = 0; index < multiplyArray.length; index++) {
    if (index == 0) {
      total = multiplyArray[0];
    }
    else {
      total *= multiplyArray[index];
    }
  }

  return total;
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
