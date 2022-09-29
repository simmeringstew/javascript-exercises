const removeFromArray = function(array, arg) {
    
    let argv = [];

    for (let i = 1; i < arguments.length; i++){
        argv.push(arguments[i]);
    }

    const copyArray = array.slice(0);
    let newArray = [];

    for (let i = 0; i < copyArray.length; i++){
        if (argv.includes(copyArray[i])) {
            continue;
        }
        else {
            newArray.push(copyArray[i]);
        }
    }
    return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
