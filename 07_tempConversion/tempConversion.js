const ftoc = function(temp) {
    let c = ((temp - 32) * 5) / 9;
    let roundedC = Math.round(c * 10) / 10;
    return roundedC; 
};

const ctof = function(temp) {
    let f = (temp * 1.8) + 32;
    let roundedF = Math.round(f * 10) / 10;
    return roundedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
