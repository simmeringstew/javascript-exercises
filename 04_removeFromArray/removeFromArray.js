const removeFromArray = function(array, arg) {
    
    let argv = [];

    for (let i = 1; i < arguments.length; i++){
        argv.push(arguments[i]);
    }

    const copyArray = array.slice(0);
    let newArray = [];

    copyArray.forEach(element => {
        if (argv.includes(element) === false) {
            newArray.push(element)
        }
    });
    return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
