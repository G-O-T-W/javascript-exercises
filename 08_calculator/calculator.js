const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, currentNum) => sum + currentNum, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, currentNum) => sum * currentNum, 1);
};

const power = function(a, b) {
  let exp = 1;
	for (let i = 1; i <= b; i++) {
    exp = exp * a;
  }
  return exp;
};

const factorial = function(num) {
  let fact = 1
	for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
