const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(numbers) {
	if (numbers.length === 0) {
    return 0;
  }
  else {
    const sum = numbers.reduce((total, number) => {
      return total + number
    }, 0);
    return sum;
  }
};

const multiply = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  else {
    const sum = numbers.reduce((total, number) => {
      return total * number
    }, 1);
    return sum;
  }
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
  }
  else {
    let total = 1;
    for (n; n > 1; n--) {
      total *= n;
    }
    return total;
  }
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
