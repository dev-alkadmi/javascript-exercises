const removeFromArray = function (inputtedArray) {
    const args = Array.from(arguments);
    for (let index = 1; index < args.length; index++) {
        let i = 0;
        while (i < inputtedArray.length) {
            if (inputtedArray[i] === args[index]) {
                inputtedArray.splice(i, 1);
            }
            else {
                ++i;
            }
        }
    }

    return inputtedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
