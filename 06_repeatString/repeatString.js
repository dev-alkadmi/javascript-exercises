const repeatString = function (word, numberOfRepeats) {
    let repeatedWord = word;

    if (numberOfRepeats == 0) {
        repeatedWord = '';
    }
    else if(numberOfRepeats < 0){
        return "ERROR";
    }
    else {
        for (let index = 1; index < numberOfRepeats; index++) {
            repeatedWord += word;
        }
    }

    return repeatedWord;

};

// Do not edit below this line
module.exports = repeatString;
