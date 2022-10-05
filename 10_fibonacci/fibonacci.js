const fibonacci = function(index) {

    if (index < 0) {
        return "OOPS";
    }

    let sequence = [1, 1];
    let previous = 1;
    let furtherPrevious = 1;
    for (let i = 2; i < index; i++) {
        sequence.push(furtherPrevious + previous);
        let temp = previous;
        previous = furtherPrevious + previous;
        furtherPrevious = temp;
    }
    return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
