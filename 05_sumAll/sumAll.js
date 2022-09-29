const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let smallestNum = 0;
    let biggerNum = 0;

    if (num1 > num2) {
        smallestNum = num2;
        biggerNum = num1;
    }
    else {
        smallestNum = num1;
        biggerNum = num2;
    }
    
    let total = 0;

    for (smallestNum; smallestNum <= biggerNum; smallestNum++) {
        total += smallestNum;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
