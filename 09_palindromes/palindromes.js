const palindromes = function (string) {
    string = string.replace(/\W/g, "");
    string = string.toLowerCase();
    const splitString = string.split("");
    const reversedString = splitString.reverse();
    const joinedString = reversedString.join("");
    if (joinedString === string) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
