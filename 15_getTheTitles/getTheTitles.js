const getTheTitles = function(bookArray) {
    let bookNameArray = [];

    for (let index = 0; index < bookArray.length; index++) {
        bookNameArray.push(bookArray[index].title);
    }

    return bookNameArray;
};

// Do not edit below this line
module.exports = getTheTitles;
