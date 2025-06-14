const sumAll = function (firstNumber, lastNumber) {
    if (firstNumber >= 0 && lastNumber >= 0 && Number.isInteger(firstNumber) && Number.isInteger(lastNumber)) {
        let biggerNumber;
        let smallerNumber;

        if (firstNumber >= lastNumber) {
            biggerNumber = firstNumber;
            smallerNumber = lastNumber
        }
        else {
            biggerNumber = lastNumber;
            smallerNumber = firstNumber;
        }

        return ((biggerNumber - smallerNumber + 1) / 2) * (biggerNumber + smallerNumber); //function to add all numbers between the inputted numbers
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
